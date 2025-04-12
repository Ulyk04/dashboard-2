import React from 'react'
import { SignInPage } from '@toolpad/core/SignInPage'
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import './LoginStyle.css'

const providers = [{id: 'credentials' , name: 'Email and password'}]

const SignIn = async(provider , formData) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            alert(
                'Sign in with you password and email'
            );
            resolve();
        } , 300);
    });
    return promise
};

const LoginAsset = () => {
    
  return (
    <div>
        <SignInPage
            signIn={SignIn}
            providers={providers}
            slotProps={{ emailField: {autoFocus: false} , form: {noValidate: true} }}
            sx={{position: 'relative' , left: '5%'}}
        />
    </div>
  )
}

export default LoginAsset
