import { IStyle } from './style';

export const appleStyle: IStyle = {
 about:{
     avatar:'hiking.jpg',
     title:{
         fontFamily:'SF Pro Text',
         fontSize:'32px',
     },
     subtitle:{
         fontFamily:'SF Pro Rounded',
         fontSize:'22px',
     },
 },
 options:{
     backgroundColor:'#323333',
     flexDirection: 'row',
     button:{
         avatar : {
             height : '15%',
             width : '15%',
         }
     }
 },
 suboptions:{
     backgroundColor:'#f6f5f7',
     visibility:'visible',
 }
}