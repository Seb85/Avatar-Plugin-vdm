var Promise = require('q').Promise;

require('colors');

exports.action = function(data, callback){
	
	info("Vie de merde from:", data.client.yellow);
	var url = 'http://www.viedemerde.fr/aleatoire';
	http_request(url)
	.then(body => scraper(body))
	.then(function(vdm) { 
		Avatar.speak(vdm, data.client, function(){ 
			Avatar.Speech.end(data.client);
	   });
	})
	.catch(function(err) {
		Avatar.speak(err, data.client, function(){ 
			Avatar.Speech.end(data.client);
	   });
	});
	
	callback();
}



function scraper(body) {
	
	return new Promise(function (resolve, reject) {
		  
		var $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: false });
		var vdm = $('p.block').first().find('a').text();
		if (!vdm) {
			return reject('Désolé je n\'ai pas trouvé de vie de merde');
		}
		
		resolve (vdm);
	});
	
}



function http_request (url) {
	
	return new Promise(function (resolve, reject) {
		
		var request = require('request');
		request({ 'uri' : url}, function (err, response, body) {
		
			if (err || response.statusCode != 200) {
			  return reject ('Désolé je n\'ai pas trouvé de vie de merde');
			}

			resolve(body);
		});
		
	});
	
}