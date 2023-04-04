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
          <Image source ={AccImg1} style={styles.productImage}/>
        </View>
        <View style={styles.productContent}>
          <Text>하네스</Text>
          <Text>50000원</Text>
        </View>
        <View style={styles.productSeller}>
          <Image source={Avatar} style = {styles.Avatar}
          />
          <Text>도기멍</Text>
          <Text>1분전</Text>
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
  productSeller:{
    flexDirection:"row",
    alignItems:"center",
  },
  Avatar:{
      width:24,
      height:24,
  },

});
