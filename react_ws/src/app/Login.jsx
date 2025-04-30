import { use, useState } from 'react';
import { Box, Button, TextField, Typography, Alert, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({userId, pwd : password})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      localStorage.setItem("token", data.token);
      navigate("/feed");
    })

    setError('');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="#f9fafb">
      <Paper elevation={3} sx={{ p: 4, width: 320, borderRadius: 2 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            fullWidth
          />
          <TextField
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            로그인
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;