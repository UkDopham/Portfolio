import { Translation } from './translation';

export const enTranslation: Translation = {
    buttons: {
        normal: 'Classic',
        pixel: 'Pixel',
    },
    about: {
        title: 'Hello, it\s Alex !',
        subtitle: 'I am a full stack developer.'
    },
    suboptions: {
        link: 'My linkedin profil',
        message: 'if you want to know more about me.',
    },
    projet: {
        title: 'My projects !',
        subtitle: 'Projects I\'ve worked on.',
        projectlist:{
            projectitem:{
              github:'Project'
            }
          }
    },
    projects:{
        gant:{
            name:'Traceability of a clothing',
            description:'Traceability of a clothing using the blockchain',
            projectDetails:{
                hyperledger:{
                    text: 'IBM Hyperledger\'s Blockchain',
                    subtext: ''
                },
                js :{
                    text: 'Javascript and Typescript',
                    subtext: ''
                },
                award:{
                    text: 'Open Innovation Winner',
                    subtext: 'Gant Ethique & Blockchain.'
                },
                users:{
                    text :'Transversal project between ESILV and IESEG',
                    subtext: 'Between a team of engineering students and communication students.'
                },
                fullstack: {
                    text: 'FullStack',
                    subtext: ''
                }
            }
        },
        cielu: {
            name: '2.5D Game',
            description: 'Turn based game build with the Unity engine.',
            projectDetails: {
                unity: {
                    text: 'Unity engine',
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
            name: 'BMP software',
            description: 'Software allowing the treatment of BMP image.',
            projectDetails: {
                dotnet: {
                    text: 'C# and WPF',
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