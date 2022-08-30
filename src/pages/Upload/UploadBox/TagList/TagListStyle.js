import styled from 'styled-components';

export const ProductCheckList = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  padding: 15px;
`;

export const CheckList = styled.div`
  ${({ theme: { variables } }) => variables.flex()}
  font-size: 2px;
`;

export const SerchCategory = styled.button`
  height: 60px;
  width: 40px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme: { style } }) => style.basicRed};
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  font-size: 25px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { style } }) => style.hoverRed};
  }
  &:active {
    background-color: ${({ theme: { style } }) => style.basicRed};
  }
`;

export const CheckBoxList = styled.div`
  ${({ theme: { variables } }) => variables.flex('column', 'space-between')}
`;

export const CheckBoxs = styled.div`
  ${({ theme: { variables } }) => variables.flex('', 'space-between')}
  width: 100%;
  margin: 3px 20px;
`;

export const CheckBox = styled.input`
  margin: 3px 12px;
`;

export const TagesTitle = styled.span`
  margin: 2px 0px;
`;
