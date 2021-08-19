import { Style } from '../../App';
import { appleStyle } from './style.apple';
import { microsoftStyle } from './style.netflix';

export interface StyleProps {
  style: Style;
}

export interface IStyle {
  about: {
    avatar: {
      path : string;
      margin : number;
    };
    title : {
      fontFamily: string;
      fontSize : string;
    };
    subtitle : {
      fontFamily: string;
      fontSize : string;
    }
  };
  options: {
    backgroundColor: string;
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
    button: {
      avatar: {
        height: string;
        width: string;
      }
    }
  };
  suboptions :{
    backgroundColor: string;
    visibility: 'visible' | 'hidden' | 'collapse';
  };
  project :{
    height : string;
    backgroundColor: string;
    title: {
      color: string;
      fontSize : string;
      fontFamily: string;
      margin:number;
    };
    subtitle: {
      color: string;
      fontSize : string;
      fontFamily: string;
      margin:number;
    };
    projectlist:{
      width:string;
      direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    }
  };
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