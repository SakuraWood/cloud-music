import { NavigationActions } from 'react-navigation';

export const navigator = routerObj => {
  NavigationActions.navigate(routerObj);
};

export const back = () => {
  NavigationActions.back();
};
