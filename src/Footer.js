import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by{" "}
        <a href="https://github.com/Elfground" target="_blank">
          Monica Alvmarken
        </a>
        , open-sourced on{" "}
        <a href="https://github.com/Elfground/Weather-app-demo" target="_blank">
          Github
        </a>
        , project hosted on{" "}
        <a
          href="https://codesandbox.io/p/sandbox/inspiring-tereshkova-kqqylt"
          target="_blank"
        >
          Codesandbox
        </a>
      </footer>
    </div>
  );
}
