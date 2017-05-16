## <b>Project is currently in development</b>

# StreamlineD3
Providing developers with a simple way to create live updating visualizations for their streaming data.

## Features
  * Make each visualiztion your own with custom colors, fonts, heights, widths, and more.
  * Our diffing algorithm renders only the data that changes for blazing fast performance.
  * Load balancing through Node clusters lets your app scale to multiple streams and visualizations.
  * Pre-built ready to use visualizations including; Bar, Line, Scatter, Pie, Bubble, Word-Cloud, and World Map.
  
## Getting Started

1. Use ```npm install streamlined3``` to install our library. <br/>
2. Once you have a server running:
  
### Server
     
1. Require our library:
```
const streamline = require('streamlined3');
```
2. Create a new instance of the stream you want to visualize, passing in your server:<br/>
```
let bikeStream = new streamline(server);
```
3. Create a config object (see below for what type of key/value pairs you'll need for each visualization):
```
let config = {
  width:      10, //data.time
  height:     10,
  xdomain:    10,//width of xAxis
  ydomain:    10,//height of yAxis
  xticks:     10,
  yticks:     10,
  xScale:     counter++,//data for xAxis
  yScale:     msg.num_bikes_available,//data for yAxis
  xLabel:     'abc',
  yLabel:     'abc'
};
```
4. Invoke the StreamlineD3 ```connect``` method for the new instance:<br/>
```
bikeStream.connect((socket) => {
  bikeStream.line(socket, myData);
});
```

### HTML
      
1. Add our library as a script by either using the CDN or download a graph file in the graphs folder: 
```<script type="text/javascript" src="graphs/line.js"></script>```

OR
```<script src="http://cdn.jsdelivr.net/gh/StreamlineD3/SD3-Demo@1.2/client/graphs/bundle.min.js"></script>```

2. Add a ```<div>``` node with an id of ```(see below for what each visualization is called)``` where you want your visualization to appear:
```<div id="Name-Of-Visualization"></div>```
      
And voilà! You now have a working, live-updating visualization.

## Specific Settings for 
