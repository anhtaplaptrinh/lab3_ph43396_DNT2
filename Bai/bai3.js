import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, FlatList, Image } from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Bai3 = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true },
  );

  const headerHeightInterpolate = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [150, 50],
    extrapolate: 'clamp',
  });

  const headerStyle = {
    height: headerHeightInterpolate,
  };

  const logoOpacityInterpolate = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const logoStyle = {
    opacity: logoOpacityInterpolate,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image
          style={[styles.logo, logoStyle]}
          source={{
            uri: 'https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg',
          }}
        />
      </Animated.View>
      <Text style={styles.fixedText}>Trang Chủ</Text>
      <View style={styles.tags}>
        <Text style={styles.tag}>Popular</Text>
        <Text style={styles.tag}>Product Design</Text>
        <Text style={styles.tag}>Development</Text>
        <Text style={styles.tag}>Project File</Text>
      </View>
      <Animated.View style={styles.listContainer}>
        <Text style={styles.listHeader}>Popular</Text>
        <AnimatedFlatList
          contentContainerStyle={styles.scrollViewContent}
          scrollEventThrottle={16}
          onScroll={handleScroll}
          data={[
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
            'Item 5',
            'Item 6',
            'Item 7',
            'Item 8',
            'Item 9',
            'Item 10',
            'Item 11',
            'Item 12',
            'Item 13',
            'Item 14',
            'Item 15',
            'Item 16',
            'Item 17',
            'Item 18',
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#64b5f6',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  tags: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  tag: {
    marginRight: 10,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: 'violet',
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingTop: 5,
    height: 750,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,
    color: '#333',
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'cyan',
    color: '#333',
  },
  fixedText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#64b5f6',
    fontSize: 16,
    paddingLeft: 20,
    color: 'black',
  },
});

export default Bai3;
