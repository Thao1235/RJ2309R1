import React, { useContext } from "react";
import LoginForm from './LoginForm';
import { ThemeContext } from "../Context/ThemeContext";

function Panel(){
    const {theme} = useContext(ThemeContext)
    console.log(theme);
    return(
      <div className={`border p-3 ${theme}`}>
        <LoginForm />
      </div>
    )
  }

  export default Panel;