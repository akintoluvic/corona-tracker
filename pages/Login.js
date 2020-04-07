import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
  } from 'react-native';
  import TopNav from '../components/TopNav';
import PreventionHeader from '../components/PreventionHeader';
import PreventionBody from '../components/PreventionBody';
import References from '../components/References';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scroll}>
      </View>
      <View style={styles.scrol}>
          <Text style={styles.text}>
            User  Registration
          </Text>
          <View style={styles.form}>
              <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{ }}
              >
                <Text style={styles.btnText}>
                    LOGIN
                </Text>
              </TouchableOpacity>
              <Text style={styles.text}>
                  New User? Sign Up here
              </Text>
          </View>
          
      </View>
      
                    
                    

    </SafeAreaView>
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
        color: '#7B819B',
        textAlign: 'center',
    }
  });

export default Login;
