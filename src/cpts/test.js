import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
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
	handleClick = () => {
		this.props.history.push("/hello");
	};
	render() {
		const { location } = this.props;
		return (
			// <div style={{ height: "200px", width: "100%" }}>
			// 	<Mouse>{xy => <MouseDiv mouse={xy} />}</Mouse>
			// </div>
			<div
				style={{ height: "200px", width: "100%" }}
				onClick={this.handleClick}
			>
				<Mouse
					children={mouse => (
						<p>
							The mouse position is {mouse.x}, {mouse.y}
							{location.pathname}
						</p>
					)}
				/>
			</div>
		);
	}
}

export default withRouter(Test);
