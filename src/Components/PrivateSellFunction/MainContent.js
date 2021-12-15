import React, { Component } from "react";
import "./sell.css";
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          style={{
            border: "2px solid purple",
            backdropFilter: "saturate(180%) blur(10px)",
            padding: "1.5rem",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div style={{ textAlign: "left", paddingBottom: "20px" }}>
            <span>1 BTCH = 0.003 BUSD</span>
          </div>
          <div>
            <div>
              <h4>From</h4>
              <div
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  padding: "1rem 0.6rem",
                  textTransform: "uppercase",
                  width: "100%",
                  margin: "0 auto",
                  borderRadius: "999px",
                  justifyContent: "space-around",
                }}
              >
                <input
                  placeholder="0"
                  type="number"
                  onChange={(e) => this.props.ChangeForm(e.target.value)}
                  style={{ outline: "none", border: "none" }}
                  value={this.props.fromData}
                ></input>
                <div
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  BUSD
                </div>
              </div>
            </div>
            <div>
              <h4>To</h4>
              <div
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  padding: "1rem 1rem",
                  width: "100%",
                  margin: "0 auto",
                  borderRadius: "999px",
                  justifyContent: "space-around",
                }}
              >
                <input
                  placeholder="0.0"
                  type="number"
                  disabled
                  style={{ outline: "none", border: "purple" }}
                  value={this.props.toData}
                ></input>
                <div
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  BTCH
                </div>
              </div>
            </div>
          </div>{" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: `${this.props.isApproved ? "purple" : "gray"}`,
                borderRadius: "999px",
                width: "40%",
                padding: "0.8rem",
                color: "#fff",
                marginTop: "40px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={this.props.isApproved ? this.props.BuyButton : null}
            >
              Buy Now
            </div>
          </div>
        </div>
      </>
    );
  }
}
