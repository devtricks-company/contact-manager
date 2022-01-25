import React from "react";
import Contacts from "./components/Contacts";
import Header from './components/Header';
//jsx has 4 diff compare to html
//1- className insted of class
//2 - label has for att in html but has htmlFor in jsx
//3- ending selfclosing tags ==> <img > **** <img />
//4- component shoud return one elem as output
function App() {
  return (
    <>
      <Header title="Contact Manager" color="danger" />
      <Contacts />
      
    </>
  );
}

export default App;
