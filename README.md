# SimTime
A super light-weight (less than 1k) and simple-to-use datetime uitlity library with conceptually-apparent APIs.

An alternative to [moment](https://momentjs.com/docs/#/-project-status/) (which is on the road of deprecation), Intl (which should be temporary), [Temporal](https://momentjs.com/docs/#/-project-status/future/) (not yet to be ready).
    
Because it will be conceptually-apparent APIs, so we need to clearify the concepts first.

Concepts

[Timezone](https://www.timeanddate.com/time/time-zones.html) -    

[ISO](https://en.wikipedia.org/wiki/ISO_8601) - we can simply think of it as a kind of format.  

[toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) -  

Locale - local timezone, local format (geographical, political, cultural, or whatever you like)  

[toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) -  

Local -  

Curr - the time point when the API is invoked.  

[UTC](https://www.timeanddate.com/time/aboututc.html) -

                
How to determine an exact point in time literally?  
Beside the numbers represent year, month, day, hour, minute, and second, there is one more factor - timezone. This should be apparent to well educated people, but that's what we are struggling about as software developers. 


