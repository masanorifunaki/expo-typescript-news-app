import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle, Image, ImageStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  itemContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  image: ImageStyle;
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
    flexDirection: 'row',
  },
  leftContainer: {
    backgroundColor: 'red',
    width: 100,
  },
  rightContainer: {
    backgroundColor: 'blue',
    flex: 1, // 描画可能なエリアを目一杯使う
  },
  image: {
    width: 100,
    height: 100,
  },
});

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://picsum.photos/200/200',
            }}
          />
        </View>
        <View style={styles.rightContainer} />
      </View>
    </View>
  );
};

export default App;
