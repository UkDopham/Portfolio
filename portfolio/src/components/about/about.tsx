import React from 'react';
import { Title } from '../title/title';
import {Language} from '../../App';
import {getTranslation} from '../../utils/translation/translation';

type Props = {
  language: Language
}

export const About = (props: Props) => {
  const language = props.language;

  return (
    <div>
      <Title title={getTranslation(language).title}/>
    </div>
  );
}