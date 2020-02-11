import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  itemContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer} />
    </View>
  );
};

export default App;
