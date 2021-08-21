import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { List, ListItem, Typography } from '@material-ui/core';
import { useStyles } from './projectitem.style';

export interface IProject {
    image: string;
    name: string;
    description: string;
    githubLink: string;
}

type Props = {
    language: Language,
    style: Style,
    project: IProject,
}

export const ProjetItem = (props: Props) => {
    const language = props.language;
    const style = props.style;
    const project = props.project;
    const classes = useStyles({ style: style });

    return (<List className={classes.list}>
        <ListItem>
            <img src={project.image} className={classes.img}></img>
        </ListItem>
        <ListItem className={classes.listitem}>
            <Typography className={classes.typography}>{project.name}</Typography>
        </ListItem>
        <ListItem className={classes.listitem}>
            <Typography className={classes.typography}>{project.description}</Typography>
        </ListItem>
        <ListItem className={classes.listitem}>
            <a className={classes.typography} href={project.githubLink}>Hello</a>
        </ListItem>
    </List>
    );
}