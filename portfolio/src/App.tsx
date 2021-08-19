import React from "react";
import { Options } from "./components/options/options";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Project } from "./components/project/project";
import { useStyles } from "./App.styles";
import { Box } from "@material-ui/core";
import { Suboptions } from "./components/suboptions/suboptions";

export enum Style {
  apple,
  netflix,
}
export enum Language {
  french,
  english,
}

export const App = () => {
  const [styles, setStyles] = React.useState<Style>(Style.apple);
  const [language, setLanguage] = React.useState<Language>(Language.french);
  const classes = useStyles(styles);

  const onClickLanguage = (language:Language) => {
    setLanguage(language);
  }
  const onClickStyle = (style:Style) => {
    setStyles(style);
  }

  return (
    <Box>
      <Options onClickLanguage={onClickLanguage}
      onClickStyle={onClickStyle}
      language={language}
      style={styles}/>

      <Suboptions 
      language={language}
      style={styles}/>

      <Box style={{
        height:'90vh',
        overflow: 'scroll'}}>
          <About language={language} style={styles}/>
          <Project language={language} style={styles}/>
          <Contact language={language} style={styles}/>
      </Box>
    </Box>
  );
}