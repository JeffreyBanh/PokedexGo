import React, {useState} from 'react'
import auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';

import { 
    Container, 
    FormWrap, 
    Icon, 
    FormContent, 
    Form, 
    FormH1, 
    FormLabel, 
    FormInput, 
    FormButton, 
    Text,} from './signinElements';

import { useNavigate } from 'react-router';

// function SignupForm(){
//     let navigate = useNavigate();

//     async function handleSubmit(event){
//         event.preventDefault();
//         await submitForm(event.target);
//         navigate("/pokedexgo", {replace: true});
//     }

//     return <form onSubmit= {handleSubmit}>{}</form>
//     }

const Signin = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/pokedexgo">Pokedex Go</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <FormInput 
                        type='text' 
                        // placeholder = 'Your username'
                        name = 'username'
                        // onChange = {handleInputChange}
                        // value = {userFormData.username}
                        required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>submit</FormButton>
                        <Text to = '/signup'>Don't have an Account?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin