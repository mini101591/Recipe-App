import {View,Text,StyleSheet,Button} from "react-native";
//import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({navigation,route}) => {    
   // const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Home Screen</Text>
            <Text style={styles.heading}>{route.params?.result}</Text>
            <Button title="Go To About" 
            onPress={
                ()=>navigation.navigate("About")
            }
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',

    },
  heading:{
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    color:'Black'
  },
  
});

export default HomeScreen;