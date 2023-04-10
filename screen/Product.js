import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, Alert,ActivityIndicator } from "react-native";
import { API_URL } from "../config/constans";
import axios from "axios";
import dayjs from "dayjs";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Product = (props) => {
    const {id} = props.route.params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
		axios
			.get(`${API_URL}/products/${id}`)
			.then((result) => {
				setProduct(result.data.product);
                console.log("di",result)
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
    if (!product){
        return <ActivityIndicator/>
        //경로 틀리면 스피너가 돌아요
    }
    return(
        <View Style={styles.container}>
        <ScrollView>
            <View>
                <Image style = {styles.productImage} 
                source = {{uri : `${API_URL}/${product.imageUrl}`}}/>
            </View>
            <View style={styles.productSection}>
                <View style={styles.productSeller}>
                    <Text style={styles.sellerText}>{product.seller}</Text>
                    <Image style={styles.sellerAvatar} source={{uri:"https://cdn-icons-png.flaticon.com/512/10277/10277914.png"}}/>
                </View>
                <View style={styles.divider}></View>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                    <Text style={styles.productDate}>상품등록일:{dayjs(product.createdAt).format("YYYY년 MM월 DD일")}</Text>
                    <Text style={styles.productDesc}>{product.description}</Text>
                
            </View>
        </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#fff",
    },
    productImage:{
        width:"100%",
        height:300,
        resizeMode:"contain"
    },
    productSection:{
        padding:16,
    },
    productSeller:{
        flexDirection:"row",
        alignItems:"center",
    },
    divider:{
        backgroundColor:"#ddd",
        height:1,
        marginVertical:16,
    },
    sellerText:{
        color:"#333",
        fontWeight:900,

    },
    sellerAvatar:{
        width:50,
        height:50,
    },
    productName:{
        fontSize:24,
        fontWeight:400
    },
    productPrice:{
        fontSize:18,
        fontWeight:700,
        marginTop:8
    },
    productDate:{
        fontSize:14,
        marginTop:4,
        color:"#aaa"
    },
    productDesc:{
        fontSize:16,
        marginTop:4,
        color:"#666"
    },

})



export default Product;