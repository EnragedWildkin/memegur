import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import colors from '../themes/Colors';

import PostShowHeader from '../components/PostShowHeader';

const styles = {
  container: {
    backgroundColor: colors.mainBackground,
  },
};

export default class PostShowComponent extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <PostShowHeader />
        <ScrollView />
      </Container>
    );
  }
}
