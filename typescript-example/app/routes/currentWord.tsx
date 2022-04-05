import { LinksFunction, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WordComponent, { links as wordLinks } from "~/components/Word";
import wordPageStyles from "~/styles/currentWord.css";

export const links: LinksFunction = () => {
  return [...wordLinks(), { rel: "stylesheet", href: wordPageStyles }];
};

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://random-words-api.vercel.app/word", {
    method: "GET",
  });

  const responseBody = (await response.json()) as WordAPIResponse;
  return json<WordAPIObject>(responseBody[0]);
};

export default function WordRoute() {
  const data = useLoaderData() as WordAPIObject;

  return (
    <main className="current-word-wrapper">
      <WordComponent word={data.word} meaning={data.definition} />
    </main>
  );
}

interface WordAPIObject {
  word: string;
  definition: string;
  pronunciation: string;
}

type WordAPIResponse = WordAPIObject[];
