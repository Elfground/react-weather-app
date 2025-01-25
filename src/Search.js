import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter your city.."
          required
          id="search-form-input"
          class="search-form-input"
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
    </div>
  );
}
