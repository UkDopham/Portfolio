import React from 'react';
import { Title } from '../title/title';
import { Language, Style } from '../../App';
import { getTranslation } from '../../utils/translation/translation';
import { getStyle } from '../../utils/style/style';
import { Grid, Typography, Box } from '@material-ui/core';
import { useStyles } from './projectlist.style';

type Props = {
    language: Language,
    style: Style,
}

export const ProjectList = (props: Props) => {
    const language = props.language;
    const style = props.style;
    const classes = useStyles({ style: style });

    return (
        <Box className={classes.box}>
            <Box className={classes.Boxitem}>
                <Typography>TODO</Typography>
            </Box>
            <Box className={classes.Boxitem}>
                <Typography>TODO</Typography>
            </Box>
            <Box className={classes.Boxitem}>
                <Typography>TODO</Typography>
            </Box>
        </Box>
    );
}