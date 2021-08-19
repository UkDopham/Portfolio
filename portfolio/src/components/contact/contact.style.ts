import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Style} from '../../App';
import { getStyle, StyleProps} from '../../utils/style/style';

export const useStyles = makeStyles<Style, StyleProps>(thme =>
  ({
      box :{
        //height: ({style}) => getStyle(style).contact.height,
        //backgroundColor: ({style}) => getStyle(style).contact.backgroundColor,
      }
  })
);

