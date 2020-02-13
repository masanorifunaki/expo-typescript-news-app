import React, { FC } from 'react';
import { StyleSheet, ViewStyle, FlatList, SafeAreaView } from 'react-native';

import ListItem from './components/ListItem';

import articles from './dummies/articles.json';

type Style = {
  container: ViewStyle;
};

type Article = {
  id: number;
  author: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }: { item: Article }) => (
          <ListItem
            author={item.author}
            imageUrl={item.urlToImage}
            text={item.title}
          />
        )}
        keyExtractor={(item: Article) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
