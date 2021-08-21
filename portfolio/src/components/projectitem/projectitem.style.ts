import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from '../../App';
import { getStyle, StyleProps } from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
({
    list: {
    },
    listitem: {
    },
    img: {
        height: ({ style }) => getStyle(style).project.projectlist.griditem.img.height,
        width: ({ style }) => getStyle(style).project.projectlist.griditem.img.width,
        margin: ({ style }) => getStyle(style).project.projectlist.griditem.img.margin,
    },
    title: {
        textAlign: ({ style }) => getStyle(style).project.projectlist.griditem.title.textAlign,
        height: '100%',
        width: '100%',
        fontFamily: ({ style }) => getStyle(style).project.projectlist.griditem.title.fontFamily,
        fontSize: ({ style }) => getStyle(style).project.projectlist.griditem.title.fontSize,
        fontWeight: ({ style }) => getStyle(style).project.projectlist.griditem.title.fontWeight
    },
    subtitle: {
        textAlign: ({ style }) => getStyle(style).project.projectlist.griditem.subtitle.textAlign,
        height: '100%',
        width: '100%',
        fontFamily: ({ style }) => getStyle(style).project.projectlist.griditem.subtitle.fontFamily,
        fontSize: ({ style }) => getStyle(style).project.projectlist.griditem.subtitle.fontSize,
    },
    button: {
        backgroundColor: ({ style }) => getStyle(style).project.projectlist.griditem.github.backgroundColor,
        margin: ({ style }) => getStyle(style).project.projectlist.griditem.github.margin,
        borderRadius: ({ style }) => getStyle(style).project.projectlist.griditem.github.borderRadius,
    },
    a: {
        backgroundColor: ({ style }) => getStyle(style).project.projectlist.griditem.github.a.backgroundColor,
        color: ({ style }) => getStyle(style).project.projectlist.griditem.github.a.color,
        fontFamily: ({ style }) => getStyle(style).project.projectlist.griditem.github.a.fontFamiliy,
        fontSize: ({ style }) => getStyle(style).project.projectlist.griditem.github.a.fontSize,
        textDecoration: 'none',
    },
    divider: {

    },
    icon:{
        marginLeft:5,
        marginRight:5
    }
})
);

