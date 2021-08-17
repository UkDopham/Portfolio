import React from 'react';
import { useStyles} from './title.styles';
import {Typography} from '@material-ui/core';
import { Style } from '../../App';

type Props = {
  title: string,
  subtitle : string,
  style: Style,
}
export const Title = (props: Props) => {
  const classes = useStyles({style:props.style});

  return (
    <div>
      <Typography className={classes.title}>
        {props.title}
      </Typography>

      <Typography className={classes.subtitle}>
        {props.subtitle}
      </Typography>

    </div>
  );
}
