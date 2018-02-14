'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
		
		setTimeout(function(){ 
			if (state.debug) info('Actionviedemerde'.bold.yellow);
			
			state.action = {
				module: 'vdm'
			};
			resolve(state);
		}, 500);	
		
	});
};



