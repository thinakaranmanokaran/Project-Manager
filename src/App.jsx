import React from 'react'
import PublicLayout from './layouts/public/PublicLayout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routers from "./Router";

const App = () => {
  return (
    <Router>
      <Routers  />
    </Router>
  )
}

export default App