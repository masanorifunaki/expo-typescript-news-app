import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import ListItem from './components/ListItem';

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
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
      <ListItem />
    </View>
  );
};

export default App;
