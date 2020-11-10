
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

export const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: 375,
    padding: '0 30px',
  });

  export const MyTextField = styled(TextField)({
    background: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 40,
    padding: '0 30px',
  })

