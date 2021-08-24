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
                gridhead: {
                    textAlign: 'left',
                    listitem: {
                        margin: 10
                    },
                    height: '23vh',
                    img: {
                        width: '50%',
                        height: '50%',
                        margin: '10'
                    },
                    title: {
                        textAlign: 'center',
                        height: '100%',
                        width: '100%',
                        fontFamily: 'impact',
                        fontSize: '43px',
                        fontWeight: 'bold'
                    },
                    subtitle: {
                        textAlign: 'center',
                        height: '100%',
                        width: '100%',
                        fontFamily: 'impact',
                        fontSize: '22px',
                    },
                    link: {
                        backgroundColor: 'red',
                        margin: 'auto',
                        borderRadius: '10px',
                        a: {
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontFamiliy: 'impact',
                            fontSize: '12px'
                        }
                    },
                },
                divider: {
                    variant: 'middle'
                },
                projectDetail: {
                    list: {
                        margin: 'auto',
                    },
                    icon: {
                        iconSize : 40,
                        margin: 'auto',
                    },
                    typography: {
                        textAlign: 'center',
                        margin: 'auto',
                        fontFamily: 'impact',
                        fontSize: '25'
                    }
                }
            },
        }
    }
}