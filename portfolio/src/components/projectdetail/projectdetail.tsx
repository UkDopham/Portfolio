import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { Avatar, Box, Typography, List, ListItem } from '@material-ui/core';
import {useStyles} from './projectdetail.style';

export interface IProjectDetail {
  image: string;
  text:string;
}


type Props = {
  style: Style,
  projectDetail: IProjectDetail;
}

export const ProjectDetail = (props: Props) => {
  const style = props.style;
  const projectDetail = props.projectDetail;
  const classes = useStyles({style: style});

  return (
    <List className={classes.list}>
      <ListItem className={classes.listitem}>
        <img className={classes.image} src={projectDetail.image}/>
      </ListItem>
      <ListItem>
        <Typography className={classes.typography}>{projectDetail.text}</Typography>
      </ListItem>
    </List>
  );
}