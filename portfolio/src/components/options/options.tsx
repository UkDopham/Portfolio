import React from 'react';
import { useStyles } from './options.styles';
import { Language, Style } from '../../App';
import { Button, Box } from '@material-ui/core';

type Props = {
    onClickLanguage: (language: Language) => void;
    onClickStyle: (style: Style) => void;
    language:Language;
    style:Style;
}

export const Options = (props: Props) => {
    const classes = useStyles({style:props.style});

    return (
        <Box className={classes.Box} >
            <Button onClick={() => props.onClickStyle(Style.apple)}
                className={classes.StyleButton}>
                <img src={'./apple/apple.png'} className={classes.Avatar}/>
            </Button>
            <Button onClick={() => props.onClickStyle(Style.netflix)}
                className={classes.StyleButton}>
                <img src={'./alien-pixelated-shape-of-a-digital-game.png'} className={classes.Avatar}/>
            </Button>

            <Button
                onClick={() => props.onClickLanguage(Language.french)}
                className={classes.LanguageButton}
            >
                <img src={'./france.png'} className={classes.Avatar}/>
            </Button>

            <Button
                onClick={() => props.onClickLanguage(Language.english)}
                className={classes.LanguageButton}
            >
                <img src={'./united-kingdom.png'} className={classes.Avatar}/>
            </Button>
        </Box>
    );
}