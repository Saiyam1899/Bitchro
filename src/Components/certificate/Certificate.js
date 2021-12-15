import React from "react";
import "./certificate.css";
export default function Certificate() {
  return (
    <a
      href="https://drive.google.com/file/d/1mTUVzX3H9lQJIvoptJ-oNLiJxsLp-d2q/view?usp=sharing"
      target="_blank"
      style={{textDecoration:"none",fontSize:"30px",color:"white"}}
    >
      <div
        className="certificate"
        style={{
          width: "100%",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "assets/images/pbg.png"
          })`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundColor: "#000",
          padding: "72px 0",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "assets/img/textcertificate.svg"}
          className="imageOne"


        />
          <p style={{marginTop:"30px"}}>
          The Registrar of Companies for England and Wales, hereby certifies
          that
          <br/> 
          BITCHRO METAVERSE LIMITED
        </p>
        <div className="container">
        <img
          src={process.env.PUBLIC_URL + "assets/images/certificateframefinal.jpg"}
          className="imageOne"

        />
      
        <img
          src={process.env.PUBLIC_URL + "assets/images/logocertificate.png"}
          className="imageTwo"
        />
        </div>
        
      </div>
    </a>
  );
}
