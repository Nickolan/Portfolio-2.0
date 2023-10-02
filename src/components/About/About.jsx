import React, { useState, useContext } from "react";
import { LeneguageContext } from "../LenguageContext";
import profileImage from "../../../public/images/4.png";
import "./About.css";

const About = () => {
  const [cvReveal, setCV] = useState(false);
  const { isEnglish } = useContext(LeneguageContext);
  const pdfUrlEnglish = "../../../public/images/CvEnglish.pdf";
  let pdfUrlSpanish = "../../../public/images/CvSpanish.pdf";
  const [infoType, setInfoType] = useState(true);

  const year = new Date().getFullYear();
  const age = year - 2003;

  return (
    <div id="About" className="AboutContent">
      <div className="AboutTitle">
        <h1>{isEnglish ? "About Me" : "Sobre Mi"}</h1>
      </div>
      <div className="AboutImage">
        <div id="N1">
          <div id="N2">
            <div id="N3">
              <button onClick={() => setCV(!cvReveal)}>
                {!cvReveal ? (
                  <img className="rounded-full" src={profileImage} alt="" />
                ) : (
                  <div className="CvButton">
                    <a
                      target="_blank"
                      href={isEnglish ? 'https://drive.google.com/file/d/1KmN2qRDyib-iKDx60P-5uOyWwZteHk-6/view?usp=sharing' : 'https://drive.google.com/file/d/1S6Isv-G7N45eHgzdlDdFCiOwwT9iJfgV/view?usp=sharing'}
                    >
                      CV
                    </a>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutText">
        <button onClick={() => setInfoType(!infoType)} className="AboutChanger">
          change
        </button>
        {infoType ? (
          <div id="InfoCode">
            <div className="flex flex-row">
              <span id="keywords">const</span>
              <span id="text1">
                {isEnglish ? "Welcome" : "Bienvenido"}
              </span>{" "}
              <span id="keywords">=</span> <span id="simbols">( )</span>{" "}
              <span id="keywords">{"=>"}</span> <span id="simbols">{"{"}</span>
            </div>
            <div className="ml-5">
              {" "}
              <span id="keywords">const</span>
              <span id="text1">{isEnglish ? "Me" : "Yo"}</span>{" "}
              <span id="keywords">=</span> <span id="simbols">{"{"}</span>
            </div>
            <div id="AboutObject" className="ml-10">
              <div>
                <span id="text1">{isEnglish ? "firstName" : "nombre"}</span>{" "}
                <span id="keywords">:</span>{" "}
                <span id="strings">{"'Nicolas'"},</span>
              </div>
              <div>
                <span id="text1">{isEnglish ? "lastName" : "apellido"}</span>{" "}
                <span id="keywords">:</span>{" "}
                <span id="strings">{"'Navarrete'"},</span>
              </div>
              <div>
                <span id="text1">{isEnglish ? "age" : "edad"}</span>{" "}
                <span id="keywords">:</span>{" "}
                <span id="int">{`${age}`},</span>
              </div>
              <div>
                <span id="text1">{isEnglish ? "country" : "pais"}</span>{" "}
                <span id="keywords">:</span>{" "}
                <span id="strings">{"'Argentina'"},</span>
              </div>
              <div>
                <span id="text1">{isEnglish ? "lenguage" : "idiomas"}</span>{" "}
                <span id="keywords">:</span>{" "}
                <span id="simbols">{'['}</span>
              </div>
              {
                isEnglish ?
                <div className="flex flex-row">
                  <span className="ml-18" id="simbols">{'{'}</span>
                  <span>Leng:</span><span id="strings">Spanish,</span><span>Lvl:</span><span id="strings">Native</span>
                  <span className="ml-18" id="simbols">{'},'}</span>
                </div> :
                <div className="flex flex-row">
                  <span className="ml-18" id="simbols">{'{'}</span>
                  <span>Leng:</span><span id="strings">Español,</span><span>Lvl:</span><span id="strings">Nativo</span>
                  <span className="ml-18" id="simbols">{'},'}</span>
                </div>
              }
              {
                isEnglish ?
                <div className="flex flex-row">
                  <span className="ml-18" id="simbols">{'{'}</span>
                  <span>Leng:</span><span id="strings">English,</span><span>Lvl:</span><span id="strings">Advanced (C1)</span>
                  <span className="ml-18" id="simbols">{'},'}</span>
                </div> :
                <div className="flex flex-row">
                  <span className="ml-18" id="simbols">{'{'}</span>
                  <span>Leng:</span><span id="strings">Ingles,</span><span>Lvl:</span><span id="strings">Avanzado (C1)</span>
                  <span className="ml-18" id="simbols">{'},'}</span>
                </div>
              }
              {
                isEnglish ?
                <div className="flex flex-row">
                  <span className="ml-18" id="simbols">{'{'}</span>
                  <span>Leng:</span><span id="strings">French</span><span>Lvl:</span><span id="strings">Basic (A2)</span>
                  <span className="ml-18" id="simbols">{'}'}</span>
                </div> :
                <div className="flex flex-row">
                  <span className="ml-18" id="simbols">{'{'}</span>
                  <span>Leng:</span><span id="strings">Frances</span><span>Lvl:</span><span id="strings">Basico (A2)</span>
                  <span className="ml-18" id="simbols">{'}'}</span>
                </div>
              }
                <span id="simbols">{']'}</span>
            </div>
            <div className="ml-5">
              <span id="simbols">{"}"}</span>
            </div>
            <div className="ml-5">
              <span id="keywords">return</span>{" "}
              <span>{isEnglish ? "Welcome" : "Bienvenido"}</span>
            </div>
            <div>
              <span id="simbols">{"}"}</span>
            </div>
            <div>
              <span>{isEnglish ? "Welcome" : "Bienvenido"}</span>{" "}
              <span id="simbols">( )</span>
            </div>
          </div>
        ) : (
          <div id="InfoText">
            <div id="WhoAmI">
              <h1>{isEnglish ? "Who am I?" : "Quien soy?"}</h1>
              <div>
                {isEnglish ? (
                  <h2>
                    I am {age} years old man living in Mendoza, Argentina and I
                    am 👩🏻‍💻developer with ability to create and optimize user and
                    server-oriented applications and websites, I started my
                    career in early 2023 by studying at SoyHenry bootcamp which
                    allowed me to deepen my web development using technologies
                    such as React, Node, PostgreSQL and Express
                  </h2>
                ) : (
                  <h2>
                    Soy chico de {age} años que vive en Mendoza, Argentina y soy
                    👩🏻‍💻desarrollador con capacidad de crear y optimizar
                    aplicaciones y sitios web orientadas al usuario y el
                    servidor, inicie mi carrera a principios del 2023 mediante
                    la cursada en el bootcamp de SoyHenry la cual me perimitio
                    profundizar en el desarrollo web usando tecnologias como
                    React, Node, PostgreSQL y Express
                  </h2>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
