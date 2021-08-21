import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Style} from '../../App';
import { getStyle, StyleProps} from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
  ({
      box :{
          height : ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.height,
      },
      listitem:{
          margin:({ style }) => getStyle(style).project.projectlist.griditem.gridhead.listitem.margin,
      },
      img: {
          height: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.img.height,
          width: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.img.width,
          margin: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.img.margin,
      },
      title: {
          textAlign: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.title.textAlign,
          height: '100%',
          width: '100%',
          fontFamily: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.title.fontFamily,
          fontSize: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.title.fontSize,
          fontWeight: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.title.fontWeight
      },
      subtitle: {
          textAlign: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.subtitle.textAlign,
          height: '100%',
          width: '100%',
          fontFamily: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.subtitle.fontFamily,
          fontSize: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.subtitle.fontSize,
      },
      button: {
          backgroundColor: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.link.backgroundColor,
          margin: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.link.margin,
          borderRadius: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.link.borderRadius,
      },
      a: {
          backgroundColor: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.link.a.backgroundColor,
          color: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.link.a.color,
          fontFamily: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.link.a.fontFamiliy,
          fontSize: ({ style }) => getStyle(style).project.projectlist.griditem.gridhead.link.a.fontSize,
          textDecoration: 'none',
      },
      icon:{
          marginLeft:5,
          marginRight:5
      }
  })
);

