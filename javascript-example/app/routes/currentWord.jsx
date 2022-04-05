import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WordComponent, { links as wordLinks } from "~/components/Word";
import wordPageStyles from "~/styles/currentWord.css";

export const links = () => {
  return [...wordLinks(), { rel: "stylesheet", href: wordPageStyles }];
};

export const loader = async () => {
  const response = await fetch("https://random-words-api.vercel.app/word");

  const responseBody = await response.json();
  return json(responseBody[0]);
};

export default function WordRoute() {
  const data = useLoaderData();

  return (
    <main className="current-word-wrapper">
      <WordComponent word={data.word} meaning={data.definition} />
    </main>
  );
}
