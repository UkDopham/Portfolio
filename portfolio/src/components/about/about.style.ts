import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Style} from '../../App';

export const useStyles = makeStyles<Style>(style =>
  createStyles({
    avatar: {
      height:'25%',
      width:'25%',
    },
    box : {
      alignItems:'center',
      justifyContent: 'center',
      display:'flex',
      flexDirection:'column',
    },
  })
);

