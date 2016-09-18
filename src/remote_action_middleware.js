export default socket => store => next => action => {
  if(action.broadcast){
    console.log('Broadcasting', action)
    socket.emit('action', action)
  }

  return next(action);
}