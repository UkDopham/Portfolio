import React from 'react';
import { useStyles } from './suboptions.style';
import { Language, Style } from '../../App';
import { Box, Typography } from '@material-ui/core';
import { getTranslation } from '../../utils/translation/translation';

type Props = {
    language: Language;
    style: Style;
}

export const Suboptions = (props: Props) => {
    const classes = useStyles({ style: props.style });
    const language = props.language;

    return (
        <Box className={classes.Box} >
            <Typography className={classes.Typography}>
                <a href="https://www.linkedin.com/in/alexandredopham/">{getTranslation(language).suboptions.link}</a> {getTranslation(language).suboptions.message}
            </Typography>
        </Box>
    );
}