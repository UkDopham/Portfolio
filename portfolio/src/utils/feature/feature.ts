import { Feature, Language } from "../../App";
import { faCodeBranch, faUsers, IconDefinition, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact, faMicrosoft, faJs, faUnity, faCss3, faJira } from '@fortawesome/free-brands-svg-icons';
import { getTranslation } from '../translation/translation';

export interface IFeature {
    text: string;
    icon: IconDefinition;
}
export const getFeature = (feature: Feature, language: Language) => {
    switch (feature) {
        default:
            return {
                text: getTranslation(language).featurebar.agile,
                icon: faUsers,
            };

        case Feature.csshtml:
            return {
                text: getTranslation(language).featurebar.csshtml,
                icon: faCss3,
            };

        case Feature.dotnet:
            return {
                text: getTranslation(language).featurebar.dotnet,
                icon: faMicrosoft,
            };

        case Feature.react:
            return {
                text: getTranslation(language).featurebar.react,
                icon: faReact,
            };

        case Feature.typescript:
            return {
                text: getTranslation(language).featurebar.typescript,
                icon: faJs,
            };

        case Feature.unity:
            return {
                text: getTranslation(language).featurebar.unity,
                icon: faUnity,
            };

        case Feature.git:
            return {
                text: getTranslation(language).featurebar.git,
                icon: faCodeBranch,
            };

        case Feature.jira:
            return {
                text: getTranslation(language).featurebar.jira,
                icon: faJira,
            };

        case Feature.mobile:
            return {
                text: getTranslation(language).featurebar.mobile,
                icon: faMobileAlt,
            }

    }
}