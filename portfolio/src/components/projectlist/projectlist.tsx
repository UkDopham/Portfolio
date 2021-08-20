import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { Grid, Typography, Box } from '@material-ui/core';
import { useStyles } from './projectlist.style';
import { IProject, ProjetItem } from '../projectitem/projectitem';

const projects : IProject[] = [{
    image:'france.png',
    name:'test',
    description:'hello',
    githubLink:'www.google.com'
}];
type Props = {
    language: Language,
    style: Style,
}

export const ProjectList = (props: Props) => {
    const language = props.language;
    const style = props.style;
    const classes = useStyles({ style: style });

    return (
        <Box mt={getStyle(style).project.projectlist.mt}>
            <Grid container className={classes.grid} >
                <Grid item xs={4} className={classes.griditem}>
                    <ProjetItem language={language} style={style} project={projects[0]}/>
                </Grid>
                <Grid item xs={4} className={classes.griditem}>
                    <ProjetItem language={language} style={style} project={projects[0]}/>
                </Grid>
                <Grid item xs={4} className={classes.griditem}>
                    <ProjetItem language={language} style={style} project={projects[0]}/>
                </Grid>
            </Grid>

        </Box>
    );
}