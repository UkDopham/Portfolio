import React from 'react';
import { ButtonStyled, DivStyled } from './options.styles';

type Props = {
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

            <ButtonStyled>
                French
            </ButtonStyled>

            <ButtonStyled>
                English
            </ButtonStyled>
        </DivStyled>
    );
}