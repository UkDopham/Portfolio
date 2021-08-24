import { IProject } from '../../components/projectitem/projectitem';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export const projects = {
    gant: {
        image: 'projects/gant.png',
        name: 'Gant Ethique & Blockchain',
        description: 'Traçabilité d\'un vêtement à l\'aide de la blockchain.',
        link: 'https://github.com/UkDopham/Traceability_blockchain',
        icon: faCodeBranch,
        projectDetails: [{
            icon: faYoutube,
            text: 'france.png'
        },
        {
            icon: faYoutube,
            text: 'hiking.jpg',
        },]
    },
    cielu: {
        image: 'projects/cielu.png',
        name: 'Jeu 2.5D',
        description: 'Jeu tour en tour avec le moteur Unity.',
        link: 'https://www.youtube.com/watch?v=TE-Unb53eGI',
        icon: faYoutube,
        projectDetails: [{
            icon: faYoutube,
            text: 'hiking.png'
        }]
    }
}
