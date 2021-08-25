import { getTranslation } from '../translation/translation';
import { Language } from '../../App';
import { faCodeBranch, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faUnity, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const cieluProject = (language: Language) => {
    return ({
        image: 'projects/cielu.png',
        name: getTranslation(language).projects.cielu.name,
        description: getTranslation(language).projects.cielu.description,
        link: 'https://www.youtube.com/watch?v=TE-Unb53eGI',
        icon: faYoutube,
        projectDetails: [
            {
                icon: faLayerGroup,
                text: getTranslation(language).projects.cielu.projectDetails.fullstack.text,
                subtext: getTranslation(language).projects.cielu.projectDetails.fullstack.subtext,
            },
            {
                icon: faMicrosoft,
                text: getTranslation(language).projects.cielu.projectDetails.dotnet.text,
                subtext: getTranslation(language).projects.cielu.projectDetails.dotnet.subtext,
            },
            {
                icon: faUnity,
                text: getTranslation(language).projects.cielu.projectDetails.unity.text,
                subtext: getTranslation(language).projects.cielu.projectDetails.unity.subtext,
            },
        ]
    }
    )
}