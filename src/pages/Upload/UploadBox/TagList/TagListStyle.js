import styled from 'styled-components';

export const ProductCheckList = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  position: absolute;
  width: 180px;
  top: 100px;
  right: -180px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  border-radius: 20px;
  outline: none;
  z-index: 20;
`;

export const CheckBoxList = styled.div`
  ${({ theme: { variables } }) => variables.flex('column', 'space-between')}
  font-size: 2px;
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
