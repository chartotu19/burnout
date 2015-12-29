//var path  = require('path');
module.exports = {
	entry : './app/js/index.js',
	output : { path : __dirname , filename : 'bundle.js'},
	devtool:"source-map",
	module : {
		loaders : [
			{
				test:/\.jsx?$/,
				loader: 'babel-loader',
				exclude : '/node_modules/',
				query:{
					presets : ["es2015","react","stage-0"]
				}
			},
			{
				test:/\.scss$/,
				loaders : ["style","css","sass"]
			}
		]
	}
}
