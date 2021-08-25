import { Language, Projects } from "../../App";
import { cieluProject } from "./project.cielu";
import { gantProject } from "./project.gant";
import { imageProject } from "./project.image";

export const getProject = (language: Language, projects : Projects) => {
    switch (projects) {
      default:
        return gantProject(language);
  
      case Projects.cielu:
        return cieluProject(language);;

        case Projects.image:
        return imageProject(language);;
    }
  }