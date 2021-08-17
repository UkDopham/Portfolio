import React from 'react';
import { useStyles } from './options.styles';
import { Language, Style } from '../../App';
import { Button, Avatar, Box } from '@material-ui/core';

type Props = {
    onClickLanguage: (language: Language) => void;
    onClickStyle: (style: Style) => void;
    language:Language;
}

export const Options = (props: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.Box} >
            <Button onClick={() => props.onClickStyle(Style.normal)}
                className={classes.StyleButton}>
                <Avatar src={'./empty.png'} />
            </Button>
            <Button onClick={() => props.onClickStyle(Style.pixel)}
                className={classes.StyleButton}>
                <Avatar src={'./alien-pixelated-shape-of-a-digital-game.png'} />
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