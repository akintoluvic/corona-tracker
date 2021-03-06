import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    StatusBar,
    Alert,
  } from 'react-native';
import { GlobalContext } from '../context/GlobalState';

const SignUp = ({ navigation }) => {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const { registerUser } = useContext(GlobalContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scroll}>
        <Image source={require('../images/logo.png')} />
      </View>
      <View style={styles.scrol}>
          <Text style={{...styles.text, ...styles.white}}>
            User  Registration
          </Text>
          <View style={styles.form}>
              <TextInput
                placeholder='Firstname'
                style={styles.input}
                onChangeText={textValue => setFirstname(textValue)}
              />
              <TextInput
                placeholder='Lastname'
                style={styles.input}
                onChangeText={textValue => setLastname(textValue)}
              />
              <TextInput
                placeholder='Username or phone number'
                style={styles.input}
                onChangeText={textValue => setUser(textValue)}
              />
              <TextInput
                placeholder='Password'
                style={styles.input}
                onChangeText={textValue => setPassword(textValue)}
              />
              <TextInput
                placeholder='Confirm password'
                style={styles.input}
                onChangeText={textValue => setConfirmPassword(textValue)}
              />
              <TouchableOpacity 
                style={styles.btn}
                onPress={()=> navigation.navigate('Home')}
              >
                <Text style={styles.btnText}>
                    SignUp
                </Text>
              </TouchableOpacity>
              <Text style={{...styles.text, ...styles.dark}}
                onPress={()=> navigation.navigate('Login')}
              >
                  Login instead
              </Text>
          </View>
          
      </View>
      
                    
                    

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4B5EB2',
    },
    scroll: {
      flex: 1,
      paddingTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 53,
      padding: 53,
    },
    form: {
      paddingLeft: 25,
      paddingRight: 25,
      backgroundColor: '#E4E9F5',
      marginTop: 25,
      paddingTop: 35,
      paddingBottom: 35,
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35
    },
    input: {
        color: '#7B819B',
        backgroundColor: '#F4F7FF',
        borderRadius: 15,
        marginBottom: 15,
        paddingTop: 17,
        paddingBottom:17,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    btn: {
        backgroundColor: '#F68D4B',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 28,
    },
    btnText: {
        padding: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    dark: {
        color: '#7B819B',
    },
    white: {
        color: '#fff'
    }
  });

export default SignUp;
