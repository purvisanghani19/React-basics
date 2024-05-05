import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


    const defaultTheme = createTheme();

    const obj = {
        email: "",
        password: ""
    }

    const [logindata, setLogin] = useState(obj);

    const navigate = useNavigate();

    // console.log('email', logindata);

    const loginchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...logindata, [name]: value });
    }

    const validation = () => {
        if (logindata.email === "") {
            toast.error("please enter email.....");
            return false
        }
        if (logindata.password === '') {
            toast.error("please enter password.....");
            return false
        }
        return true;
    }



    const logindone = async (e) => {
        e.preventDefault();
        if (validation()) {

            await axios.post("https://reqres.in/api/login", logindata)
                .then((res) => {
                    console.log('res', res);
                    toast.success("login Successfully...", {
                        autoClose: 3000, // Adjust duration (in milliseconds)
                        position: "top-right", // Adjust position
                        onClose: () => {
                            navigate("/registration");
                        }
                    });
                    localStorage.setItem('loginDetail', JSON.stringify(res.data));
                })
                .catch((err) => {
                    toast.error("oppes !!");
                })
            setLogin(obj)
        }
    }



    return (
        <>
            <Container component="main" maxWidth="xs">
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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="email Address"
                            name="email"
                            value={logindata.email}
                            onChange={loginchange}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={logindata.password}
                            onChange={loginchange}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={logindone}
                        >
                            Sign In
                        </Button>
                        <Grid container>

                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

            <ToastContainer style={{ marginTop: "50px" }} />

        </>
    )
}

export default Login;
