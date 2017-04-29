# StreamlineD3
Providing developers with a simple way to create live visualizations for their live data streams.

## **Project is currently in development**

## Features
  * Built-in functions to automate API GET Requests
  * Many options to customize visualizations
  * Support for the 4 most widely used visualizations; Bar, line, Scatter and Area graphs
  
 
## Quick Start

  1. ```npm install streamlined3```
  2. Once you have a server running:
     Server.js:
     
     Require our library:
     ```const streamline = require('streamlined3');```
     Create a new instance of the stream you want to visualize, passing in your server:
     ```let bikeStream = new streamline(server);```
     Create a config object
     
