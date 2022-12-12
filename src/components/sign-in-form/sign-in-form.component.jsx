import './sign-in-form.styles.scss';

import { useState } from "react";

import {createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopUp} from '../../utils/firebase/firebase.utils.js';

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    email:'',
    password:'',
};

const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

    const resetFormField = () => {
      setFormFields(defaultFormFields);
    };

    const signInWithGoogleHandler = async () => {
     const {user} = await signInWithGooglePopUp();
     await createUserDocumentFromAuth(user);
    }

    const onSubmitHandler = async (e) => {
     e.preventDefault();

     try{
      const response = await signInAuthUserWithEmailAndPassword(email,password);
      console.log(response);
      resetFormField();
     }catch(err){
       console.log(err.message);
    }
    };

    const onChangeHandler = (e) => {
      const {name,value} = e.target;
      setFormFields({...formFields,[name]:value})
    };

    return (
        <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={onSubmitHandler}>
          
          <FormInput label='Email' type='email' name='email' value={email} onChange={onChangeHandler}/>

          <FormInput label='Password' type='password' name='password' value={password} onChange={onChangeHandler}/>

          <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogleHandler}>
            Google sign in
          </Button>
        </div>

        </form>
        </div>
    )
}
export default SignInForm;