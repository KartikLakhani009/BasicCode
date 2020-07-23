import  React,{useState,useEffect, useCallback} from 'react';
import { View, Text, StyleSheet ,TextInput, TouchableOpacity} from 'react-native';

import Logo from '../component/AppLogoFun'
import AppStyle from '../config/AppStyle'

import { login} from '../actions/DemoEmailVerify';
import { useDispatch, connect} from 'react-redux';

function LoginPractice(props) {

  const [email,setEmail] = useState('');

  const [suggest,setsuggestion] = useState(null);  
 

  const dispatch = useDispatch();
  // console.log("Para : ",props);


  useEffect(()=>{
    const  { UserData : {error,errorStatus,isEmail},navigation:{navigate}} = props;
  
    if(errorStatus==true)
    {
      setsuggestion('Enter the valid password used within BasicCode Complaince');
    }
    else if(isEmail == true){
      navigate("Home");
    }
  
    },[suggest]);


    return (
      <View style={{ flex: 1,backgroundColor:AppStyle.COLOR.WHITE}}>
       <Logo logoStyle= {[styles.logoView,{broderWidth:2}]} />
       <View style={styles.emailView}>
          <TextInput placeholder="Enter your email" 
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          value={email} onChangeText={text=>setEmail(text)} style={styles.emailInput} />
          <Text>This is practices screen</Text>
          <TouchableOpacity style={styles.nextBtn} onPress={() =>
          dispatch(login({'email':email}))}>
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
  
const mapStateToProps = state => {
  return {
    UserData: state.USERSTORE,
  };
};

export default connect(mapStateToProps,null)(LoginPractice);
// export default LoginPractice;


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