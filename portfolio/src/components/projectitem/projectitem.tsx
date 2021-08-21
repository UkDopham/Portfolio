import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { List, ListItem, Typography, Box, Divider } from '@material-ui/core';
import { useStyles } from './projectitem.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
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
            <Typography className={classes.title}>{project.name}</Typography>
        </ListItem>
        <ListItem className={classes.listitem}>
            <Typography className={classes.subtitle}>{project.description}</Typography>
        </ListItem>
        <ListItem className={classes.listitem}>
            <Box className={classes.button} p={1}>
                <a className={classes.a} href={project.githubLink}><FontAwesomeIcon className={classes.icon} icon={faCodeBranch}/>{getTranslation(language).projet.projectlist.projectitem.github}</a>
            </Box>
        </ListItem>
        <Divider className={classes.divider} variant={getStyle(style).project.projectlist.griditem.divider.variant} />
        <ListItem className={classes.listitem}>
            <Typography className={classes.subtitle}>{project.description}</Typography>
        </ListItem>
    </List>
    );
}