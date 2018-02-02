import { StackNavigator } from 'react-navigation';
import Search from './../page/search/views/SearchContainer';
import Play from './../page/play/views/PlayContainer';
import Home from './../page/home/views/Home';

const RootNavigator = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
  PlayBar: {
    screen: Play,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

export default RootNavigator;
