import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from '../../App';
import { getStyle, StyleProps } from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
({
    box: {
        width: ({ style }) => getStyle(style).project.projectlist.width,
        justifyContent: 'center',
        textAlign:'center',
        display:'flex',
        flexDirection:'row'
    },
})
);

