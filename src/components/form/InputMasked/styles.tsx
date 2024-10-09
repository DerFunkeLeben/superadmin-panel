import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
  width: 100%;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0px;
  background-сolor: transparent;
  &:before: {
    border-bottom: none;
  }
  &:after: {
    border-bottom: none;
  }
  &:hover: {
    border-bottom: none;
  }
  .MuiOutlinedInput-input {
    background-color: #f5f5f5;

    padding: 5px 10px;
  }
  .MuiFormHelperText-root {
    color: #ff0000;
  }
`;
