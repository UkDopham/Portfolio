import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from '../../App';
import { getStyle, StyleProps } from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
({
  box: {
    height: ({ style }) => getStyle(style).project.height,
    backgroundColor: ({ style }) => getStyle(style).project.backgroundColor,
  },
  title: {
    textAlign: 'center',
    color : ({style}) => getStyle(style).project.title.color,
    fontSize : ({style}) => getStyle(style).project.title.fontSize,
    fontFamily : ({style}) => getStyle(style).project.title.fontFamily,
    margin : ({style}) => getStyle(style).project.title.margin
  },
  subtitle: {
    textAlign: 'center',
    color : ({style}) => getStyle(style).project.subtitle.color,
    fontSize : ({style}) => getStyle(style).project.subtitle.fontSize,
    fontFamily : ({style}) => getStyle(style).project.subtitle.fontFamily,
    margin : ({style}) => getStyle(style).project.subtitle.margin
  }
})
);

