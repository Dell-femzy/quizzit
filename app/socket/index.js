/**
 * @classdesc Socket controller class
 */
class SocketCtrl {
  /**
   * creates socket connection
   */
  static onConnect(socket) {
    socket.on('connection', io => {
      io.emit('socket:connected', {
        message: 'Socket connected!'
      });
    })
  }
}

export default SocketCtrl;