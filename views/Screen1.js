import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import inputTextWallPaper from '../atoms/wallPaperInputText'
import { useRecoilState } from 'recoil'
import Navbar from './Navbar'

export default function Screen1() {

    const accessKey = "";
    const [searchValue, setSearchValue]= useRecoilState(inputTextWallPaper);
    const [imageCollection, setImageCollection]= useState([]);

    useEffect(()=>{
      const getImageCollection = async() =>{
        let data = await fetch(`https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchValue}&client_id=${accessKey}`)
        let jsonData= await data.json();
        setImageCollection(jsonData);
        // console.log(imageCollection)
      }
      getImageCollection();
    }, [searchValue]);

  return (
    <View style={styles.screen1}>
      <Navbar/>
      {/* <Text>Screen1e</Text> */}
      {/* <Text>{accessKey}</Text> */}

      <FlatList numColumns={2} data={imageCollection.results} style={styles.imagecontainer}
         renderItem={({item}) => 
            <TouchableOpacity>
              <View style={styles.imagecontainer}>
                <Image source={{ uri: item.cover_photo.urls.regular}} style={styles.image} />
              </View>
            </TouchableOpacity>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen1:{
    backgroundColor: 'blue',
    // flex: 1,
    width: "100%",
    height: "100%",
    // flexDirection: 'column',
  },
  imagesPlace:{
    backgroundColor:'yellow',
  },
  imagecontainer: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
},
image: {
    width: "50%",
    height: "50%",
}
})