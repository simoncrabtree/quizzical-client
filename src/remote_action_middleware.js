export default socket => store => next => action => {
  if(action.broadcast)
    console.log('Broadcasting', action);

  return next(action);
}