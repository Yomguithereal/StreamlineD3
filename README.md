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
     
     Require our library:<br/>
     ```const streamline = require('streamlined3');```<br/>
     Create a new instance of the stream you want to visualize, passing in your server:<br/>
     ```let bikeStream = new streamline(server);```<br/>
     Create a config object:<br/>
     ```      let config = {
        width:  10, //data.time
        height:  10,
        xdomain:  10,//width of xAxis
        ydomain:  10,//height of yAxis
        xticks: 10,
        yticks: 10,
        xScale:   counter++,//data for xAxis
        yScale:   msg.num_bikes_available,//data for yAxis
        xLabel_text: 'abc',
        yLabel_text: 'abc'
      };```<br/>
      Call bikeStream.connect()<br/>
      ```bikeStream.connect((socket) => {
          bikeStream.line(socket, myData);
         });
     
