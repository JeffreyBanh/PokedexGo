import React, { useState } from 'react'
import auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations'

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
    Text
} from './signupElements';

// import { useNavigate } from 'react-router';

// function SignupForm(){
//     let navigate = useNavigate();

//     async function handleSubmit(event){
//         event.preventDefault();
//         await submitForm(event.target);
//         navigate("/pokedexgo", {replace: true});
//     }

//     return <form onSubmit= {handleSubmit}>{}</form>
//     }

const SignUp = () => {

    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // define mutation for adding a user
    const [createUser] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createUser({
                variables: { ...userFormData }
            });

            auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <Container>
            <FormWrap>
                <Icon to="/pokedexgo">Pokedex Go</Icon>
                <FormContent>
                    <Form validated={validated} onSubmit={handleFormSubmit}>
                        <FormH1>Sign up an account</FormH1>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <FormInput 
                        type='text' 
                        name = 'username'
                        onChange = {handleInputChange}
                        value = {userFormData.username}
                        required />
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput 
                        type='email' 
                        name = 'email'
                        onChange = {handleInputChange}
                        value = {userFormData.email}
                        required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput 
                        type='password'
                        name = 'password'
                        onChange = {handleInputChange}
                        value = {userFormData.password} 
                        required />
                        <FormButton 
                        type='submit'
                        disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                        variant='success'
                        to='/pokedexgo'
                        >submit</FormButton>
                        <Text to='/signin'>Already have an account?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignUp