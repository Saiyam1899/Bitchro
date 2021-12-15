import React, { useState } from "react";
import styled from "styled-components";
// import { IconContext } from "react-icons";
// import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
    <AccordionWrapper id="FAQ">
      <AccordionContainer style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/pbg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0"}}>
        <Logo
          width="100%"
          style={{ zIndex: "100", opacity: "1" }}
          src={process.env.PUBLIC_URL + "assets/img/FAQ.svg"}
        />
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <AccordianItem>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <div>{item.question}</div>
                    <span>{clicked === index ? "-" : "+"}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </AccordianItem>
              );
            })}
          </Container>
   
   

        </AccordionSection>
  
      </AccordionContainer>
    
          <BackToTop src={process.env.PUBLIC_URL+"assets/images/graypath.png"} width="50" style={{float:"none"}} onClick={()=>{
            window.scrollTo(0,0)
          }}/>
          
     
      
    </AccordionWrapper>

</>
  );
};

export const Data = [
  {
    question: "What is an NFT?",
    answer:
      "A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. NFTs can be used to represent items such as photos, videos, audio, and other types of digital files.",
  },
  {
    question: "Can I gift or send a collectible to someone?",
    answer:
      "Yes, you can and its up to you if you decide to sell it later or not. You can also send multiple NFTs or a series of NFTs using the campaign launcher as part of a unique subscription service we offer. You can send an NFT to as many people as you wish on Ethereum or Binance Smart Chain, just choose the subscription service that suits you and begin your amazing journey with using BIT Chro NFT Portal.",
  },
  {
    question: "Can I choose how I store my NFT content files and metadata?",
    answer:
      "Yes, you can choose either to store your data on IPFS distributed storage, which is always free, or to create storage of your NFT content and metadata on the blockchain. This ensures your content and data are immutable. Please refer to the rate sheet for charges associated with storage on the blockchain. These options are available to choose from in your user account.",
  },
  {
    question:
      "Can I sign up with Google or Facebook, and do I need to have a DeFi wallet to do it?",
    answer:
      "Yes, you can easily sign up and create your account using Google or Facebook, when the account is created it will come with your unique wallet address and keys. You can also sign up using a DeFi wallet, which would then be registered as your unique address on the BIT Chro NFT Portal as part of your user account on the platform.",
  },
  {
    question:
      "Can I buy, sell and launch NFTs that were not created on the BIT Chro  NFT Portal?",
    answer:
      "Yes, you can perform the same tasks and activities with NFTs created on other platforms, just choose the subscription service you prefer to truly unlock the potential of BIT Chro  NFT Portal for your personal or business needs.",
  },
  {
    question: "What is Moderation of Content?",
    answer:
      "To keep our platform safe, friendly and protect users, we moderate all content that is uploaded to the BIT Chro Platform. We ensure a great experience for all our users, while providing a safe environment to create, promote, collect, buy, sell, gift, entertain and earn.",
  },
  {
    question: "How to participate in BIT Chro ICO ?",
    answer:
      "You can be a proud BIT Chro token holder by participating in our Private sale , and public sale. Note, token sold in Private sale is  much cheaper than public sale.",
  },
  {
    question: "I need more info about BIT Chro. What should I do ?",
    answer: "Connnect with us by mail, social media platforms and telegram.",
  },
];

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  background-image: url("https://www.trexsolutionsllc.com/wp-content/uploads/2019/01/WhatWeAreUpTo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
`;
const AccordionContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: black;
  padding: 72px 0;
  opacity: 0.9;
`;
const BackToTop = styled.img`
  
margin:0 1600px;

  padding: 72px 0;
  opacity: 1;
  @media (max-width: 1235px) {
    padding: 30px 0;
    margin: 0 1090px
  }
  @media (max-width: 1500px) {
    align-items: center;
   margin: 0 1190px
  }
  @media (max-width: 920px) {
    align-items: center;
   margin: 0 910px
  }
  @media (max-width: 768px) {

    margin: 0 250px
  }
  @media (max-width: 508px) {
    padding: 30px 0;
    margin: 0 170px
  }
`;

const Logo = styled.img`
  max-width: 200px;
  width: 100%;
`;

const AccordionSection = styled.div`
  color: #fff;
`;

const Container = styled.div`
  padding: 0 30px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between
`;
const AccordianItem = styled.div`
  border-bottom: 1px solid #fff;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const Dropdown = styled.div`
  background: black;
  color: white;
  text-align: left;
  p {
    margin: 0;
    margin-top: 20px;
  }
`;

export default FAQ;
