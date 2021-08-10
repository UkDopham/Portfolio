import React from "react";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Project } from "./components/project/project";

export const App = () => {

  return (
    <main>
      <About/>
      <Contact/>
      <Project/>
    </main>
  );
}