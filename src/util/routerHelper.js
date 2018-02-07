import { NavigationActions } from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

export const navigator = routerObj => {
  NavigationActions.navigate(routerObj);
};

export const back = () => {
  NavigationActions.back();
};

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const navAddListener = createReduxBoundAddListener('root');
