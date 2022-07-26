import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Calendar.css";
export default function Calendar(){
//QuerySelector in React:
   const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    //ref= value you want to set
    const el2 = ref.current;
    console.log(el2);
    //je pense qui existe setREF() que tu peut te faire un prop

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const el = document.querySelector('#ul');
    console.log(el);
  }, []);
  return (
    <div className="Calendar">
      <h1><a href="https://www.cegepsherbrooke.qc.ca/" target="_blank" rel="noreferrer">Cégep de Sherbrooke</a> <small><a href="https://www.cegepsherbrooke.qc.ca/fr/formation-continue/formation-pour-adultes/aec-temps-plein/programmation-d-applications" target="_blank" rel="noreferrer">Programmation d'applications</a></small></h1>
      <div className="calendar">
      <div className="row">
        <h4>Session 1:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PA1-SH</li>
          <li className="course-title">Création de pages Web</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PA2-SH</li>
          <li className="course-title">Introduction à la programmation</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PA3-SH</li>
          <li className="course-title">Exploitation d'une base de données</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PA4-SH</li>
          <li className="course-title">Mathématiques appliquées à la programmation</li>
        </ul>
      </div>
      <div className="row">
        <h4>Session 2:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PB1-SH</li>
          <li className="course-title">Programmation d'applications</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PB2-SH</li>
          <li className="course-title">Programmation Orienté Objet (POO)</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PB3-SH</li>
          <li className="course-title">Développement de sites Web</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PB4-SH</li>
          <li className="course-title">Documentation technique</li>
        </ul>
      </div>
      <div className="row">
        <h4>Session 3:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PC1-SH</li>
          <li className="course-title">Conbtrôle de la qualité</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PC2-SH</li>
          <li className="course-title">Développement d'applications</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PC3-SH</li>
          <li className="course-title">Conception d'applications</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PC4-SH</li>
          <li className="course-title">Développement d'applications</li>
        </ul>
      </div>
      <div className="row">
        <h4>Session 4:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PD1-SH</li>
          <li className="course-title">Projet intégrateur</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PD2-SH</li>
          <li className="course-title">Modification d'un système</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PD3-SH</li>
          <li className="course-title">Nouvelles technologies</li>
        </ul>
      </div>
      <div className="row">
        <h4>Session 5:</h4>
        <ul className="cellule col-9">
          <li className="course-code">420-PES-SH</li>
          <li className="course-title">Stage en entreprise</li>
        </ul>
      </div>
      </div>
    </div>
  )
}
