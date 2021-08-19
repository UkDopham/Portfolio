import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getStyle, StyleProps } from '../../utils/style/style';
import { Style } from '../../App';
import {Theme} from '@material-ui/core';

export const useStyles = makeStyles<Theme, StyleProps>(theme => //cursive
({
  title: {
    textAlign: 'center',
    fontFamily: ({style}) => getStyle(style).about.title.fontFamily,
    fontWeight:'bold',
    fontSize: ({style}) => getStyle(style).about.title.fontSize,
  },
  subtitle: {
    fontFamily: ({style}) => getStyle(style).about.subtitle.fontFamily,
    fontSize: ({style}) => getStyle(style).about.subtitle.fontSize,
    textAlign: 'center',
  }
})
);


