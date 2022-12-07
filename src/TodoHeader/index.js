import React from "react";
import logo from "..//img/logo.png";
import profile from "..//img/profile.png";

import "./TodoHeader.css";

/*const fecha = new Date();
const hoy = fecha.getDate();
const mesActual = fecha.getMonth() + 1; 
const añoActual = fecha.getFullYear();*/

function getCurrentDate() {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const date = new Date();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

const TodoHeader = () => {
  return (
    <>
    <div className="todoHeader">
      <img src={logo} alt="Logo" className="logo"/>
      <div className="right">
      <h1>{getCurrentDate()}.</h1>
      <img src={profile} alt="Profile" className="profile"/>
      </div>
    </div>
    </>
  );
};

export { TodoHeader };
