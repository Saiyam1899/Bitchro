import React from "react";
import "./team.css";
import { FaLinkedin } from "react-icons/fa";
export default function TeamCompo(props) {
  return (
    <>
      <div className="profile-card">
        <div className="img">
          <img src={props.img} />
        </div>
        <div className="caption">
          <h3> {props.name}</h3>

          <p>
          {props.linked?<>
            <a className="social-links" href={props.linked} target="_blank" >
              <FaLinkedin color="blue" size={20} />
            </a>
            <br />
          </>:null}
           
           
            {props.designation}
          </p>
        </div>
      </div>
    </>
  );
}
