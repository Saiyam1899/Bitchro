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
    <AccordionWrapper 
    style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/pbg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0"}}
    >
      <AccordionContainer
             data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
      >
        <Logo
          width="100%"
          src={process.env.PUBLIC_URL + "assets/images/advantages.svg"}
        />
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <AccordianItem>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <div className="animate-charcter">{item.question}</div>
                 </Wrap>
                 <p style={{textAlign:"left"}}>{item.answer}</p>
                </AccordianItem>
              );
            })}
          </Container>
        </AccordionSection>
      </AccordionContainer>
    </AccordionWrapper>
  );
};

export const Data = [
  {
    question: "ETHICS",
    answer:
      "BITChro has always been straightforward and upfront,and this is ingrained in our nature and who we are.",
  },
  {
    question: "CULPABILITY",
    answer:
      "In BITChro,we treat our organization very carefully.we take complete responsibility and accountability in front of our shareholders,staff,users and followers. ",
  },
  {
    question: "VERSATILITY",
    answer:
      "BITChro belives in progress,but we also believe in being able to adapt to that development.We understand there will be no growth unless we are adaptive and nimble.",
  },
];

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
`;
const AccordionContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: black;
  padding: 72px 0;
  opacity: 0.9;
`;

const Logo = styled.img`
  max-width: 600px;
  width: 100%;
`;

const AccordionSection = styled.div`
  color: #fff;
  font-size:30px
`;

const Container = styled.div`
  padding: 0 30px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
`;
const AccordianItem = styled.div`
  border-bottom: 1px solid purple;
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
