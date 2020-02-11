import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 100,
          width: '100%',
          borderColor: 'gray',
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default App;
