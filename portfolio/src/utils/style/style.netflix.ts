import { IStyle } from './style';
import { Box } from '@material-ui/core';

export const microsoftStyle: IStyle = {
    about: {
        avatar: {
            path: 'hiking-pixel.jpg',
            margin: 10,
        },
        title: {
            fontFamily: 'impact',
            fontSize: '50px',
        },
        subtitle: {
            fontFamily: 'impact',
            fontSize: '28px',
        },
    },
    options: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row-reverse',
        button: {
            avatar: {
                height: '30%',
                width: '30%',
            }
        }
    },
    suboptions: {
        backgroundColor: 'red',
        visibility: 'hidden',
    },
    project: {
        height: '50vh',
        backgroundColor: 'red',
        title: {
            color: 'pink',
            fontSize: '23px',
            fontFamily: 'impact',
            margin: 5,
        },
        subtitle: {
            color: 'green',
            fontSize: '16px',
            fontFamily: 'impact',
            margin: 5,
        },
        projectlist: {
            mt: 10, 
            grid: {
                width: '100%',
                direction: 'column',
                margin: 'auto'
            },
            griditem: {
                textalign: 'left'
            }
        }
    }
}