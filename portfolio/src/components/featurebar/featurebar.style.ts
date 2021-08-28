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
    box: {
      height:({style}) => getStyle(style).featurebar.height,
      backgroundColor: ({style}) => getStyle(style).featurebar.backgroundColor,
    },
    boxcontainer:{
        display: 'flex',
        flexDirection: ({style}) => getStyle(style).featurebar.flexDirection,
        alignItems : 'center',
        width: ({style}) => getStyle(style).featurebar.width,
        margin: 'auto'
    },
    button:{
        margin: 'auto',
    },
    icon: {
        fontSize: ({style}) => getStyle(style).featurebar.button.icon.fontSize,
    },
    typography:{
        fontSize: ({style}) => getStyle(style).featurebar.button.typography.fontSize,
        fontFamily: ({style}) => getStyle(style).featurebar.button.typography.fontFamiliy,
        color : ({style}) => getStyle(style).featurebar.button.typography.color,
    }
  })
);


