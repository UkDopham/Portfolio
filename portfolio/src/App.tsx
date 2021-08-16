import React from "react";
import { Options } from "./components/options/options";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Project } from "./components/project/project";
import { useStyles } from "./App.styles";

export enum Style {
  normal,
  pixel,
}
export enum Language {
  french,
  english,
}

export const App = () => {
  const [styles, setStyles] = React.useState<Style>(Style.normal);
  const [language, setLanguage] = React.useState<Language>(Language.french);
  const classes = useStyles();

  const onClickLanguage = (language:Language) => {
    setLanguage(language);
  }

  return (
    <div>
      <Options onClickLanguage={onClickLanguage}/>

      <div style={{
        height:'70vh',
        overflow: 'scroll'}}>
          <About language={language}/>
          <Contact />
          <Project />
      </div>
    </div>
  );
}