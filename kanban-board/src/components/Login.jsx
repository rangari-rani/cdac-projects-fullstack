import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="space-y-5">
      <Typography variant="h4" color="white">Login</Typography>
      <form className="space-y-5" onSubmit={form.handleSubmit(data => console.log(data))}>
        <Box>
          <TextField
            {...form.register('email')}
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            className="text-white"
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
            className="text-white"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, fontWeight: 'bold', fontSize: '18px' }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
