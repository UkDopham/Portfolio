import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from '../../App';
import { getStyle, StyleProps } from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
({
    grid: {
        width: ({ style }) => getStyle(style).project.projectlist.grid.width,
        margin: ({ style }) => getStyle(style).project.projectlist.grid.margin,
        display:'flex',
        flexDirection: ({ style }) => getStyle(style).project.projectlist.grid.direction,
    },
    griditem :{
        textAlign:'center',
    },
    typography:{
        textAlign:'center'
    }
})
);

