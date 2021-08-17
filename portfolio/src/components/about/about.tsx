import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { Avatar, Box } from '@material-ui/core';
import {useStyles} from './about.style';

type Props = {
  language: Language,
  style: Style,
}

export const About = (props: Props) => {
  const language = props.language;
  const style = props.style;
  const classes = useStyles(style);

  return (
    <Box className={classes.box}>
      <Title title={getTranslation(language).about.title}
        subtitle={getTranslation(language).about.subtitle}
        style={style} />

      <Avatar src={getStyle(style).about.avatar} className={classes.avatar}/>
    </Box>
  );
}