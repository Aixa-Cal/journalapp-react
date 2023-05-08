import { Button, Grid, TextField, Typography, Link} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hook/useForm';


const formData = {
  email: 'rafa@gmail.com',
  password: '5655055',
  displayName: 'Rafa Arias',
}

export const RegisterPage = () => {

  const {email, password, onInputChange, displayName, formState} = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }


  return (
    <AuthLayout title="Create account">
      <form onSubmit={onSubmit}>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Name" 
                type="text" 
                placeholder='Name' 
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Email" 
                type="email" 
                placeholder='email@google.com' 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Password" 
                type="password" 
                placeholder='Password' 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button variant='contained' fullWidth type='submit'>
                  Create account
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Already have an account?</Typography>
              <Link component={RouterLink} to='/auth/pages/login' color='inherit'>Login</Link>

            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}