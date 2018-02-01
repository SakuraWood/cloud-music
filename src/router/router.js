import { StackNavigator } from 'react-navigation';
import Search from './../page/search/views/SearchContainer';
import Play from './../page/play/views/PlayContainer';

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
});

export default RootNavigator;
