import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Index from './Home';
import Spacing from './Home/spacing';


function App () {
  return(
    <>
      <Index/>
      <Spacing/>
    </>
  )
}
export default App;



