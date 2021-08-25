import React from 'react';
import { Title } from '../title/title';
import { Language, Style, Projects } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { Grid, Typography, Box } from '@material-ui/core';
import { useStyles } from './projectlist.style';
import { ProjetItem } from '../projectitem/projectitem';
import { getProject } from '../../utils/project/project';

type Props = {
    language: Language,
    style: Style,
}

export const ProjectList = (props: Props) => {
    const language = props.language;
    const style = props.style;
    const classes = useStyles({ style: style });

    return (
        <Box mt={getStyle(style).project.projectlist.mt} className={classes.box}>
            <Grid container className={classes.grid} >
                <Grid item xs={4} className={classes.griditem}>
                    <ProjetItem language={language} style={style} project={getProject(language, Projects.gant)} />
                </Grid>
                <Grid item xs={4} className={classes.griditem}>
                    <ProjetItem language={language} style={style} project={getProject(language, Projects.cielu)} />
                </Grid>
                <Grid item xs={4} className={classes.griditem}>
                    <ProjetItem language={language} style={style} project={getProject(language, Projects.image)}/>
                </Grid>
            </Grid>
        </Box>
    );
}