import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './signinElements';
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
                        <FormLabel htmlFor='for'>Username</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        {/* <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required /> */}
                        <FormButton type='submit' >submit</FormButton>
                        <Text to = '/Signup'>Don't have an Account?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin