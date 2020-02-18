import React, { FC } from 'react';
import { StyleSheet, ViewStyle, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute, RouteProp } from '@react-navigation/native';

// eslint-disable-next-line import/no-cycle
import { RootStackParamList } from '../navigation/AppNavigator';

type Style = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

const ArticleScreen: FC = () => {
  const route = useRoute<ArticleScreenRouteProp>();
  const { url } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
};

export default ArticleScreen;
