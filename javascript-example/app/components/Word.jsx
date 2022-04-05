import wordStyles from "./word.css";

export function links() {
  return [{ rel: "stylesheet", href: wordStyles }];
}

export default function WordComponent({ word, meaning }) {
  return (
    <div className="word-wrapper">
      <h3>{word}</h3>
      <p>{meaning}</p>
    </div>
  );
}
