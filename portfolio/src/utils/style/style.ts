import { Style } from '../../App';
import { appleStyle } from './style.apple';
import { microsoftStyle } from './style.netflix';

export interface IStyle {
  about: {
    avatar: string;
    title : {
      fontFamily: string;
      fontSize : string;
    },
    subtitle : {
      fontFamily: string;
      fontSize : string;
    }
  },
  options: {
    backgroundColor: string;
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
    button: {
      avatar: {
        height: string;
        width: string;
      }
    }
  },
  suboptions :{
    backgroundColor: string;
    visibility: 'visible' | 'hidden' | 'collapse';
  }

}

export const getStyle = (style: Style) => {
  console.log(style);
  switch (style) {
    default:
      return appleStyle;

    case Style.netflix:
      return microsoftStyle;
  }
}