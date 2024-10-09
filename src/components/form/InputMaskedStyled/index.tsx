import InputMasked from '@/components/form/InputMasked';

const sx = {
  padding: '0px',
  borderRadius: '10px',
  border: 'none',
  outline: 'none',
  width: '100%',
  backgroundColor: 'transparent',
  input: {
    backgroundColor: '#f5f5f5',
    padding: '5px 10px',
    borderRadius: '10px',
    outline: 'none',
  },
  hover: {
    borderBottom: 'none',
    outline: 'none',
    border: 'none',
  },

  fieldset: {
    borderBottom: 'none',
    outline: 'none',
    border: 'none',
  },
};
const InputMascedMUI = (props: any) => {
  return (
    <InputMasked
      {...props}
      sx={{ ...sx, opacity: `${props.isDisable ? '0.5' : '1'}` }}
    ></InputMasked>
  );
};
export default InputMascedMUI;
