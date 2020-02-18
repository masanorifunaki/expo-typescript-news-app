import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

type Style = {
  itemContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
  subText: TextStyle;
};

type ListItemProps = {
  author: string;
  imageUrl: string;
  text: string;
  onPress: () => void;
};

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

const ListItem: FC<ListItemProps> = props => {
  const { author, imageUrl, text, onPress } = props;

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {text}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
