import {View,Text,StyleSheet,Button} from "react-native";

const AboutScreen = ({ route, navigation }) => {    
  const {name} = route.params;
    return(
       <View style={styles.container}>
            <Text style={styles.heading}>About Screen {name}</Text>
            <Button title="update the name" onPress={()=>navigation.setParams({
              name:"Jiya"
            })} />
            <Button title="Go Back with data" 
            onPress={()=>
              navigation.navigate("Home",{result:"Data from About"}) } />
        </View>
    )
}

export const styles = StyleSheet.create({
   container:{
        alignItems:'center',
    },
  heading:{
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    color:'Black',
  },
  
});

export default AboutScreen;