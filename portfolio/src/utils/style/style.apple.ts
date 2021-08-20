import { IStyle } from './style';

export const appleStyle: IStyle = {
    about: {
        avatar: {
            path: 'hiking.jpg',
            margin: 40,
        },
        title: {
            fontFamily: 'SF Pro Text',
            fontSize: '52px',
        },
        subtitle: {
            fontFamily: 'SF Pro Rounded',
            fontSize: '32px',
        },
    },
    options: {
        backgroundColor: '#323333',
        flexDirection: 'row',
        button: {
            avatar: {
                height: '15%',
                width: '15%',
            }
        }
    },
    suboptions: {
        backgroundColor: '#f6f5f7',
        visibility: 'visible',
    },
    project: {
        height: '80vh',
        backgroundColor: '#fafafa',
        title: {
            color: 'black',
            fontSize: '52px',
            fontFamily: 'SF Pro Text',
            margin: 5,
        },
        subtitle: {
            color: '#4ca7df',
            fontSize: '15px',
            fontFamily: 'SF Pro Text',
            margin: 10,
        },
        projectlist: {
            mt: 10,
            grid: {
                width: '60%',
                direction: 'row',
                margin: 'auto'
            },
            griditem: {
                textalign: 'center'
            }
        },
    }
}