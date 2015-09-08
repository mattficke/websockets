# websockets
## Why did you choose this subject?
  I'm interested in the interaction between the front end and back end, and this is a cool technology that handles that interaction in a way that's different from standard HTTP.
## How were you first made aware of it?
  I had heard that web sockets were used to build real-time chat applications, but didn't know anything about how it worked.
## What problem does it solve?
  Solves the problem of enabling real-time, simultaneous communication over a channel ("push messages") designed for a request/response pattern
## How does it solve the problem (conceptually)?
  Creates a persistent connection between the client and the server, rather than the request/response connection of http.
## Why does one use it?
  For applications with multiple simultaneous users that need to update each client when any other user makes an update
## What are the alternatives?
  AJAX, HTTP long polling
## What is it similar to, if anything?
  Long polling (keeping a connection open until a response is received, with no timeout)
## What is the history of this technology?
  Standardized in 2011, it was developed to allow simultaneous messaging between users without the necessity of an HTTP request on the client side to fetch a message.
## Who built it and why?
  WebSockets is an HTML5 API developed by the W3C. Socket.IO is a JS library built by Guillermo Rauch of Automattic (creators of Wordpress)
## Who is maintaining it?
  Open source, primarily still maintained by Guillermo Rauch
##What is your opinion on the technology after having built something with it?
  It's great! Useful for updating the user client when data changes without waiting for them to request an updated version.
## What are the biggest conceptual hurdles (if any) you encountered when researching this?
  Things made more sense once I realized you had to pair the emitted message and event listener names. The front and back end are tied together very closely. This is unlike the back-ends we've been writing that only produce an API, but are otherwise unaware of the front-end.

  I've so far only built sites that re-render when some sort of request is made from the client. I'm familiar with "push" messages in a general sense, but it's a different way of structuring your application that I had to get used to.
## What resources do you recommend for interested students?
  You can test out web sockets applications on localhost, but to get the full impact it's nice to expose localhost to the internet to test on multiple machines. [ngrok](https://ngrok.com/) is a useful tool for this.
## What article or forum was most helpful to you in learning this?
  The [Socket.IO tutorial](http://socket.io/get-started/chat/) is a great place to start
## What are 3 interview questions one might be asked about this technology?
1. Describe the difference between the client-side and server-side implementation of WebSockets.
2. How do you persist data sent via WebSockets?
3. How do you broadcast a message to all users? To a particular user? How is it different?
