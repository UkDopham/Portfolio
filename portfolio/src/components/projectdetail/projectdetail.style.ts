import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Style} from '../../App';
import { getStyle, StyleProps} from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
  ({
      list:{
        margin : ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.list.margin
      },
      listitem:{
      },
      icon:{
        margin : ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.icon.margin,
        fontSize: ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.icon.iconSize,
      },
      text:{
        textAlign:({style}) => getStyle(style).project.projectlist.griditem.projectDetail.text.textAlign,
        margin : ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.text.margin,
        fontFamily: ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.text.fontFamily,
        fontSize: ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.text.fontSize,
        color :  ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.text.color,  
      },
      subtext:{
        textAlign:({style}) => getStyle(style).project.projectlist.griditem.projectDetail.subtext.textAlign,
        margin : ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.subtext.margin,
        fontFamily: ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.subtext.fontFamily,
        fontSize: ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.subtext.fontSize,
        color :  ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.subtext.color,  
      }
  })
);

