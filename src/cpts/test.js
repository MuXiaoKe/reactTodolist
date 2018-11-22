import React, { Component } from "react";

class MouseDiv extends Component {
	render() {
		const mouse = this.props.mouse;
		return (
			<div style={{ position: "absolute", left: mouse.x, top: mouse.y }}>
				111
			</div>
		);
	}
}
class Mouse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0
		};
	}
	handleMouseMove = e => {
		this.setState({
			x: e.clientX,
			y: e.clientY
		});
	};
	render() {
		return (
			<div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
				{this.props.render(this.state)}
			</div>
		);
	}
}
class Test extends Component {
	render() {
		return (
			<div style={{ height: "200px", width: "100%" }}>
				<Mouse render={mouse => <MouseDiv mouse={mouse} />} />
			</div>
		);
	}
}

export default Test;
