class Streamline {
	constructor(server) {
		this.io = require('socket.io').listen(server);
		this.cluster = require('cluster');
		this.numCPUs = require('os').cpus().length;
		this.connections = [];
		this.server = server;
	}

	connect(func) {
		//load balance server with clustering so each cpu is given a task/socket
		// if (this.cluster.isMaster) {  
		// 		for (var i = 0; i < this.numCPUs; i++) {
		// 				// Create a worker
		// 				this.cluster.fork();
		// 		}

		// 	this.cluster.on('exit', function(worker, code, signal) {  
		// 		console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);
		// 		this.cluster.fork();
		// 	});

		// }  else {

		this.io.sockets.on('connection', (socket) => {
			let newSocket = socket;
			this.connections.push(socket);
			console.log('CONNECTED: %s SOCKETS CONNECTED', this.connections.length)

			socket.on('disconnect', (data) => {
				this.connections.splice(this.connections.indexOf(socket), 1);
				console.log('CONNECTED: %s SOCKETS CONNECTED', this.connections.length);
			});

			return func(socket);

		});

		// 	this.server.listen(process.env.PORT || 3000, () => console.log('SERVER RUNNING ON 3000'));
		// }

	}

	line(socket, data, config) {

		let emitData = [];
		let emitConfig = {};

		let refConfig = {
			setWidth: 700,
			setHeight: 500,
			shiftXAxis: true,
			xDomainUpper: 20,
			xDomainLower: 0,
			yDomainUpper: 40,
			yDomainLower: 0,
			xTicks: 10,
			yTicks: 10,
			xScale: '',
			yScale: '',
			xLabel_text: '',
			yLabel_text: ''
		};

		for (let key in config) {
			refConfig[key] = config[key];
		}

		setInterval(() => {
			for (let i = 0; i < data.length; i += 1) {
				emitConfig = Object.assign({}, refConfig);

				emitConfig.xScale = data[i][emitConfig.xScale];
				emitConfig.yScale = data[i][emitConfig.yScale];

				emitData.push(emitConfig);
			}
			if (emitData.length >= emitConfig.xDomainUpper) {
				emitData = emitData.slice(-(emitConfig.xDomainUpper));
			}

			socket.emit('sendLineData', emitData);
			emitData = [];
		}, 1000);
	}


	pie(socket, data, config) {

		let emitData = [];
		let emitConfig = {};

		let refConfig = {

			setWidth: 700,
			setHeight: 500,
			category: '',
			count: ''
		};
		for (let key in config) {
			refConfig[key] = config[key];
		}

		setInterval(() => {
			for (let i = 0; i < data.length; i += 1) {

				emitConfig = Object.assign({}, refConfig);

				emitConfig.category = data[i][emitConfig.category];
				emitConfig.count = data[i][emitConfig.count];
				emitData.push(emitConfig);
			}

			socket.emit('sendPieData', emitData);
			emitData = [];
		}, 1000);
	}

	scatter(socket, data, config) {
		let emitData = [];
		let emitConfig = {};

		let refConfig = {
			setWidth: 700,
			setHeight: 500,
			shiftXAxis: false,
			xDomainUpper: 20,
			xDomainLower: 0,
			yDomainUpper: 40,
			yDomainLower: 0,
			xTicks: 10,
			yTicks: 10,
			xScale: '',
			yScale: '',
			xLabel_text: '',
			yLabel_text: ''
		};

		for (let key in config) {
			refConfig[key] = config[key];
		}

		setInterval(() => {
			for (let i = 0; i < data.length; i += 1) {
				emitConfig = Object.assign({}, refConfig);

				emitConfig.xScale = data[i][emitConfig.xScale];
				emitConfig.yScale = data[i][emitConfig.yScale];
				emitConfig.id = 'ball-' + i;
				emitData.push(emitConfig);
			}
			if (emitData.length >= emitConfig.xDomainUpper) {
				emitData = emitData.slice(-(emitConfig.xDomainUpper));
			}

			socket.emit('sendScatterData', emitData);
			emitData = [];
		}, 1000);
	}


	wordCloud(socket, config) {

		let refConfig = {
			colors: '',
			colorDomain: '',
			font: '',
			fontSize: '',
			padding: '',
			rotate: '',
		};

		for (let key in config) {
			refConfig[key] = config[key];
		}

		let emitConfig = Object.assign({}, refConfig);

		socket.emit('send custom', emitConfig);

		socket.on('send audioText', (data) => {
			console.log('data in index', data);
			socket.emit('send audioData', data);
		});
	}

	bubbleGraph(socket, data, config) {

		let emitConfig = {};
		let emitData = [];

		let refConfig = {
			setWidth: 700,
			setHeight: 500,
			counter: '',
			text: '',
			volume: '',
		};

		for (let key in config) {
			refConfig[key] = config[key];
		}

		setInterval(() => {
			for (let i = 0; i < data.length; i += 1) {
				emitConfig = Object.assign({}, refConfig);

				emitConfig.text = data[i][emitConfig.text];
				emitConfig.volume = data[i][emitConfig.volume];
				emitData.push(emitConfig);
			}
			console.log('EMIT CONFIG: ', emitData);
			socket.emit('sendBubbleData', emitData);
			emitData = [];
		}, 1000);
	}

	bar(socket, data, config) {
		let emitConfig = {};
		let emitData = [];

		let refConfig = {
			setWidth: 700,
			setHeight: 500,
			shiftYAxis: true,
			xDomainUpper: 20,
			xDomainLower: 0,
			yDomainUpper: 40,
			yDomainLower: 0,
			xTicks: 10,
			yTicks: 10,
			xScale: 'Borough',
			volume: 'Speed',
			xLabel_text: 'x axis label',
			yLabel_text: 'y axis label',
			color: ['black']
		};

		for (let key in config) {
			refConfig[key] = config[key];
		}

		setInterval(() => {
			for (let i = 0; i < data.length; i += 1) {
				emitConfig = Object.assign({}, refConfig);

				emitConfig.xScale = data[i][emitConfig.xScale];
				emitConfig.volume = data[i][emitConfig.volume];
				emitConfig.id = 'rectangle-' + i;
				emitData.push(emitConfig);
			}

			socket.emit('sendBarData', emitData);
			emitData = [];
		}, 2000);

	}

}

module.exports = Streamline;