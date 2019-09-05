
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Home from "./LifeCycle";
// import Detail from "./Detail";

import MainHomeScreen from './MainTableView'; 
import HomeScreen from './Home'
import DetailScreen from './HomeDetail'

import ImageViewScreen from './ImageView'
import MovieListScreen from './MovieList'
import TextInputScreen from './TextInput'
import TouchableScreen from './Touchable'
import RNCallNativeScreen from './RNCallNative'
import NativeToRNDataScreen from './NativeToRNData'

import PropsScreen from './RN01_Props'
import StateScreen from './RN02_State'
import StylesScreen from './RN04_Styles'
import FlexBoxScreen from './RN05_FlexBox'
import ScreenScreen from './RN06_Screen'



const AppStackNavigator = createStackNavigator(
  {
    Main:{
      screen:MainHomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "首页列表" 
      })
    },
    HomePage: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "首页" 
      })
    },
    DetailPage: {
      screen: DetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}详情` //动态设置navigationOptions
      })
    },
    ImageViewPage:{
      screen:ImageViewScreen,
      navigationOptions:{
        title:'图片组件'
      }
    },
    ScrollViewPage:{
      screen:MovieListScreen,
      navigationOptions:{
        title:'列表组件'
      }
    },
    TextInputPage:{
      screen:TextInputScreen,
      navigationOptions:{
        title:'文本输入组件'
      }
    },
    TouchablePage:{
      screen:TouchableScreen,
      navigationOptions:{
        title:'触摸组件'
      }
    },
    NativeToJSPage:{
      screen:RNCallNativeScreen,
      navigationOptions:{
        title:'RN与原生的通信'
      }
    },
    NativeToRNDataPage:{
      screen:NativeToRNDataScreen,
      navigationOptions:{
        title:'原生给RN发送数据'
      }
    },
    PropsPage: {
      screen: PropsScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Props(属性)" 
      })
    },
    StatePage: {
      screen: StateScreen,
      navigationOptions: ({ navigation }) => ({
        title: "State(状态)" 
      })
    },
    StylesPage: {
      screen: StylesScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Styles(样式)" 
      })
    },
    StylesPage: {
      screen: StylesScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Styles(样式)" 
      })
    },
    FlexBoxPage: {
      screen: FlexBoxScreen,
      navigationOptions: ({ navigation }) => ({
        title: "FlexBox(盒子)" 
      })
    },
    ScreenPage: {
      screen: ScreenScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Screen(屏幕信息)" 
      })
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions:{
      headerBackTitle: null,
    },
    
  }
);

const App = createAppContainer(AppStackNavigator);
export default App