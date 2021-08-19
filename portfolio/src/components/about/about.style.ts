import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Style} from '../../App';
import { getStyle, StyleProps} from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
  ({
    avatar: {
      height:'25%',
      width:'25%',
      margin:({style}) => getStyle(style).about.avatar.margin,
    },
    box : {
      margin: 25,
      alignItems:'center',
      justifyContent: 'center',
      display:'flex',
      flexDirection:'column',
    },
  })
);

