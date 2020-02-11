import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import ListItem from './components/ListItem';

type Style = {
  container: ViewStyle;
};

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
      <ListItem
        author="SampleNews"
        imageUrl="https://picsum.photos/200/200"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
      />
    </View>
  );
};

export default App;
