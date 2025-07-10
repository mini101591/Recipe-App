import {View,Text,StyleSheet} from "react-native";

const AboutScreen = () => {    
    return(
       <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>
        This is a simple recipe app built with React Native. It shows a list of recipes, details of each recipe, and information about the app.
      </Text>
    </View>
    )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  
});

export default AboutScreen;