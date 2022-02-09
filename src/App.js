import React from "react";
import {HomePage} from "./components/HomePage/HomePage";
import classes from './App.module.css'

export const App = () => {
  return (
      <div className={classes.App}>
          <HomePage />
      </div>
  )
}