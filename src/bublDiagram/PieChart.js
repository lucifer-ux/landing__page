import React, { Component } from "react";
import "./styles.css";
import Slice from "./Slices";
import Cryptos from "./Cryptos";

export default class PieChart extends Component {
  state = {
    slices: {
      1: {
        crypto: "Bitcoin",
        rotate: "rotate(0.0000, 220, 220)",
        fill: "#BF40BF",
        transform: "0.1",
      },
      2: {
        crypto: "Etherium",
        rotate: "rotate(45.0000, 220, 220)",
        fill: "#5D3FD3",
        transform: "0.1",
      },
      3: {
        crypto: "Defi",
        rotate: "rotate(90.0000, 220, 220)",
        fill: "#CF9FFF",
        transform: "0.1",
      },
      4: {
        crypto: "BNB",
        rotate: "rotate(135.0000, 220, 220)",
        fill: "#DA70D6",
        transform: "0.1",
      },
      5: {
        crypto: "USDC",
        rotate: "rotate(180.0000, 220, 220)",
        fill: "#800080",
        transform: "0.1",
      },
      6: {
        crypto: "USDC",
        rotate: "rotate(225.0000, 220, 220)",
        fill: "#7F00FF",
        transform: "0.1",
      },
      7: {
        crypto: "USDC",
        rotate: "rotate(270.0000, 220, 220)",
        fill: "#D8BFD8",
        transform: "0.1",
      },
      8: {
        crypto: "USDC",
        rotate: "rotate(315.0000, 220, 220)",
        fill: "#9F2B68",
        transform: "0.1",
      },
    },
  };

  selectScore = (crypto) => (e) => {
    const targetValue = e.target.value === "10" ? "1" : "0." + e.target.value;
    const newState = Object.assign({}, this.state);
    newState.slices[crypto].transform = targetValue;
    this.setState(newState);
  };

  render() {
    return (
      <div className="containment">
        <div id="Content" style={{ display: "flex" }}>
          <div className="QuestionsBlock">
            <ul style={{ marginTop: "100px", marginLeft: "90px" }}>
              <Cryptos
                slices={this.state.slices}
                selectScore={this.selectScore}
              />
            </ul>
          </div>
          <div className="ChartBlock">
            <div className="ChartPie" style={{ width: "450px" }}>
              <svg
                className="ChartPieChunk"
                width="440px"
                height="440px"
                viewBox="0 0 440 440"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <g id="overlay">
                    <rect
                      x="219"
                      y="20"
                      height="200"
                      width="2"
                      fill="rgb(255, 255, 255)"
                    ></rect>
                    <g transform="translate(210, 10)">
                      <path fill="#000"></path>
                    </g>
                  </g>
                </defs>
                <mask id="wedge-mask" fill="white">
                  <path
                    transform="translate(20, 20)"
                    d="M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z"
                    fillRule="nonzero"
                  ></path>
                </mask>
                <circle
                  cx="220"
                  cy="220"
                  r="200"
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                ></circle>
                <Slice slices={this.state.slices} />
                <use
                  xlinkHref="#overlay"
                  transform="rotate(19, 220, 220)"
                ></use>
                <use
                  xlinkHref="#overlay"
                  transform="rotate(63.7143, 220, 220)"
                ></use>
                <use
                  xlinkHref="#overlay"
                  transform="rotate(108.7143, 220, 220)"
                ></use>
                <use
                  xlinkHref="#overlay"
                  transform="rotate(153.7143, 220, 220)"
                ></use>
                <use
                  xlinkHref="#overlay"
                  transform="rotate(198.7143, 220, 220)"
                ></use>
                <use
                  xlinkHref="#overlay"
                  transform="rotate(243.7143, 220, 220)"
                ></use>
                <use
                  xlinkHref="#overlay"
                  transform="rotate(288.7143, 220, 220)"
                ></use>
                <use
                  xlinkHref="#overlay"
                  transform="rotate(333.7143, 220, 220)"
                ></use>
              </svg>
            </div>
          </div>
          <h1>
            {" "}
          </h1>
        </div>
        <h1 className="textInPie">Update your portfolio in seconds</h1>
        <p className="textInPie">by custom made Bubl's</p>

      </div>
    );
  }
}
