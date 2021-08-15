import React from 'react';
import { Title } from '../title/title';
import { Language } from '../../App';
import { getTranslation } from '../../utils/translation/translation';

type Props = {
  language: Language
}

export const About = (props: Props) => {
  const language = props.language;

  return (
    <div style={{
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <Title title={getTranslation(language).title}
        subtitle={getTranslation(language).subtitle} />

      <img src={'hiking.jpg'}
        style={{
          width: '20%',
          height: '20%',
          borderRadius: 200,
        }} />
    </div>
  );
}