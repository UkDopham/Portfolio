import React from 'react';
import { TitleStyled } from './title.styles';

type Props = {
  title: string
}
export const Title = (props: Props) => {

  return (
      <TitleStyled>
        {props.title}
      </TitleStyled>
  );
}
