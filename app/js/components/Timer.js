import  React, { Component } from 'react';


export default class Timer extends React.Component {
	
	constructor(props) {
    	super(props);
  	}
	
	componentDidMount(){

	}

	render(){
		return (
            <div className='col-sm-12 col-xs-12 b-emphasis-30'>
                <div className='col-sm-4 col-xs-4 b-hours'>{this.props.time.hours}</div>
                <div className='col-sm-4 col-xs-4 b-minutes'>{this.props.time.minutes}</div>
                <div className='col-sm-4 col-xs-4 b-seconds'>{this.props.time.seconds}</div>
            </div>
		);		
	}
}


