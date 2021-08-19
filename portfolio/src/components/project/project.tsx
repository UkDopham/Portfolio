import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { Avatar, Box, Typography } from '@material-ui/core';
import {useStyles} from './project.styles';
import {ProjectList} from '../projectlist/projectlist';

type Props = {
  language: Language,
  style: Style,
}

export const Project = (props: Props) => {
  const language = props.language;
  const style = props.style;
  const classes = useStyles({style: style});

  return (
    <Box className={classes.box}>
      <Typography className={classes.title}>{getTranslation(language).projet.title}</Typography>
      <Typography className={classes.subtitle}>{getTranslation(language).projet.subtitle}</Typography>
      <ProjectList style={style}
      language={language}/>
    </Box>
  );
}