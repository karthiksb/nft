import React from "react";
import "./firstsection.css";
import bg1 from "./bg1.png";
import bg2 from "./bg2.png";
import respbg1 from "./respbg1.png";
import respbg2 from "./respbg2.png";
import man from "./man.png";
import respman from "./respman.png";
import hand from "./hand.gif";
import drop from "./Drop.png";
import view from "./view.png";
import inst from "./instagram.svg";
import fwen from "./fwenclub.svg";
import discord from "./discord.svg";
import twitter from "./twitter.svg";
import apartment from "./aprtment.png";

import { useState, useEffect } from "react";
import { margin } from "@mui/system";

function Firstsection() {
  return (
    <div className="firstsection">
      <div className="bg-container">
        <div className="background">
          <div className="bg1">
            <div className="background1">
              <img className="bg im1" src={bg1} alt="" />
              <img className="respbg " src={respbg1} alt="" />
            </div>
          </div>
          <div className="im2">
            <img src={apartment} alt="" />
          </div>

          <div className="background2">
            <img className="bg im3" src={bg2} alt="" />

            <img className="respbg " src={respbg2} alt="" />
          </div>
          <div className="infos">
            <img className="drop" src={drop} alt="" />
            <div className="links">
              <a href="#">
                <img src={discord} alt="" />
              </a>
              <a href="#">
                <img src={inst} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={fwen} alt="" />
              </a>
            </div>
            <div className="viewon">
              <h1>VIEW ON</h1>
              <img src={view} alt="" />
            </div>
          </div>
        </div>{" "}
        <div className="box">
          <div className="man-c">
            <img className="man" src={man} alt="" />
            <img className="respman" src={respman} alt="" />
          </div>

          <div className="test">
            <img src={hand} alt="" />
          </div>
        </div>
      </div>

      <div className="new">
        <div className="clicks"></div>
      </div>
    </div>
  );
}

export default Firstsection;
