
var jsModbus = require('..'),
    util = require('util');

// override logger function
//jsModbus.setLogger(function (msg) { util.log(msg); } );

var client = jsModbus.createTCPClient(8000, '127.0.0.1');

var cntr = 0;
var closeClient = function () {
  client.close();
  cntr += 1;
  if (cntr === 5) {
    client.close();
  }
};


// client.readInputRegister (1, 0, 8, 
// 	function (resp) { 
//   	  console.log('inside the first user cb');
// 	  console.log(resp);
//           closeClient(); 
// 	}); 

// client.readInputRegister (1, 6, 10, 
// 	function (resp) { 
// 	  console.log('inside the second user cb');
// 	  console.log(resp);
//           closeClient(); 
// 	});

// client.readHoldingRegister (1, 0, 8, 
// 	function (resp) { 
// 	  console.log('inside the HOLDING user cb');
// 	  console.log(resp);
//           closeClient(); 
// 	});

// client.readCoils (1, 0, 2,
// 	function (resp, err) { 

//         console.log(arguments);
// 	  if (err) {
// 	    console.log(err);
//             closeClient();
// 	    return;
// 	  }
  
// 	  console.log('inside the third user cb');
// 	  console.log(resp);
// 	  closeClient();
// 	});

console.log('write single reg');
client.writeSingleRegister(1, 3, 1234, function() { console.log('ok!'); });
//client.writeSingleCoil(1, 4, true, closeClient);




