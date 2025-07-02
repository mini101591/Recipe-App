import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeDetails from '@/components/RecipeDetails';
import RecipeList from '@/components/RecipeList';
import  Ionicons  from '@expo/vector-icons/Ionicons';
import StackNav from './StackNav';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const AboutDrawer = () =>{
    return(
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor:'#333',
            drawerActiveBackgroundColor:'white',
            drawerContentStyle:{
                backgroundColor:"#c6cbef",
            }
        }}>
            <Drawer.Screen 
            name='List' 
            component={RecipeList}
            options={{
                title:'My Recipes',
                drawerLabel:'RecipeList',
            }}
            />
            <Drawer.Screen name='Details' component={RecipeDetails}/>
        </Drawer.Navigator>
    );
}

export default function App() {
  return (
        <Tab.Navigator screenOptions={{
            tabBarLabelPosition:"below-icon",
            tabBarShowLabel:true,
            tabBarActiveTintColor:'purple',
        }}>
            <Tab.Screen 
                name="List" 
                component={RecipeList}
                options={{
                    tabBarIcon:({color})=> <Ionicons name="list" size={20} color={color}/>,
                    tabBarBadge:3,
                }}
            />
            <Tab.Screen name="Details" component={RecipeDetails}  
                 options={{
                    tabBarIcon:({color})=> <Ionicons name="information-circle" size={20} color={color} />
                }}
            />
            <Tab.Screen name="abouttab" component={AboutDrawer}/>
            <Tab.Screen name="StackNav" component={StackNav} options={{
                headerShown:false,
            }}/>
        </Tab.Navigator>
        
  );
}
