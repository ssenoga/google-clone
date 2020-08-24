import React from "react";
import "./searchResults.css";

import Search from "../../components/Search";
import { UseStateValue } from "../../stateProvider";

export default function () {
  const [{ term }, dispatch] = UseStateValue();
  return (
    <div className="searchResults">
      <div className="searchResults__header">{term}</div>
      <div className="searchResults__results">
        <Search />
      </div>
    </div>
  );
}
