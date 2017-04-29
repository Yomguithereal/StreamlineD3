## **Project is currently in development**

# StreamlineD3
Providing developers with a simple way to create live visualizations for their live data streams.



## Features
  * Built-in functions to automate API GET Requests
  * Many options to customize visualizations
  * Support for the 4 most widely used visualizations; Bar, line, Scatter and Area graphs
  
 
## Getting Started

  1. ```npm install streamlined3``` <br/>
  2. Once you have a server running: <br/>
  
     ### Server
     
     1. Require our library:<br/>
     ```const streamline = require('streamlined3');```<br/>
     2. Create a new instance of the stream you want to visualize, passing in your server:<br/>
     ```let bikeStream = new streamline(server);```<br/>
     3. Create a config object:<br/>
     
     ```
        let config = {
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
      };
      ```
      
      4. Invoke the StreamlineD3 ```connect``` method for the new instance:<br/>
      
      ```
       bikeStream.connect((socket) => {
         bikeStream.line(socket, myData);
       });
       ```

      ### HTML
      
      1. Add our library as a script: <br/>
      ```<script type="text/javascript" src="graphs/line.js"></script>```
      2. Add a ```<div>``` node with a class of ```chart``` where you want your visualization to appear:
      ```<div class="chart"></div>```
      
      and voilà! You now have a working, live-updating visualization.
