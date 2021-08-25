import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { List, ListItem, Box, Typography } from '@material-ui/core';
import {useStyles} from './projecthead.style';
import {IProject} from '../projectitem/projectitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  language: Language,
  style: Style,
  project: IProject,
}

export const ProjectHead = (props: Props) => {
  const language = props.language;
  const style = props.style;
  const project = props.project;
  const classes = useStyles({style: style});

  return (
    <Box className={classes.box}>
        <List className={classes.list}>
                <ListItem className={classes.listitem}>
                    <img src={project.image} className={classes.img}></img>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <Typography className={classes.title}>{project.name}</Typography>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <Typography className={classes.subtitle}>{project.description}</Typography>
                </ListItem>
            </List>
    </Box>
  );
}