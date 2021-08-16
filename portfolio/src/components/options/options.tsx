import React from 'react';
import { useStyles } from './options.styles';
import { Language } from '../../App';
import { Button,Avatar } from '@material-ui/core';

type Props = {
    onClickLanguage: (language: Language) => void;
}

export const Options = (props: Props) => {
    const classes = useStyles();

    return (
        <div >
            <Button className={classes.StyleButton}>
                Normal
            </Button>
            <Button className={classes.StyleButton}>
                Pixel
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
                <Avatar src={'./united-kingdom.png'}/>
            </Button>
        </div>
    );
}