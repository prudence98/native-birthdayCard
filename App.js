import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const img = require('./assets/ret.png')
export default function App() {
  return (
    <View style={styles.container}>    
      <View style={{
      width: 640, height: 400, position: 'absolute', margin: 'auto', left: 0,
      right: 0, top: 0, bottom: 0, WebkitPerspective: 1200, perspective: 1200, transition: '1s',width:'90%',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',backgroundColor: 'lightgrey'
    }}>
      <ImageBackground source={img} style={{size:'cover',width:'100%',height:'100%'}}> 
      <View style={{alignContent:'center',margin:'auto',marginLeft:'45%'}}>
        <View style={{color:'rgb(180, 100, 10)',marginTop:'-30%',fontSize:20}} >

          <Text style={{color:'black',fontSize:20,}}>The best of your life has yet to come, embrace it, </Text>
          <Text style={{color:'black',fontSize:20,marginLeft:'20%'}}> be confident,</Text>
          <Text style={{color:'black',fontSize:20,}}>and embark on a future of limitless possibilities </Text>
          <Text style={{color:'black',fontSize:20,marginLeft:'20%'}}>and opportunities.Have a blissful day </Text>
        </View>

        <marquee style={{color:'rgb(252, 70, 0)',fontSize:60}} behavior="slide" direction="left">Happy Birthday!!!</marquee>

        
      </View>
       </ImageBackground> 
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
