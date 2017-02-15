export default function thunkMiddleware() {
  return ({ dispatch, getState }) => {
    return next => action =>
      typeof action === 'function' ?
        action(dispatch, getState) :
        next(action);
  };
}
