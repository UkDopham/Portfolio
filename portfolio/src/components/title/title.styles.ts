import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const TitleStyled = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: black;
  font-family: system-ui;
`;

export const SubTitleStyled = styled(TitleStyled)`
  font-size: 1.5em;
  color : #191919;
  font-weight: lighter;
`;
