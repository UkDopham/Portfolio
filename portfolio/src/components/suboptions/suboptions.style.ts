import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getStyle } from '../../utils/style/style';
import { Style } from '../../App';
import { Theme } from '@material-ui/core';

export interface StyleProps {
  style: Style;
}

export const useStyles = makeStyles<Theme, StyleProps>(theme => //cursive
(
  {
    Box: {
      textAlign: 'center',
      height: '5vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: ({ style }) => getStyle(style).suboptions.backgroundColor,
      visibility: ({ style }) => getStyle(style).suboptions.visibility,
    },
    Typography: {
    }
  })
);


