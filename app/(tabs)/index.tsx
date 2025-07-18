import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RecipeList from "@/components/RecipeList";
import RecipeDetails from "@/components/RecipeDetails";
import AboutScreen from "@/components/AboutScreen";
import PostsScreen from "@/components/PostsScreen"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Recipes" component={RecipeList}/>
        <Drawer.Screen name="Details" component={RecipeDetails}  initialParams={{ recipe: null }} />
        <Drawer.Screen name="About Us" component={AboutScreen}/>
        <Drawer.Screen name="Blogs" component={PostsScreen}/>
    </Drawer.Navigator>
  );
}

