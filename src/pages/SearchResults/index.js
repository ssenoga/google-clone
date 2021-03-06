import React from "react";
import "./searchResults.css";

import Search from "../../components/Search";
import { UseStateValue } from "../../stateProvider";
import useGoogle from "../../useGoogle";

import Response from "../../response";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ImageIcon from "@material-ui/icons/Image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";

export default function () {
  const [{ term }, dispatch] = UseStateValue();
  // const { data } = useGoogle(term); live search

  return (
    <div className="searchResults">
      <div className="searchResults__headerTop">
        <div className="searchResults__header">
          <Link to="/">
            <img
              className="searchResults__logo"
              alt=""
              src="data:image/png;base64,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"
            />
          </Link>

          <div className="searchResults__headerBody">
            <Search />
          </div>
        </div>

        <div className="searchResults__headerOptions">
          <div className="options__left">
            <div className="options">
              <SearchIcon />
              <Link>All</Link>
            </div>
            <div className="options">
              <DescriptionIcon />
              <Link>News</Link>
            </div>
            <div className="options">
              <ImageIcon />
              <Link>Image</Link>
            </div>
            <div className="options">
              <LocalOfferIcon />
              <Link>Shopping</Link>
            </div>
            <div className="options">
              <RoomIcon />
              <Link>Maps</Link>
            </div>
            <div className="options">
              <MoreVertIcon />
              <Link>More</Link>
            </div>
          </div>
          <div className="options__right">
            <div className="options">
              <Link>Tools</Link>
            </div>
            <div className="options">
              <Link>Settings</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="searchResults__results"></div>
    </div>
  );
}
