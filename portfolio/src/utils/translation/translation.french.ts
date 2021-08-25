import { Translation } from './translation';

export const frTranslation: Translation = {
    buttons: {
        normal: 'Classique',
        pixel: 'Pixélisé',
    },
    about: {
        title: 'Salut, Je suis Alex !',
        subtitle: 'Je suis un dévelopeur full stack.'
    },
    suboptions: {
        link: 'Mon linkedin',
        message: 'si vous voulez plus de details.',
    },
    projet: {
        title: 'Mes projets !',
        subtitle: 'Projets sur lesquels j\'ai travaillé.',
        projectlist: {
            projectitem: {
                github: 'Projet'
            }
        }
    },
    projects: {
        gant: {
            name: 'Traçabilité d\'un vêtement',
            description: 'Traçabilité d\'un vêtement à l\'aide de la blockchain.',
            projectDetails: {
                hyperledger: {
                    text: 'Blockchain d\'IBM Hyperledger',
                    subtext: ''
                },
                js: {
                    text: 'Javascript et Typescript',
                    subtext: ''
                },
                award: {
                    text: 'Vainqueur Open Innovation',
                    subtext: 'Gant Ethique & Blockchain.'
                },
                users: {
                    text: 'Projet transversale entre ESILV et IESEG',
                    subtext: 'Entre une équipe d\'élèves ingénieur et d\'élèves en communication.'
                },
                fullstack: {
                    text: 'FullStack',
                    subtext: ''
                }
            }
        },
        cielu: {
            name: 'Jeu 2.5D',
            description: 'Jeu tour en tour avec le moteur Unity.',
            projectDetails: {
                unity: {
                    text: 'Avec le moteur Unity',
                    subtext: ''
                },
                dotnet: {
                    text: 'C#',
                    subtext: ''
                },
                fullstack: {
                    text: 'FullStack',
                    subtext: ''
                }
            }
        },
        image: {
            name: 'Logiciel BMP',
            description: 'Logiciel permettant le traitement d\'image BMP.',
            projectDetails: {
                dotnet: {
                    text: 'C# et WPF',
                    subtext: ''
                },
                fullstack: {
                    text: 'FullStack',
                    subtext: ''
                }
            }
        }
    }
}
