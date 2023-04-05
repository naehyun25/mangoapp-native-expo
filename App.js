import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AccImg1 from "./assets/products/acc1.jpg";
import Avatar from "./assets/icons/avatar.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Product😈</Text>
      <View style={styles.productCard}>
        <View>
          <Image source ={AccImg1} style={styles.productImage}
          resizeMode={'contain'}
// 기본 이미지 태그에 제공되는 props
/>
        </View>
        <View style={styles.productContent}>
          <Text style={styles.productName}>하네스</Text>
          <Text style={styles.productPrice}>50000원</Text>
        </View>
        <View style={styles.productFooter}>
          <View style={styles.productSeller}>
            <Image source={Avatar} style = {styles.Avatar}/>
            <Text style={styles.productSellerName}>도기멍</Text>
          </View>
          <Text style={styles.productDate}>1분전</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:"center",
  },
  productCard:{
    width:320,
    borderColor:"rgb(230,230,230)",
    borderWidth:1,
    borderRadius:16,//네이티브앱은 8단위로
    backgroundColor:"#fff",
  },
  productImage:{
    width:"100%",
    height:210,
    borderRadius:16,
  },
  productContent:{
    padding : 8,
  },
  productFooter: {
    flexDirection:"row",
    justifyContent : "space-between",
    alignItems : "center",
    marginTop:12,
    padding:8,
  },
  productSeller:{
    flexDirection:"row",
    alignItems:"center",
  },
  Avatar:{
      width:24,
      height:24,
  },
  productName : {
    fontSize:16,
  },
  productPrice : {
    fontSize:18,
    fontWeight:600,
    marginTop:8,
  },
  productSellerName : {
    fontSize:16,
  },
  productDate : {
    fontSize:16,
  },

});
