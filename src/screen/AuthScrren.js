import React,{useState,useEffect} from 'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Logo from '../component/AppLogoFun'
import AppStyle from '../config/AppStyle'

import API from '../lib/API/index'
import { VERIFY_EMAIL_PATH } from '../config/GlobalStatics'

import WithUser from '../hoc/WithUser'

function AuthScreen(props) {

  const [value,setvalue] = useState('');
//   let authType = props.userData == null?"Login":"Password";
  const [authType,setAuth] = useState(props.userData != null?true:false);

  const [suggest,setsuggestion] = useState(null);

//   console.log("auth Para : ", props);


  let UserName = null;

//   useEffect(()=>{
//   const  { UserData : {error,errorStatus}} = props;

//   if(errorStatus==true)
//   {
//     setsuggestion('Enter the valid password used within BasicCode Complaince');
//   }

//   },[suggest]);

    useEffect(()=>{
        if(authType==false)
        {
            
        }
    },[authType])

  const verifypassword = async()=>{

    const { navigation:{navigate}, VerifyPassReq, UserData } = props;

        if(authType == false)
        {
            let data = {"email":value}; 

            await API(VERIFY_EMAIL_PATH,data,'post',null)
            .then(json=>{
              let email = json.json;    
            //   console.log("email :",email);
              if(email.IsPresent == true)
              { 
                console.log("Login Succesfully");
                UserName = value;
                setvalue('');
                setAuth(true);
              }
              else{
                console.log("Seuggetion : ", suggest);
                setsuggestion('Enter the email address used within BasicCode Complaince');
              }
            })
            .catch(e=>{
              console.log("Verify Email Erorr: ",e);
              setsuggestion('Enter the email address used within BasicCode Complaince');
          })
        }
        else{
            const data = {"password":value,"UserName":UserName};
            console.log("data L: ",data);

            // const a  = VerifyPassReq(data);
            console.log(" a : ",a );
            if(UserData.errorStatus == true)
            {
                 setsuggestion('Enter the valid password used within BasicCode Complaince');
            }
            else{
                  navigate("Home");
            }    
        }
   }

   const resetAuth = ()=>{
       setvalue('');
       setAuth(false);
   }

    return (
      <View style={{ flex: 1,backgroundColor:AppStyle.COLOR.WHITE}}>
       <Logo logoStyle= {[styles.logoView,{broderWidth:2}]} />
       <View style={styles.passwordView}>
        {authType == true?(<TextInput placeholder="Enter your password" 
        // keyboardType={'visible-password'}
        secureTextEntry={true}
        autoCapitalize={'none'}
        value={value} onChangeText={text=>setvalue(text)} style={styles.passwordInput} />)
        :( <TextInput placeholder="Enter your email" 
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        value={value} onChangeText={text=>setvalue(text)} style={styles.passwordInput} />)}
       
        <View style={{flexDirection:'row'}}>
       
       {authType == true ?( <TouchableOpacity style={[styles.nextBtn,{marginRight:100}]} 
          onPress={()=>resetAuth}
        >
          <Text style={styles.nextText}>Back</Text>
        </TouchableOpacity>):null}
        <TouchableOpacity style={styles.nextBtn} onPress={verifypassword}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        </View>
        {suggest != null?(
        <View style={styles.suggestView}>
          <Text style={styles.suggestText}>{suggest}</Text>
        </View>):null
        }
        </View>
        
      </View>
    );
}
  

export default WithUser(AuthScreen);

const styles = StyleSheet.create({  
  logoView:{   
      // flex:1,     
      alignItems: 'center',      
      top:'5%'       
  },
  passwordInput:{
    borderWidth:2,   
    alignItems:'center',
    width:'80%',
    borderRadius:5,
    borderColor:AppStyle.COLOR.GREY_DARK,
    paddingHorizontal: 15,
  },
  nextBtn:{
    marginTop:'5%',    
    backgroundColor:AppStyle.COLOR.windowsBlue,
    width:70,
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  nextText:{
    flex:1,
    color:'#fff',
    justifyContent:'center',
    alignItems:'center',
    marginTop:8,
    fontSize:AppStyle.fontSizeH3_4,
        
  },
  passwordView:{
    flex:1,
    alignContent:'center',
    alignItems:'center',
    marginTop:'20%',
  },
  suggestView:{
    backgroundColor:AppStyle.COLOR.GREY_LIGHT,
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    marginTop:'15%',   
    height:60,
  },
  suggestText:{
    color:AppStyle.COLOR.BLACK_OFF,
    // marginTop:5,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:12
  }
});