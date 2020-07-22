import React,{useState} from 'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Logo from '../component/AppLogoFun'
import AppStyle from '../config/AppStyle'

import API from '../lib/API/index'
import { VERIFY_PASS_PATH } from '../config/GlobalStatics'



function PasswordScreen(props) {

  const [password,setpassword] = useState('');

  const [suggest,setsuggestion] = useState(null);

  console.log("Password Para : ", props);

  const verifypassword = async()=>{
    const { navigation:{navigate},route:{ params:{email:{Username}}} } = props;

    // console.log("email testing : ",Username);
    const data = {"password":password,"UserName":Username};
    console.log("data L: ",data);
    await API(VERIFY_PASS_PATH, data, 'post', null).then(
      json=>{
        console.log("data form pass :", json);

      }
    ).catch(e=>{
      console.log("Error form Password : ", e);
      setsuggestion('Enter the valid password used within BasicCode Complaince');
    })
    
  }

    return (
      <View style={{ flex: 1,backgroundColor:AppStyle.COLOR.WHITE}}>
       <Logo logoStyle= {[styles.logoView,{broderWidth:2}]} />
       <View style={styles.passwordView}>
        <TextInput placeholder="Enter your password" 
        // keyboardType={'visible-password'}
        secureTextEntry={true}
        autoCapitalize={'none'}
        value={password} onChangeText={text=>setpassword(text)} style={styles.passwordInput} />
        <View style={{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={[styles.nextBtn,{marginRight:100}]} 
          onPress={()=>props.navigation.goBack()}
        >
          <Text style={styles.nextText}>Back</Text>
        </TouchableOpacity>
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
  

export default PasswordScreen;

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