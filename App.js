import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Box from './src/componentes/Box';
import { store } from './src/store/store';



//const store = createStore(turnOnOrOff)

const App = () => {
  return (
    <Provider store={ store }>
      <SafeAreaView style={{ flex: 1 }}>
        <Box color="orange" />
        <Box color="blue" />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
