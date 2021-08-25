import { getTranslation } from '../translation/translation';
import { Language } from '../../App';
import { faCodeBranch, faLink, faAward, faUsers, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faReact, faJs } from '@fortawesome/free-brands-svg-icons';

export const gantProject = (language: Language) => {
    return ({
        image: 'projects/gant.png',
        name: getTranslation(language).projects.gant.name,
        description: getTranslation(language).projects.gant.description,
        link: 'https://github.com/UkDopham/Traceability_blockchain',
        icon: faCodeBranch,
        projectDetails: [
            {
                icon: faLayerGroup,
                text: getTranslation(language).projects.image.projectDetails.fullstack.text,
                subtext: getTranslation(language).projects.image.projectDetails.fullstack.subtext,
            },
            {
                icon: faJs,
                text: getTranslation(language).projects.gant.projectDetails.js.text,
                subtext: getTranslation(language).projects.gant.projectDetails.js.subtext,
            },
            {
                icon: faLink,
                text: getTranslation(language).projects.gant.projectDetails.hyperledger.text,
                subtext: getTranslation(language).projects.gant.projectDetails.hyperledger.subtext,
            },
            {
                icon: faAward,
                text: getTranslation(language).projects.gant.projectDetails.award.text,
                subtext: getTranslation(language).projects.gant.projectDetails.award.subtext,
            },
            {
                icon: faUsers,
                text: getTranslation(language).projects.gant.projectDetails.users.text,
                subtext: getTranslation(language).projects.gant.projectDetails.users.subtext,
            },
        ]
    }
    )
}