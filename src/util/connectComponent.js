import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions';

const options = {
  withRef: true,
};

export default function connectComponent({
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  LayoutComponent,
}) {
  return connect(
    mapStateToProps ||
      (() => {
        return {};
      }),
    mapDispatchToProps ||
      (dispatch => {
        return {
          actions: bindActionCreators(actions, dispatch),
        };
      }),
    mergeProps,
    options,
  )(LayoutComponent);
}
