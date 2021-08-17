import { IStyle } from './style';

export const microsoftStyle: IStyle = {
 about:{
     avatar:'hiking-pixel.jpg',
     title:{
        fontFamily:'impact',
        fontSize:'50px',
    },
    subtitle:{
        fontFamily:'impact',
        fontSize:'28px',
    },
 },
 options:{
     backgroundColor:'#f2f2f2',
     flexDirection: 'row-reverse',
     button:{
         avatar : {
             height : '30%',
             width : '30%',
         }
     }
 },
 suboptions:{
     backgroundColor:'red',
     visibility:'hidden',
 }
}