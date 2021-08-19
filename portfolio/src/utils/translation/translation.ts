import {Language} from '../../App';
import { frTranslation } from './translation.french';
import { enTranslation } from './translation.english';

export interface Translation {
  buttons:{
    normal : string;
    pixel:string;
  };
  about:{
    title : string;
    subtitle : string; 
  },
  suboptions:{
    link:string;
    message:string;
  },
  projet: {
    title: string;
    subtitle : string;
  }
}

export const getTranslation = (language:Language,) => {
  switch(language){
    default:
      return frTranslation;

    case Language.english:
      return enTranslation;
  }
}