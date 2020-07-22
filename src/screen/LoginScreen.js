import  React,{useState} from 'react';
import { View, Text, StyleSheet ,TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Logo from '../component/AppLogoFun'
import AppStyle from '../config/AppStyle'

import API from '../lib/API/index'
import { VERIFY_EMAIL_PATH } from '../config/GlobalStatics'

function LoginScreen(props) {

  const [email,setEmail] = useState('');

  const [suggest,setsuggestion] = useState(null);  
 
  // console.log("Para : ",props);

  const verifyEmail = async()=>{
    let data = {"email":email};
    
    const { navigation } = props;

    await API(VERIFY_EMAIL_PATH,data,'post',null)
    .then(json=>{
      let email = json.json;    
      console.log("email :",email);
      if(email.IsPresent == true)
      { 
        console.log("Login Succesfully");
        navigation.navigate('PasswordScreen',{email});
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


    return (
      <View style={{ flex: 1,backgroundColor:AppStyle.COLOR.WHITE}}>
       <Logo logoStyle= {[styles.logoView,{broderWidth:2}]} />
       <View style={styles.emailView}>
        <TextInput placeholder="Enter your email" 
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        value={email} onChangeText={text=>setEmail(text)} style={styles.emailInput} />
        <TouchableOpacity style={styles.nextBtn} onPress={verifyEmail}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        {suggest != null?(
        <View style={styles.suggestView}>
          <Text style={styles.suggestText}>{suggest}</Text>
        </View>):null
        }
        </View>
        
      </View>
    );
}
  

export default LoginScreen;


const styles = StyleSheet.create({  
  logoView:{   
      // flex:1,     
      alignItems: 'center',      
      top:'5%'       
  },
  emailInput:{
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
    width:80,
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
  nextText:{
    flex:1,
    color:'#fff',
    justifyContent:'center',
    alignItems:'center',
    marginTop:8,
    fontSize:AppStyle.fontSizeH3,
        
  },
  emailView:{
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