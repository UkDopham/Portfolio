import { getTranslation } from '../translation/translation';
import { Language } from '../../App';
import { faCodeBranch, faLayerGroup, faAward, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faMicrosoft, faJs, faUnity } from '@fortawesome/free-brands-svg-icons';

export const imageProject = (language: Language) => {
    return ({
        image: 'projects/bmp.png',
        name: getTranslation(language).projects.image.name,
        description: getTranslation(language).projects.image.description,
        link: 'https://github.com/UkDopham/Bmp-processing',
        icon: faCodeBranch,
        projectDetails: [
            {
                icon: faLayerGroup,
                text: getTranslation(language).projects.image.projectDetails.fullstack.text,
                subtext: getTranslation(language).projects.image.projectDetails.fullstack.subtext,
            },
            {
                icon: faMicrosoft,
                text: getTranslation(language).projects.image.projectDetails.dotnet.text,
                subtext: getTranslation(language).projects.image.projectDetails.dotnet.subtext,
            },
        ]
    }
    )
}