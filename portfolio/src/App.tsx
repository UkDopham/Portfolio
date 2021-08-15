import React from "react";
import { Options } from "./components/options/options";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Project } from "./components/project/project";
import { WrapperStyled } from "./App.styles";

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

  return (
    <div>
      <Options />

      <div style={{
        height:'90vh',
        overflow: 'scroll'}}>
        <WrapperStyled>
          <About language={language}/>
        </WrapperStyled>

        <WrapperStyled>
          <Contact />
        </WrapperStyled>

        <WrapperStyled>
          <Project />
        </WrapperStyled>

      </div>
    </div>
  );
}