import { LinksFunction } from "@remix-run/node";
import WordComponent, { links as wordLinks } from "~/components/Word";
import wordPageStyles from "~/styles/currentWord.css";

export const links: LinksFunction = () => {
  return [...wordLinks(), { rel: "stylesheet", href: wordPageStyles }];
};

export default function WordRoute() {
  return (
    <main className="current-word-wrapper">
      <WordComponent word="Guava" meaning="A tropical fruit" />
    </main>
  );
}
