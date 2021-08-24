import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { List, ListItem, Typography, Box, Divider } from '@material-ui/core';
import { useStyles } from './projectitem.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ProjectHead } from '../projecthead/projecthead';
import { ProjectDetail } from '../projectdetail/projectdetail';
import { IProjectDetail } from '../projectdetail/projectdetail';

export interface IProject {
    image: string;
    name: string;
    description: string;
    link: string;
    icon: IconDefinition;
    projectDetails : IProjectDetail[]
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
    const projectDetails = props.project.projectDetails;
    const classes = useStyles({ style: style });

    return (
            <List className={classes.list}>
                <ListItem>
                    <ProjectHead language={language} style={style} project={project}/>
                </ListItem>
                <Divider className={classes.divider} variant={getStyle(style).project.projectlist.griditem.divider.variant} />
                {projectDetails.map(x => 
                <ListItem className={classes.listitem}>
                    <ProjectDetail style={style} projectDetail={x}/>
                </ListItem>)}
            </List>
    );
}