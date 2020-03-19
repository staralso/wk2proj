import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import albumData from "../json/albums";

const AlbumList = () => {
return (
<ScrollView>
<View style={styles.container}>
<View style={styles.cardStyle}>
    <View style={[styles.frameStyle, styles. titleStyle]}>
        <Image  
          style={styles.thumbnailStyle}
          source={{uri: albumData[0].image}}/>
        <View style={styles.headerStyle}>
          <Text >{albumData[0].name}</Text>
          <Text>{albumData[0].singer}</Text>
        </View>
        <View style={styles.likeStyle}>
          <Text >{albumData[0].like}</Text>
        </View>
      </View>
      <View style={styles.albumsStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri:albumData[0].image2}}/>
        </View>
      </View>
      
      <View style={styles.cardStyle}>
      <View style={[styles.frameStyle, styles. titleStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: albumData[1].image}}/>
          <View style={styles.headerStyle}>
            <Text>{albumData[1].name}</Text>
            <Text>{albumData[1].singer}</Text>
          </View>
          <View style={styles.likeStyle}>
          <Text >{albumData[1].like}</Text>
        </View>
        </View>
        <View style={styles.albumsStyle}>
            <Image
              style={styles.imageStyle}
              source={{uri:albumData[1].image2}}/>
          </View>
        </View>
        
        <View style={styles.cardStyle}>
        <View style={[styles.frameStyle, styles. titleStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri: albumData[2].image}}/>
            <View style={styles.headerStyle}>
              <Text>{albumData[2].name}</Text>
              <Text>{albumData[2].singer}</Text>
            </View>
            <View style={styles.likeStyle}>
          <Text >{albumData[2].like}</Text>
        </View>
          </View>
          <View style={styles.albumsStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri:albumData[2].image2}}/>
            </View>
          </View>
          
          <View style={styles.cardStyle}>
        <View style={[styles.frameStyle, styles. titleStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri: albumData[3].image}}/>
            <View style={styles.headerStyle}>
              <Text>{albumData[3].name}</Text>
              <Text>{albumData[3].singer}</Text>
            </View>
            <View style={styles.likeStyle}>
          <Text >{albumData[3].like}</Text>
        </View>
          </View>
          <View style={styles.albumsStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri:albumData[3].image2}}/>
            </View>
          </View>
         
          <View style={styles.cardStyle}>
        <View style={[styles.frameStyle, styles. titleStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri: albumData[4].image}}/>
            <View style={styles.headerStyle}>
              <Text>{albumData[4].name}</Text>
              <Text>{albumData[4].singer}</Text>
            </View>
            <View style={styles.likeStyle}>
          <Text >{albumData[4].like}</Text>
        </View>
          </View>
          <View style={styles.albumsStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri:albumData[4].image2}}/>
            </View>
          </View>
         
          <View style={styles.cardStyle}>
        <View style={[styles.frameStyle, styles. titleStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri: albumData[5].image}}/>
            <View style={styles.headerStyle}>
              <Text>{albumData[5].name}</Text>
              <Text>{albumData[5].singer}</Text>
            </View>
            <View style={styles.likeStyle}>
          <Text >{albumData[5].like}</Text>
        </View>
          </View>
          <View style={styles.albumsStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri:albumData[5].image2}}/>
            </View>
          </View>

          <View style={styles.cardStyle}>
        <View style={[styles.frameStyle, styles. titleStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri: albumData[6].image}}/>
            <View style={styles.headerStyle}>
              <Text>{albumData[6].name}</Text>
              <Text>{albumData[6].singer}</Text>
            </View>
            <View style={styles.likeStyle}>
          <Text >{albumData[6].like}</Text>
        </View>
          </View>
          <View style={styles.albumsStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri:albumData[6].image2}}/>
            </View>
          </View>

         </View>
        </ScrollView>
        );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#770077",
      },
      
      frameStyle: {
         flexDirection: "row",
         justifyContent: "flex-start"
       },

       thumbnailStyle: {
         height: 50,
         width: 50,
         margin: 5
       },

       headerStyle: {
         flexDirection: "column",
         justifyContent: "space-around",
         paddingLeft: 10,
         paddingRight:0,
         width:250
       },

       cardStyle: {
         shadowColor: "#000",
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.5,
         shadowRadius: 3,
         elevation: 1,
         marginLeft: 10,
         marginRight: 10,
         marginTop: 15
         
       },

       albumsStyle: {
         padding: 5,
         borderColor: "#B0E0E6",
         backgroundColor: "#FFFF00",
         borderRadius: 5,
         marginTop:2
       },

       titleStyle: {
        borderColor: "#B0E0E6",
        padding: 5,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
      },

       imageStyle: {
         height: 350,
         width:null
       },
    });

       export default AlbumList;