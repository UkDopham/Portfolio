import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from '../../App';
import { getStyle, StyleProps } from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
({
    list:{
    },
    listitem :{
    },
    img:{
        height: ({style}) => getStyle(style).project.projectlist.griditem.img.height,
        width: ({style}) => getStyle(style).project.projectlist.griditem.img.width,
        margin:({style}) => getStyle(style).project.projectlist.griditem.img.margin,
    },
    typography:{
        height:'100%',
        width:'100%',
        textAlign:({style}) => getStyle(style).project.projectlist.griditem.typography.textalign,
    }
})
);

