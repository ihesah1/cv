
import React from 'react'

import "./style.css";

export default function Cont1() {
  return (
    <>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/92258765?v=4"}
          alt="Avatar"
          className="img1"
        />

        <h2> Hesah Alharbi </h2>
        <h3> Developer & programmer </h3>
        <hr />
        <p>
          {" "}
          <img
           // eslint-disable-next-line
            src={
              "https://icons-for-free.com/iconfiles/png/512/location+arrow-1325051860067127618.png"
            }
            className="img2"
          />{" "}
          Alqassim, Saudi Arabia{" "}
        </p>
        <a href={"mailto:ihesah.a1@gmail.com"}>
          <img
            src={
              "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/message-icon-design-template-ff734aad72da096f0e49f3d693042135_screen.jpg?ts=1581057128"
            }
            className="img2"
          />{" "}
          ihesah.a1@gmail.com
        </a>
        

        <a href="https://github.com/ihesah1">
            
          
        </a>
        <hr />
        <p>
        A developer and programmer
         at Tuwaiq camp, I built my first project here using web application programming languages.{" "}
        </p>
      </div>
    </>
  );
}
