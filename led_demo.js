var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodem1431' }
  },

  devices: {
    led: { driver: 'led', pin: 12 }
  },

  work: function(my) {
    my.led.turnOn();
  }
}).start();
