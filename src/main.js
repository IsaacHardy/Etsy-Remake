(function () {

  // var firstItem = dragon.results[0];

  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);

  _.each(dragon.results, function (item) {
    var itemHTML = templateFunction(item);
    $('.results').append(itemHTML);

  });

}());
