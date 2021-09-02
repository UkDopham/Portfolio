import React from 'react';
import { useStyles } from './featurebar.style';
import { Language, Style } from '../../App';
import { Button, Box, Typography } from '@material-ui/core';
import { Feature } from '../../App';
import { getFeature } from '../../utils/feature/feature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    language: Language;
    style: Style;
    onClickFeature: (feature: Feature) => void;
}
export const Featurebar = (props: Props) => {
    const classes = useStyles({ style: props.style });
    const language = props.language;
    const featureList = [Feature.agile,
    Feature.csshtml,
    Feature.dotnet,
    Feature.git,
    Feature.jira,
    Feature.react,
    Feature.typescript,
    Feature.unity,
    Feature.mobile,
    ];
    return (
        <Box className={classes.box}>
            <Box className={classes.boxcontainer}>
                {featureList.map(x =>
                    <Button onClick={() => props.onClickFeature(Feature.dotnet)}
                        className={classes.button}>
                        <Box>
                            <FontAwesomeIcon className={classes.icon} icon={getFeature(x, language).icon} />
                            <Typography className={classes.typography}>{getFeature(x, language).text}</Typography>
                        </Box>
                    </Button>
                )}
            </Box>
        </Box>
    );
}