import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import "./Auth.css";

const Signup = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  return (
    <div className='space-y-5'>
      <Typography variant="h4" color="white">Register</Typography>
      <form className="space-y-5">
        <Box>
          <TextField
            {...form.register('fullName')}
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
        </Box>
        <Box>
          <TextField
            {...form.register('email')}
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
        </Box>
        <Box>
          <TextField
            {...form.register('password')}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, fontWeight: 'bold', fontSize: '18px' }}
        >
          
          Register
        </Button>
      </form>
    </div>
  );
}

export default Signup;
