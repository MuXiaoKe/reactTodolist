import React, { Component } from "react";
import PropTypes from "prop-types";
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
MouseDiv.propTypes = {
	mouse: PropTypes.object
};
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
				{this.props.children(this.state)}
			</div>
		);
	}
}
class Test extends Component {
	render() {
		return (
			// <div style={{ height: "200px", width: "100%" }}>
			// 	<Mouse>{xy => <MouseDiv mouse={xy} />}</Mouse>
			// </div>
			<div style={{ height: "200px", width: "100%" }}>
				<Mouse
					children={mouse => (
						<p>
							The mouse position is {mouse.x}, {mouse.y}
						</p>
					)}
				/>
			</div>
		);
	}
}

export default Test;
