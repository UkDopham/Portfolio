import React from 'react';
import { Title } from '../title/title';
import { Language } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { Avatar, Box } from '@material-ui/core';
import {useStyles} from './about.style';

type Props = {
  language: Language
}

export const About = (props: Props) => {
  const language = props.language;
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Title title={getTranslation(language).title}
        subtitle={getTranslation(language).subtitle} />

      <Avatar src={'hiking.jpg'} className={classes.avatar}/>
    </Box>
  );
}