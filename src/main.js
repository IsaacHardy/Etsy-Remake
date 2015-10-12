(function () {

	// Var set to our API url
	let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=dungeons%20and%20dragons&includes=Images,Shop';

	// Ajax method from jQuery to get data from API
	$.ajax({
	  url: etsyURL,
	  dataType: 'jsonp',
	  method: 'get'
	}).then (function (response) {
		  console.log(response);
	
	// Var to select location of our HTML using template to pipe the info
	var templateString = $('#itemTemplate').text();
	var templateFunction = _.template(templateString);

	// Function to append each piece of data to html location using the undescore .each method
  	_.each(response.results, function (item) {
    	var itemHTML = templateFunction(item);
    	$('.results').append(itemHTML);
    	});
  	});

}());
