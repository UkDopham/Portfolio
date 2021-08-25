import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from '../../App';
import { getStyle, StyleProps } from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
({
    list: {
    },
    divider: {
    },
    listitem: {
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

