// import "./App.css";
import React from "react";
import { ContactAddress, ABI } from "./config";
import { ethers } from "ethers";
import FirstSection from "../FirstSection";
import FinalSection from "../FinalSection";
import ThirdSection from "../ThirdSection";
import SecondSection from "../SecondSection";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tFollow: false,
      tTweet: false,
      telegram: false,
      fShare: false,
      fLike: false,
      address: "",
      contract: null,
      isReward: false,
    };
    this.ClaimReward = this.ClaimReward.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  ClaimReward() {
    if (
      this.state.tFollow &&
      this.state.tTweet &&
      this.state.telegram &&
      this.state.fShare &&
      this.state.fLike
    ) {
      this.state.contract
        .buyToken()
        .then((data) => alert(`This is the Transaction Hash: ${data.hash}`))
        .catch((err) => {
          if (err.code == 4001) {
            alert("You Denied this Transaction");
          } else if (err.code === -32603) {
            alert("You have already claimed");
            this.setState({
              tFollow: false,
              tTweet: false,
              telegram: false,
              fShare: false,
              fLike: false,
              isReward: false,
            });
          }
        });
    } else {
      alert("Please complete all below mentioned tasks");
    }
  }

  componentDidMount() {
    try {
      window.ethereum.on("accountsChanged", () => {
        this.setState({
          tFollow: false,
          tTweet: false,
          telegram: false,
          fShare: false,
          fLike: false,
          address: "",
          contract: null,
          isReward: false,
        });
        this.initialize();
      });
    } catch (e) {
      alert("Please Install metamask app");
    }
  }

  //initialize function for
  async initialize() {
    //When metamask is Installed
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is  installed!");

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      const signer = await provider.getSigner();

      //Get Account details from metamask
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(new ethers.Contract(ContactAddress, ABI, signer));
      //Create the contract
      this.setState({
        address: account[0],
        contract: new ethers.Contract(ContactAddress, ABI, signer),
        isReward: true,
      });

      // this.setState({
      //   address: account[0],
      // });
    } else {
      alert("MetaMask is not  installed!");
    }
  }

  render() {
    return (
      // <div className="App">
      //   <div style={{ width: "800px", margin: "0 auto" }}>
      //     {/* Twitter Follow  */}
      //     <div className="social-wrapper">
      //       <div className="dflex-1">
      //         <img src="./img/Twitter.png" width="48px" />
      //       </div>
      //       <div className="button-container dflex-1">
      //         <a
      //           class="twitter-follow-button"
      //           href="https://twitter.com/TwitterDev"
      //           data-size="large"
      //           data-show-count="false"
      //         >
      //           Follow @TwitterDev
      //         </a>
      //         <div
      //           className="button"
      //           style={{
      //             color: "#000",
      //             backgroundColor: "#fff",
      //             border: "1px solid #000",
      //           }}
      //           onClick={() => this.setState({ tFollow: !this.state.tFollow })}
      //         >
      //           {this.state.tFollow ? (
      //             <div>
      //               <svg
      //                 xmlns="http://www.w3.org/2000/svg"
      //                 width="16"
      //                 height="16"
      //                 viewBox="0 0 16 16"
      //                 fill="none"
      //               >
      //                 <path
      //                   d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
      //                   fill="black"
      //                 ></path>
      //               </svg>
      //             </div>
      //           ) : (
      //             "I did this"
      //           )}
      //         </div>
      //       </div>
      //     </div>
      //     {/* Twitter Tweet*/}
      //     <div className="social-wrapper">
      //       <div className="dflex-1">
      //         <img src="./img/Twitter.png" width="48px" />
      //       </div>
      //       <div className="button-container dflex-1">
      //         <a
      //           class="twitter-share-button"
      //           href="https://twitter.com/intent/tweet?text=Hello%20world"
      //           data-size="large"
      //         >
      //           Tweet
      //         </a>
      //         <div
      //           className="button"
      //           style={{
      //             color: "#000",
      //             backgroundColor: "#fff",
      //             border: "1px solid #000",
      //           }}
      //           onClick={() => this.setState({ tTweet: !this.state.tTweet })}
      //         >
      //           {this.state.tTweet ? (
      //             <div>
      //               <svg
      //                 xmlns="http://www.w3.org/2000/svg"
      //                 width="16"
      //                 height="16"
      //                 viewBox="0 0 16 16"
      //                 fill="none"
      //               >
      //                 <path
      //                   d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
      //                   fill="black"
      //                 ></path>
      //               </svg>
      //             </div>
      //           ) : (
      //             "I did this"
      //           )}
      //         </div>
      //       </div>
      //     </div>

      //     {/* Facebook Like  */}
      //     <div className="social-wrapper">
      //       <div className="dflex-1">
      //         <img src="./img/facebook.png" width="48px" />
      //       </div>
      //       <div className="button-container dflex-1">
      //         <div
      //           class="fb-like"
      //           data-href="https://developers.facebook.com/docs/plugins/"
      //           data-width=""
      //           data-layout="button"
      //           data-action="like"
      //           data-size="large"
      //           data-share="false"
      //         ></div>
      //         <div
      //           className="button"
      //           style={{
      //             color: "#000",
      //             backgroundColor: "#fff",
      //             border: "1px solid #000",
      //           }}
      //           onClick={() => this.setState({ fLike: !this.state.fLike })}
      //         >
      //           {this.state.fLike ? (
      //             <div>
      //               <svg
      //                 xmlns="http://www.w3.org/2000/svg"
      //                 width="16"
      //                 height="16"
      //                 viewBox="0 0 16 16"
      //                 fill="none"
      //               >
      //                 <path
      //                   d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
      //                   fill="black"
      //                 ></path>
      //               </svg>
      //             </div>
      //           ) : (
      //             "I did this"
      //           )}
      //         </div>
      //       </div>
      //     </div>

      //     {/* Facebook Like  */}
      //     <div className="social-wrapper">
      //       <div className="dflex-1">
      //         <img src="./img/facebook.png" width="48px" />
      //       </div>
      //       <div className="button-container dflex-1">
      //         <div
      //           class="fb-share-button"
      //           data-href="https://developers.facebook.com/docs/plugins/"
      //           data-layout="button"
      //           data-size="large"
      //         >
      //           <a
      //             target="_blank"
      //             href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
      //             class="fb-xfbml-parse-ignore"
      //           >
      //             Share
      //           </a>
      //         </div>
      //         <div
      //           className="button"
      //           style={{
      //             color: "#000",
      //             backgroundColor: "#fff",
      //             border: "1px solid #000",
      //           }}
      //           onClick={() => this.setState({ fShare: !this.state.fShare })}
      //         >
      //           {this.state.fShare ? (
      //             <div>
      //               <svg
      //                 xmlns="http://www.w3.org/2000/svg"
      //                 width="16"
      //                 height="16"
      //                 viewBox="0 0 16 16"
      //                 fill="none"
      //               >
      //                 <path
      //                   d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
      //                   fill="black"
      //                 ></path>
      //               </svg>
      //             </div>
      //           ) : (
      //             "I did this"
      //           )}
      //         </div>
      //       </div>
      //     </div>

      //     {/* Telegram  */}
      //     <div className="social-wrapper">
      //       <div className="dflex-1">
      //         <img src="./img/telegram.png" width="48px" />
      //       </div>
      //       <div className="button-container dflex-1">
      //         <a className="button" style={{ textDecoration: "none" }}>
      //           Join Channel
      //         </a>
      //         <div
      //           className="button"
      //           style={{
      //             color: "#000",
      //             backgroundColor: "#fff",
      //             border: "1px solid #000",
      //           }}
      //           onClick={() =>
      //             this.setState({ telegram: !this.state.telegram })
      //           }
      //         >
      //           {this.state.telegram ? (
      //             <div>
      //               <svg
      //                 xmlns="http://www.w3.org/2000/svg"
      //                 width="16"
      //                 height="16"
      //                 viewBox="0 0 16 16"
      //                 fill="none"
      //               >
      //                 <path
      //                   d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
      //                   fill="black"
      //                 ></path>
      //               </svg>
      //             </div>
      //           ) : (
      //             "I did this"
      //           )}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div
      //     style={{
      //       padding: "20px 30px",
      //       backgroundColor: `${!this.state.isReward ? "grey" : "black"}`,
      //       color: "white",
      //       width: "200px",
      //       display: "flex",
      //       justifyContent: "center",
      //       margin: "0 auto",
      //       borderRadius: "5px",
      //       marginTop: "20px",
      //     }}
      //     onClick={this.state.isReward ? this.ClaimReward : null}
      //   >
      //     ClaimReward
      //   </div>
      //   <div
      //     style={{
      //       padding: "20px 30px",
      //       backgroundColor: "black",
      //       color: "white",
      //       width: "200px",
      //       display: "flex",
      //       justifyContent: "center",
      //       margin: "0 auto",
      //       borderRadius: "5px",
      //       marginTop: "20px",
      //     }}
      //     onClick={this.state.isReward ? null : this.initialize}
      //   >
      //     {this.state.isReward ? "Connected" : "Connect"}
      // </div>
      <>
        <FirstSection
          first={this.state.fLike}
          onClickForFirst={() => this.setState({ fLike: !this.state.fLike })}
        />
        <SecondSection
          firstfb={this.state.fShare}
          firstTweet={this.state.tTweet}
          onClickForSecond={() => this.setState({ fShare: !this.state.fShare })}
          onClickForFollow={() =>
            this.setState({ tFollow: !this.state.tFollow })
          }
        />
        <ThirdSection
          firstTwitter={this.state.fTweet}
          onClickForThird={() => this.setState({ fLike: !this.state.fTweet })}
        />
        <FinalSection
          first={this.state.fLike}
          onClickForFirst={() => this.setState({ fLike: !this.state.fLike })}
        />
      </>
    );
  }
}

export default App;
