/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);



// /**
//  * @format
//  */
// import React, { useState } from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import { GlobalProvider } from './context/GlobalState';


// AppRegistry.registerComponent(appName, 
//     () => <GlobalProvider>{App}</GlobalProvider> 
// );
