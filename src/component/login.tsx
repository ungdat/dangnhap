import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
export default function Login(){
    const [{mail,password}, setCredentials]= useState({
        mail: '',
        password: ''
    })
    const [alert , setAlert] = useState(false)
    const [err , setErr] = useState(false)
    const [open, setOpen] = useState(false)
    const login =( event: React.FormEvent)=>{
        event.preventDefault();
        console.log(mail);
        console.log(password);
        if(mail === "admin@gmail.com" && password === "admin1"){
            setAlert(true)
            setErr(false)
            setOpen(true)
        }else{
            setAlert(false)
            setErr(true)
            setOpen(true)
        }
    }
    return(
        <Container component="main" maxWidth="xs">
            {alert?(<Dialog onClose={()=>{setOpen(false)}} open={open}>
      <DialogTitle>Đăng nhập thành công nhó ^^</DialogTitle> </Dialog>):(<></>)}
            {err?(<Dialog onClose={()=>{setOpen(false)}} open={open}>
      <DialogTitle>Lỗi rồi!!! Bạn chưa nhập hoặc nhập sai</DialogTitle> </Dialog>):(<></>)}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box onSubmit={login} component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={mail} onChange={(event)=> setCredentials({mail: event.target.value, password})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} onChange={(event)=> setCredentials({mail, password: event.target.value,})}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    )
}