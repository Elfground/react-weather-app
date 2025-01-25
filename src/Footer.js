import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by{" "}
        <a href="https://github.com/Elfground" target="_blank" rel="noreferrer">
          Monica Alvmarken
        </a>
        , open-sourced on{" "}
        <a href="https://github.com/Elfground/react-weather-app" target="_blank" rel="noreferrer">
          Github
        </a>
        , project hosted on{" "}
        <a
          href="https://codesandbox.io/p/sandbox/inspiring-tereshkova-kqqylt" rel="noreferrer"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
