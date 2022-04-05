import { LinksFunction } from "@remix-run/node";
import wordStyles from "./word.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: wordStyles }];
};

interface WordComponentProps {
  word: string;
  meaning: string;
}

export default function WordComponent({ word, meaning }: WordComponentProps) {
  return (
    <div className="word-wrapper">
      <h3>{word}</h3>
      <p>{meaning}</p>
    </div>
  );
}
