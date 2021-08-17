import {Style} from '../../App';
import { appleStyle } from './style.apple';
import { microsoftStyle } from './style.netflix';

export interface IStyle {
    about :{
        avatar: string;
        titleFontFamily : string;
    },
    options :{
      backgroundColor : string;
      button : {
        avatar : {
            height : string;
            width : string;
        }
      }
    }

}

export const getStyle = (style:Style) => {
  console.log(style);
  switch(style){
    default:
      return appleStyle;

    case Style.netflix:
      return microsoftStyle;
  }
}