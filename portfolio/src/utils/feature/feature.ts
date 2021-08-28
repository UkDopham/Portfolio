import { Feature } from "../../App";
import { faCodeBranch, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faReact, faMicrosoft, faJs, faUnity, faCss3, faJira } from '@fortawesome/free-brands-svg-icons';

export interface IFeature {
    text: string;
    icon: IconDefinition;
}
export const getFeature = (feature: Feature) => {
    console.log(feature);
    switch (feature) {
        default:
            return {
                text: 'agile',
                icon: faUsers,
            };

        case Feature.csshtml:
            return {
                text: 'HTML & CSS',
                icon: faCss3,
            };

        case Feature.dotnet:
            return {
                text: '.Net',
                icon: faMicrosoft,
            };

        case Feature.react:
            return {
                text: 'React',
                icon: faReact,
            };

        case Feature.typescript:
            return {
                text: 'JS & Typescript',
                icon: faJs,
            };

        case Feature.unity:
            return {
                text: 'Unity',
                icon: faUnity,
            };

        case Feature.git:
            return {
                text: 'git',
                icon: faCodeBranch,
            };

        case Feature.jira:
            return {
                text: 'Jira',
                icon: faJira,
            };

    }
}