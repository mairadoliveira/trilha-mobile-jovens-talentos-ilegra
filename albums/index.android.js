// Index.android.js - place coide in here for Android!!!

// Import a library to help crate a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

// Create a Component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
