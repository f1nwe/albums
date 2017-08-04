import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import BuyButton from './BuyButtom'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const { thumbnailStyle, cardHeaderStyle, thumbnailContainerStyle, headerTextStyle, albumImageStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{uri: thumbnail_image}}
            style={thumbnailStyle}
          />
        </View>

        <View style={cardHeaderStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={albumImageStyle}
        />
      </CardSection>

      <CardSection>
        <BuyButton/>
      </CardSection>
    </Card>
  )
};

const styles = {
  cardHeaderStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 18
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },

  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};


export default AlbumDetail