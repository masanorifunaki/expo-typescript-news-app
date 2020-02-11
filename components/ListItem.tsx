import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
  TextStyle,
} from 'react-native';

interface Style {
  itemContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
  subText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1, // 描画可能なエリアを目一杯使う
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 8,
    color: 'gray',
  },
});

const ListItem: FC = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/200/200',
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.subText}>ReactNews</Text>
      </View>
    </View>
  );
};

export default ListItem;
