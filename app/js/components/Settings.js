import React, { Component } from 'react';

export default class Settings extends Component {
	handleChange(e){
		const node = this.refs.bedTime
	    const text = node.value.trim()
	    console.log(node)
	    if (!!text) {
	      this.props.onSaveClick({'bedTime' : text})
	      //node.value = ''
	    }
	}

	handleClick(e){
		const node = this.refs.bgColor
	    const text = node.dataset.bgcolor
	    if (!!text) {
	      this.props.onSaveClick({'bgColor' : text})
	    }
	}

	render(){
		let colorsDiv = [];
		this.props.colors.forEach((c)=>{
			let style= {
				backgroundColor:c
			}
			colorsDiv.push(<div ref="bgColor" className="b-circle b-bgColor" style={style} data-bgcolor={c} onClick={ (e) => this.handleClick(e)}></div>);
		})
		return (
		<div className="b-settings-pane">
			<span> Settings </span>
			<div className="">
				<span> Bed Time : </span> <input type="text" ref="bedTime" className="b-bedTime mt10" onChange={ (e) => this.handleChange(e)}/>
			</div>
			<div className="b-bgColor-container mt10">
				<span> Theme : </span> {colorsDiv}
			</div>
		</div>
		);
	}
}