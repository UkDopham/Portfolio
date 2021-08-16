import React from 'react';
import { useStyles} from './title.styles';
import {Typography} from '@material-ui/core';

type Props = {
  title: string,
  subtitle : string,
}
export const Title = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" className={classes.title}>
        {props.title}
      </Typography>

      <Typography variant="h4" className={classes.subtitle}>
        {props.subtitle}
      </Typography>

    </div>
  );
}
