import FormControl, { formControlClasses } from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useId } from 'react';

const FormControlStyled = styled(FormControl)(() => ({
  [`&.${formControlClasses.root} > label`]: {
    position: 'relative',
    color: 'inherit',
  },
  [`&.${formControlClasses.root}`]: {
    flexDirection: 'row',
    columnGap: '1.5rem',
    marginBottom: '1rem',
  },
}));

export const TextInput = ({ label, ...props }: TextFieldProps) => {
  const id = useId();
  return (
    <FormControlStyled variant="standard">
      <InputLabel color="info" htmlFor={id}>
        {label}
      </InputLabel>
      <TextField id={id} {...props} />
    </FormControlStyled>
  );
};
