import { Language } from '../../App';
import { frTranslation } from './translation.french';
import { enTranslation } from './translation.english';

export interface Translation {
  buttons: {
    normal: string;
    pixel: string;
  };
  about: {
    title: string;
    subtitle: string;
  },
  suboptions: {
    link: string;
    message: string;
  },
  projet: {
    title: string;
    subtitle: string;
    projectlist: {
      projectitem: {
        github: string
      }
    }
  },
  projects: {
    gant: {
      name: string;
      description: string;
      projectDetails :{
        hyperledger:{
          text:string;
          subtext:string;
        };
        js:{
          text:string;
          subtext:string;
        };
        award:{
          text:string;
          subtext:string;
        };
        users:{
          text:string;
          subtext:string;
        };
        fullstack:{
          text:string;
          subtext:string;
        };
      };
    };
    cielu:{
      name: string;
      description: string;
      projectDetails :{
        unity:{
          text:string;
          subtext:string;
        };
        dotnet:{
          text:string;
          subtext:string;
        };
        fullstack:{
          text:string;
          subtext:string;
        };
      }
    };
    image : {
      name: string;
      description: string;
      projectDetails :{
        dotnet:{
          text:string;
          subtext:string;
        };
        fullstack:{
          text:string;
          subtext:string;
        };
      }

    }
  }
}

export const getTranslation = (language: Language,) => {
  switch (language) {
    default:
      return frTranslation;

    case Language.english:
      return enTranslation;
  }
}