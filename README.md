# ALERTJS
Send in-page alerts in JavaScript (no dependencies)

Created for Platform LMS by Jcorp. (MIT License)


Sample usage: 
```Javascript
  var message = new Alert("This is a Message", "And, it says something");
  message.call();
  
  setTimeout(function(){ message.recall(); }, 12500); // You can trigger recall() whenever you want (onclick, some event, or as here a timeout)
```
