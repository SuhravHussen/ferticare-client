import React, { useContext, useState } from 'react';
import './Login.css'
import SignIN from './SignIN';
import SignUp from './SignUp';
import Fade from 'react-reveal/Fade';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig '
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
const Login = () => {
  
    
    const [haveAccount , setHaveAccount] = useState(false)
    const [userInfo,  setUserInfo] = useContext(userContext)


    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleLogeIn =(email , password, FirstName)=>{
        if(haveAccount){
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setUserInfo({
                    email: userCredential.user.email
                })
                history.replace(from);
                
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);     
            });
        }if(!haveAccount){
          
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const newUserInfo ={
                    userName : FirstName,
                    email : userCredential.user.email,
                }
                setUserInfo(newUserInfo)
                history.replace(from);
            
            })
            .catch((error) => {
              var errorMessage = error.message;
              alert(errorMessage)
            });
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
             { !haveAccount && <Fade left> <SignUp handle={handleLogeIn}/> </Fade> }
             {  haveAccount && <Fade right><SignIN handle={handleLogeIn} /></Fade>  }
            </div>
            <h6 onClick={()=>setHaveAccount(!haveAccount)}> {haveAccount? 'Dont have an account?' : 'Already have an account?'}</h6>
        </div>
    );
};

export default Login;