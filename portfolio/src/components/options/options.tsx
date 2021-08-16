import React from 'react';
import { useStyles } from './options.styles';
import { Language, Style } from '../../App';
import { Button, Avatar, Box } from '@material-ui/core';
import { getTranslation } from '../../utils/translation/translation';

type Props = {
    onClickLanguage: (language: Language) => void;
    onClickStyle: (style: Style) => void;
    language:Language
}

export const Options = (props: Props) => {
    const classes = useStyles();
    const language = props.language;

    return (
        <Box className={classes.Box}>
            <Button onClick={() => props.onClickStyle(Style.normal)}
                className={classes.StyleButton}>
                {getTranslation(language).buttons.normal}
            </Button>
            <Button onClick={() => props.onClickStyle(Style.normal)}
                className={classes.StyleButton}>
                {getTranslation(language).buttons.pixel}
            </Button>

            <Button
                onClick={() => props.onClickLanguage(Language.french)}
                className={classes.LanguageButton}
            >
                <Avatar src={'./france.png'} />
            </Button>

            <Button
                onClick={() => props.onClickLanguage(Language.english)}
                className={classes.LanguageButton}
            >
                <Avatar src={'./united-kingdom.png'} />
            </Button>
        </Box>
    );
}