var lyrics = ["Boat drinks. Boys in the band ordered boat drinks.","Visitors just scored on the home rink.","Everything seems to be wrong.","Lately, newspaper mentioned cheap airfare.","I've got to fly to Saint Somewhere.","I'm close to bodily harm.","Twenty degrees and the hockey games on.","Nobody cares; they are way too far gone","Screamin' \"Boat drinks,\"","Somethin' to keep them all warm.","This morning I shot six holes in my freezer.","I think I got cabin fever.","Somebody sound the alarm.","I'd like to go where the pace or life's slow.","Could you beam me somewhere, Mister Scott?","Any old place here on Earth or in space.","You pick the century and I'll pick the spot.","I know I should be leaving this climate.","I got a verse but can't rhyme it.","I gotta go where it's warm.","Boat drinks.","Waitress, I need two more boat drinks.","Then I'm headin south 'fore my dream shrinks.","I gotta go where it's warm.","I gotta go where there ain't any snow, where there ain't any blow, 'cause my fin sinks so low."];

$(document).ready(function(){
  function getQuote(){
    return lyrics[Math.round((Math.random())*24)];
  }
  
  $("#get-quote").on('click', function(){
    var newQuote = getQuote();
    $("#quote-spot").html(newQuote);
    $(".twitter-share-button").attr("href",("https://twitter.com/intent/tweet?text=\"" + newQuote + "\" was my quote from Quote Drinks (https://bit.ly/2k6uNei)"));
  });
});