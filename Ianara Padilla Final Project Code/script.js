function getName(){ 
var x = document.getElementById("yourname").value;
    if (x == "") {
        alert("Name must be filled out");
    }
    else {
    
  console.log(document.getElementById("yourname").value);
  document.getElementById("welcomemsg").innerHTML = "Hello "  + document.getElementById("yourname").value + "! How are you today?";
}
}



writeRandomQuote = function(){
   var quote = new Array();
	quote[0] = "Waste no fresh tears over old griefs.  -Euripides";
	quote[1] = "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.  -Mahatma Gandhi";
	quote[2] = "Life is like a roller coaster. It has its ups and downs, but it's your choice to cream or enjoy the ride.  -Unknown";
	quote[3] = "One thing you can't recycle is wasted time.  -Anonymous";
	quote[4] ="Remember, too much ego will kill your talent.  -Anonymous";
	quote[5] = "Pride makes us artificial and humility makes us real.  -Thomas Merton";
	quote[6] =  "Being happy never goes out of style.  -Lily Pulitzer";
	quote[7] = "The art of being happy lies in the power of extracting happiness from common things.  -Henry Ward Beecher";
	quote[8] = "Motivation is what gets you started. Habit is what keeps you going.  -Jim Ryun";
	quote[9] = "This too, shall pass. -King Solomon";
	quote[10] = "It is better to remain silent and be thought a fool that to speak up and remove all doubt.  -Source Unknown";
	quote[11] = "Don't waste words on people who deserve your silence. Sometimes the most powerful thing you can say is nothing at all.  -Anonymous"; 
	quote[12] = "Life is rough, so you gotta be tough.  -Johnny Cash"; 
	quote[13] = "Creativity is as important as literacy.  -Anonymous";
	quote[14] = "You need a little bit of insanity to do great things. -Henry Rollins";  
  
   var rand = Math.floor(Math.random()*quote.length);
   console.log(rand);
   document.getElementById("randquote").innerHTML=quote[rand];
 };
 
 writeRandomQuote();
 
 writeRandomQuote2 = function(){
   var quote = new Array();
   quote[0] = "Waste no fresh tears over old griefs.  -Euripides";
   quote[1] = "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.  -Mahatma Gandhi";;
   quote[2] = "Life is like a roller coaster. It has its ups and downs, but it's your choice to cream or enjoy the ride.  -Unknown";
  
   var rand = Math.floor(Math.random()*quote.length);
   console.log(rand);
   document.getElementById("randquote").innerHTML=quote[rand];
 };
 
 function generateSad(){ 
   writeRandomQuote2();
 }

writeRandomQuote3 = function(){
   var quote = new Array();
   quote[0] = "One thing you can't recycle is wasted time.  -Anonymous";
   quote[1] = "Remember, too much ego will kill your talent.  -Anonymous";
   quote[2] = "Pride makes us artificial and humility makes us real.  -Thomas Merton";
   
   var rand = Math.floor(Math.random()*quote.length);
   console.log(rand);
   document.getElementById("randquote").innerHTML=quote[rand];
 };
 
  function generateConfused(){ 
   writeRandomQuote3();
 }

writeRandomQuote4 = function(){
   var quote = new Array();
   quote[0] =  "Being happy never goes out of style.  -Lily Pulitzer";
   quote[1] = "The art of being happy lies in the power of extracting happiness from common things.  -Henry Ward Beecher";
   quote[2] = "Motivation is what gets you started. Habit is what keeps you going.  -Jim Ryun";
  
   var rand = Math.floor(Math.random()*quote.length);
   console.log(rand);
   document.getElementById("randquote").innerHTML=quote[rand];
 };
 
  function generateMotivated(){ 
   writeRandomQuote4();
 }  

writeRandomQuote5 = function(){
   var quote = new Array();
   quote[0] = "This too, shall pass. -King Solomon";
   quote[1] = "It is better to remain silent and be thought a fool that to speak up and remove all doubt.  -Source Unknown";
   quote[2] = "Don't waste words on people who deserve your silence. Sometimes the most powerful thing you can say is nothing at all.  -Anonymous"; 
  
   var rand = Math.floor(Math.random()*quote.length);
   console.log(rand);
   document.getElementById("randquote").innerHTML=quote[rand];
 };
 
  function generateAngry(){ 
   writeRandomQuote5();
}
   
 writeRandomQuote6 = function(){
   var quote = new Array();
   quote[0] = "Life is rough, so you gotta be tough.  -Johnny Cash"; 
   quote[1] = "Creativity is as important as literacy.  -Anonymous";
   quote[2] = "You need a little bit of insanity to do great things. -Henry Rollins";
  
   var rand = Math.floor(Math.random()*quote.length);
   console.log(rand);
   document.getElementById("randquote").innerHTML=quote[rand];
 };
 
  function generateRandom(){ 
   writeRandomQuote6();

};
	function validateForm() {
    var x = document.forms["nameform"]["yourname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}