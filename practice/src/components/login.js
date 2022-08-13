import React from 'react';
import{ Avatar, Button, Grid, Paper, TextField, Typography,Link }from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';

export const LoginPage = () =>
{
const paperStyle = {padding :20,height:'70vh', width:280, margin:"20px auto"}
const avtarStyle = {backgroundColor:'#00807d'}
const btstyle={margin:'8px 0'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style ={avtarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' placeholder='username' fullWidth required/>
            <TextField label='Password' placeholder='password' type='password' fullWidth required/>
            <FormControlLabel
                control=
                {
                <Checkbox
                name="checked"
                color='primary'
                />
                }
                label="Remember me"
            />
            <Button type='submit' color='primary' variant='contained' style={btstyle} fullWidth>Sign in</Button>
            <Typography>
                <Link href='0'>
                    forgot password ?
                </Link>
            </Typography>
            <Typography> Do you have account ?
                <Link href='0'>
                    Sign Up
                </Link>
            </Typography>


            </Paper>
        </Grid>
    )
}