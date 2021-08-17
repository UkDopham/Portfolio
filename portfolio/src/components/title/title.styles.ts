import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getStyle } from '../../utils/style/style';
import { Style } from '../../App';
import {Theme} from '@material-ui/core';

export interface StyleProps {
  style: Style;
}

export const useStyles = makeStyles<Theme, StyleProps>(theme => //cursive
({
  title: {
    textAlign: 'center',
    fontFamily: ({style}) => getStyle(style).about.titleFontFamily,
  },
  subtitle: {
    fontFamily: 'system-ui',
    fontWeight: 'lighter',
    textAlign: 'center',
  }
})
);


