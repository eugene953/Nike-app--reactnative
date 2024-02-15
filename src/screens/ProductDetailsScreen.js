import { StyleSheet,Text, View, Image,FlatList,
    ScrollView,useWindowDimensions,Pressable } from 'react-native'
import products from '../data/products'
import {  useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../Store/cartSlice';

const ProductDetailsScreen = () => {
const product = useSelector((state) => state.products.selectedProduct);
const dispatch = useDispatch();

const {width} = useWindowDimensions();

const addToCart = () => {
  dispatch(cartSlice.actions.addCartItem({product}))
};

  return (
    <View>
        <ScrollView>
      {/*Image Corousel*/}
     < FlatList
     data={product.images}
     renderItem={({item}) => (

<Image source={{ uri:item}}
style={{width, aspectRatio:1}}
/>
 )}
 horizontal
 showsHorizontalScrollIndicator={false}
 pagingEnabled
 />


<View style={{padding:10}}>
      {/*Title*/}
      <Text style={styles.title}>
        {product.name}
      </Text>

      {/*Price*/}
      <Text style= {styles.price}>
        ${product.price}
      </Text>

      {/*Description*/}
      <Text style={styles.description}>
        {product.description}
      </Text>

 </View>
 </ScrollView>

      {/*Add to card button*/}
<Pressable onPress={addToCart} style={styles.button}>
    <Text style={styles.buttonText}>Add to cart</Text>
</Pressable>


        {/*Navigation icon*/}


    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
title:{
    fontSize:20,
    fontWeight:"500",
    marginVertical:5,
},
price:{
    fontWeight:"500",
    fontSize:16,
    letterSpacing:1.5,
},
description:{
    marginVertical:10,
    fontSize:15,
    lineHeight:20,
    fontWeight:"300",
},

button:{
position:"absolute",
backgroundColor:"black",
bottom:10,
width:"92%",
height:60,
alignSelf:"center",
padding:20,
borderRadius:100,
alignItems:"center",
},
buttonText:{
color:"white",
fontWeight:"500",
fontSize:16,
},

});