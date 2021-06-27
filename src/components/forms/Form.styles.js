import styled from 'styled-components/macro';

export const Form = styled.form`
  max-width: 448px;
  display: flex;
  border-radius: 5px;
  padding: 20px;
  flex-direction: column;
  min-width: 250px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

export const FormHeading = styled.h2``;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 10px;
`;
