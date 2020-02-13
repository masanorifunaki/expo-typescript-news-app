import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App: FC = () => {
  const items = articles.map((article: Article) => {
    const { id, author, urlToImage, title } = article;

    return (
      <ListItem key={id} author={author} imageUrl={urlToImage} text={title} />
    );
  });

  return <View style={styles.container}>{items}</View>;
};

export default App;
