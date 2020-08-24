import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { UseStateValue } from "../../stateProvider";
import { actionTypes } from "../../redux";

export default function Search({ showButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const [, dispatch] = UseStateValue();
  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="search__inputText"
        />
        <MicIcon />
      </div>

      {showButtons ? (
        <div className="search__buttons">
          <Button variant="outlined" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <div className="search__buttonHidden">
            <Button variant="outlined" type="submit" onClick={search}>
              Google Search
            </Button>
          </div>
          <div className="search__buttonHidden">
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        </div>
      )}
    </form>
  );
}
