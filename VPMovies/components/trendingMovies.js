import React from 'react'
import { View, Text, Dimensions, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import {useNavigation} from'@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';

var { widht, height} = Dimensions.get('window');

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <Image
        source={require('../assets/images/moviePosater1.jpg')}
        style={{ width: '100%', height: '100%' }}
        className="rounded-2xl"
      />
    </TouchableOpacity>
  );
};

export default function TrendingMovies({data}) {
    const navigation = useNavigation();
    const handleClick = (item) => {;
        navigation.navigate('Movie', item);
    }
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-3" >Em alta</Text>
    <Carousel
      loop
      width={width*0.6}
      height={height*0.4}
      autoPlay={false}
      data={data}
      renderItem={(item) => <MovieCard item={item} handleClick={handleClick} />}
      mode='parallax'
      modeConfig={{
        parallaxScrollingScale: 1,
        parallaxScrollingOffset: 1,
        parallaxAdjacentItemScale: 0.9,
      }}
      style={{width:width, justifyContent: 'center'}}
    />
    </View>
  )
}