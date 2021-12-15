import React from "react";
import Header from "./Header";
import MainComponent from "./MainContent";
import { ethers } from "ethers";
import Web3 from "web3";

import { ContractABI, ContractAddress, BUSDABI, BUSDaddress } from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      wallet_add: "",
      connect: false,
      from: "",
      to: 0,
      prefrom: 0,
      balance: 0,
      isAmmountHigh: false,
      approve: false,
      disable: true,
      contract: null,
      approvedHash: null,
      TransactionHash: null,
    };

    // this.Transfer = this.Transfer.bind(this);
    this.initialize = this.initialize.bind(this);
    this.ChangeForm = this.ChangeForm.bind(this);
    this.Approve = this.Approve.bind(this);
    this.BuyNow = this.BuyNow.bind(this);
    this.CheckApproved = this.CheckApproved.bind(this);
  }

  //CheckApproved Function
  CheckApproved(Fdata) {

    if(Fdata=="")
    {
      this.setState({from:""})
    }
    if (this.state.connect === true) {
      if (this.state.balance > Fdata && Fdata >= 0) {
        this.setState({ disable: false, isAmmountHigh: false });
      } else {
        this.setState({ disable: true, isAmmountHigh: true });
      }
    }
  }

  //Approve Function
  async Approve() {
    let ammount = this.state.from * 10 ** 18;
    let approve = await this.state.contract.methods.approve(
      ContractAddress,
      Web3.utils.toBN(ammount)
    );
    approve
      .send({ from: this.state.address })
      .then((d) => {
        this.setState({ disable: d.status, approve: d.status });
      })
      .catch((err) => {
        if (err.code === 4001) {
          alert("denied transaction");
        }
      });

    this.setState({ prefrom: this.state.from });
  }

  //Get From data
  ChangeForm(data) {
    this.CheckApproved(data);
    console.log(data* 10 ** 18);
    let TO;
    if (data !== "") {
      this.setState({ from: data });
      TO = (data * 1000) / 3;
    } else {
      TO = 0;
    }
    this.setState({
      to: TO,
    });
  }

  //BuyNow Function
  BuyNow() {
    this.setState({
      from: 0,
      to: 0,
      prefrom: 0,
      approve: false,
      disable: true,
    });
    this.ChangeForm(0);

    let str=this.state.from*10**18;
    console.log(str.toString());
    console.log(str[0])
    window.Contract.privateSell(this.state.address,  ethers.BigNumber.from(str.toString()))
      .then((d) => this.setState({ TransactionHash: d.hash }))
      .catch((error) => {
        if (error.code === -32603) {
          alert("User Already Exists");
        } else {
          console.log(error);
        }
      });
  }

  componentDidMount() {
    try {
      window.ethereum.on("accountsChanged", () => {
        this.setState({
          from: 0,
          to: 0,
          balance: 0,
          approve: false,
          disable: true,
          contract: null,
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
    this.setState({
      from: 0,
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      contract: null,
    });

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is  installed!");
      var web3 = new Web3(window.ethereum);
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      console.log(provider);

      const signer = await provider.getSigner();

      //Get Account details from metamask
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      this.setState({
        address: account[0],
        connect: true,
        disable: true,
      });

      //Account Balance Check
      const BSDContract = new web3.eth.Contract(BUSDABI, BUSDaddress);
      this.setState({
        contract: BSDContract,
        balance:
          (await BSDContract.methods.balanceOf(this.state.address).call()) /
          10 ** 18,
      });

      // Create the contract
      window.Contract = new ethers.Contract(
        ContractAddress,
        ContractABI,
        signer
      );
      console.log(window.Contract);
    } else {
      alert("MetaMask is not installed!");
    }
  }
  render() {
    return (
      <div className="App">
        <div style={{ width: "300px", alignSelf: "center" }}>
          <Header />
          <MainComponent
            fromData={this.state.from}
            ChangeForm={this.ChangeForm}
            BuyButton={this.BuyNow}
            toData={this.state.to}
            isApproved={this.state.approve}
          />
          {this.state.isAmmountHigh ? (
            <div
              style={{
                color: "red",
                textAlign: "center",
                fontwWeight: "600",
                margin: "1rem 0",
              }}
            >
              Insufficient funds
            </div>
          ) : null}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "purple",
                color: "#fff",
                width: "160px",
                marginTop: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/img/metamask.png"}
                width="44px"
                style={{
                  display: "inline",
                  alignSelf: "center",
                  width: "45px",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
              {!this.state.connect ? (
                <div onClick={this.initialize}>Connect</div>
              ) : (
                <div>Connected</div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: `${this.state.disable ? "gray" : "purple"}`,
                color: "rgb(255, 255, 255)",
                width: "120px",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={this.state.disable ? null : this.Approve}
            >
              <div>Approve</div>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
              backgroundColor: "purple",
              padding: "1.3rem 0",
              borderRadius: "15px",
            }}
          >
            <div>
              <strong>Address: </strong> 
            </div>
            <div>
              <strong>Balance: </strong>
              {this.state.balance}
            </div>

            {/* {this.state.TransactionHash === null ? null : (
              <div>
                <strong>Transcation: </strong>
               
              </div>
            )} */}
            {this.state.approvedHash === null ? null : (
              <div>
                <strong>Approved: </strong>
                {this.state.approvedHash}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
