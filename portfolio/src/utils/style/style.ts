import {Style} from '../../App';
import { normalStyle } from './style.normal';
import { pixelStyle } from './style.pixel';

export interface IStyle {
    about :{
        avatar: string;
        titleFontFamily : string;
    }

}

export const getStyle = (style:Style) => {
  switch(style){
    default:
      return normalStyle;

    case Style.pixel:
      return pixelStyle;
  }
}