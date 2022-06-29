import React from "react";
import "./Footer.css";
import { IconButton } from "@mui/material";
import {
  Replay,
  Close,
  StarRate,
  Favorite,
  FlashOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <Replay fontSize="medium" className="swipeButtons_repeat" />
      </IconButton>
      <IconButton>
        <Close fontSize="medium" className="swipeButtons_left"/>
      </IconButton>
      <IconButton>
        <StarRate fontSize="medium" className="swipeButtons_star" />
      </IconButton>
      <IconButton>
        <Favorite fontSize="medium" className="swipeButtons_right"/>
      </IconButton>
      <IconButton>
        <FlashOn fontSize="medium" className="swipeButtons_lightning"/>
      </IconButton>
    </div>
  );
};

export default Footer;
