import React from "react";

const Progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: "15px",
    width: "90%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    background: "linear-gradient(120deg, #cb01ff 0%, #00ff57 100%)",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    color: "black",
    alignSelf: "center",
    fontWeight: 100,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default Progress_bar;
