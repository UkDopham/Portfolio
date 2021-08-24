import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Style} from '../../App';
import { getStyle, StyleProps} from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
  ({
      list:{
        margin : 'auto',
      },
      listitem:{
      },
      image:{
        height : '30%',
        width : '30%',
        margin : 'auto',
      },
      typography:{
        textAlign:'center',
        margin : 'auto',
      }
  })
);

