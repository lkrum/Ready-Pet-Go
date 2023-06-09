import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "@mui/material";

const getFormNotValidMessage=()=>{
  return 'Please enter a valid email and/or password'
}
const getFormValidMessage=()=>{
  return 'Click to log in!'
}
export default function LoginPageFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () =>{
    navigate('/register')
  };
  return (
    <>
    <Tooltip
      title={!isFormValid ? getFormNotValidMessage(): getFormValidMessage()}
      >
      <div>
        <PrimaryButton
          label="login"
          additionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      </Tooltip>
      <RedirectInfo 
      text='Want an account? '
      redirectText='Create an account'
      additionalStyles={{marginTop: '5px'}}
      redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}