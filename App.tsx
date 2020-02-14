import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, ViewStyle, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';

import ListItem from './components/ListItem';

const URL = 'https://www.reddit.com/r/newsokur/hot.json';

type Style = {
  container: ViewStyle;
};

type Article = {
  id: number;
  author: string;
  title: string;
  urlToImage: string;
  publishedAt?: string;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(URL);
        const { data } = response;
        const fetchedArticles = data.data.children.map(a => {
          const article: Article = {
            id: a.data.id,
            author: a.data.author_fullname,
            title: a.data.title,
            urlToImage: a.data.thumbnail,
          };

          return article;
        });
        setArticles(fetchedArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, []);

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
