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
      typography:{
        textAlign:({style}) => getStyle(style).project.projectlist.griditem.projectDetail.typography.textAlign,
        margin : ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.typography.margin,
        fontFamily: ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.typography.fontFamily,
        fontSize: ({style}) => getStyle(style).project.projectlist.griditem.projectDetail.typography.fontSize
      }
  })
);

