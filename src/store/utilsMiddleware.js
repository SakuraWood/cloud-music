export default function utilsMiddleware({ dispatch }) {
  return next => action => {
    const { payload, error, meta = {} } = action;

    const dispatchToast = (...args) => {};

    // error handle
    if (error && payload.type === "http") {
      dispatchToast(`网络连接错误【${payload.res.status}】`);
    }
    next(action);
  };
}
