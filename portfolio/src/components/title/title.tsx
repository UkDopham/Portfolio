import React from 'react';
import { TitleStyled, SubTitleStyled} from './title.styles';

type Props = {
  title: string,
  subtitle : string,
}
export const Title = (props: Props) => {

  return (
    <div>
      <TitleStyled>
        {props.title}
      </TitleStyled>

      <SubTitleStyled>
        {props.subtitle}
      </SubTitleStyled>

    </div>
  );
}
