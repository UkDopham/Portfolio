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
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems : 'center',
      height:'6vh',
      backgroundColor: ({style}) => getStyle(style).options.backgroundColor,
    },
    StyleButton: {
    },
    LanguageButton: {
    },
    Avatar: {
      height: ({style}) => getStyle(style).options.button.avatar.height,
      width: ({style}) => getStyle(style).options.button.avatar.width,
    }
  })
);


