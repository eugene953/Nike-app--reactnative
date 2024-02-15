import { StyleSheet, Text, View,Image,FlatList,Pressable } from 'react-native';
import products from '../data/products';
//import { useNavigation } from '@react-navigation/native';
import {  useSelector,useDispatch } from 'react-redux'; 
import { productsSlice } from '../Store/ProductsSlice';

const ProductsScreen = ({navigation}) => {
//const navigation = useNavigation();

const dispatch = useDispatch();

const products = useSelector((state )=> state.products.products);

  return (
    <FlatList data={products}
renderItem={({item}) => (

<Pressable 
onPress={() => {
 // update selected product
dispatch(productsSlice.actions.setSelectedProduct(item.id));

   navigation.navigate("Product Details");
   }}
style={styles.itemContainer}
>
 <Image source={{uri: item.image, }}
 style={styles.Image}/>
</Pressable>
 
)}
numColumns={2}
/>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
   Image:{
      width:"100%",
      aspectRatio:1,
    },
    
    itemContainer:{
      width:"50%",
    padding:1,
    }
    
    });
