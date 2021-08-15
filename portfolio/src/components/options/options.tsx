import React from 'react';
import { ButtonStyled, DivStyled,LanguageImgStyled } from './options.styles';
import {Language} from '../../App';

type Props = {
    onClickLanguage: (language:Language) => void;
}
export const Options = (props: Props) => {

    return (
        <DivStyled >
            <ButtonStyled>
                Normal
            </ButtonStyled>
            <ButtonStyled>
                Pixel
            </ButtonStyled>

            <ButtonStyled onClick={() => props.onClickLanguage(Language.french)}>
                <LanguageImgStyled src={'./france.png'}/>
            </ButtonStyled>

            <ButtonStyled onClick={() => props.onClickLanguage(Language.english)}>
                <LanguageImgStyled src={'./united-kingdom.png'}/>
            </ButtonStyled>
        </DivStyled>
    );
}