import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from "react-native";
import LoginBackground from '../../assets/Images/LoginBackground.jpg';
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomInput/CustomButton/CustomButton.js';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

   
    const [email, setEmail] = useState('');

    const win = Dimensions. get('window');
    const navigation = useNavigation();
    const onSendPressed = () =>{
      //  console.warn("onSendPressed");
        navigation.navigate('NewPassword');
    }
    const onSignInPress = () =>{
      //  console.warn("onSignInPress");
        navigation.navigate('SignIn');
    }
  return (
    <ScrollView>
        <ImageBackground source={LoginBackground}  style={styles.image}>
            <View style={styles.root}> 
                
                <Text style={styles.Title}>Reset Your Password</Text>
                    <CustomInput 
                        placeholder="Email" 
                        value={email} 
                        setValue={setEmail}
                        secureTextEntry
                        />
                    
                    <CustomButton onPress={onSendPressed} text="Send" />  
                    <CustomButton onPress={onSignInPress} text="Back to Sign in"  type ="TERTIARY"/> 
 
            </View>
        </ImageBackground>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginBottom: 300,
        height: 460,
        
    },
    Text: {
        height: 160,
        fontSize: 25,
        marginTop: 120,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height:900,
        width:null,
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        height: 40,
        marginTop: 130,
    }
    
});
export default ForgotPasswordScreen