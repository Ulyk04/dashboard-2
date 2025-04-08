import React from 'react'
import { SignInPage } from '@toolpad/core'
import { AppProvider } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';

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
        />
    </div>
  )
}

export default LoginAsset