import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const FavoriteItem = ({ favorite: { title, thumbnailUrl, url } }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: thumbnailUrl }} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={2} style={styles.url}>{url}</Text>
    </View>

  </View>
);

FavoriteItem.propTypes = {
  favorite: PropTypes.shape({
    title: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default FavoriteItem;
