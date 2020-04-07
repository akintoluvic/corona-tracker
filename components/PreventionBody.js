import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const PreventionBody = () => {
  return (
    <View  style={styles.container}>
        
        <Text style={styles.body}>
            Those who are infected with COVID-19 may have little to no symptoms. You may not know you have symptoms of COVID-19 because they are similar to a cold or flu.
        </Text>
        <Text style={styles.body}>
            Symptoms may take up to 14 days to appear after exposure to COVID-19. This is the longest known incubation period for this disease. We are currently investigating if the virus can be transmitted to others if someone is not showing symptoms. While experts believe that it is possible, it is considered less common.
        

        </Text>
        <Text style={styles.body}>
            Symptoms have included:
            - cough
            - fever
            - difficulty breathing
            - pneumonia in both lungs
            - In severe cases, infection can lead to death.
        </Text>    
        <Text style={styles.body}>
            Think you might have COVID-19?
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    body: {
        fontFamily: 'Roboto',
        color: '#7B819B',
        fontSize: 14,
        marginBottom: 10,
    },
});

export default PreventionBody;
