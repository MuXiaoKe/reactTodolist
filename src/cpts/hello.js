import React, { Component } from "react";
import { connect } from "react-redux";
//import store from "../store/store";
import { addThings } from "../store/actions";

class Hello extends Component {
	render() {
		const { num, onTodoClick } = this.props;
		console.log(num);
		return (
			<div
				onClick={() => {
					onTodoClick();
				}}
			>
				{num} 222
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	let things = state.thingsReducer.peopleState;
	let nowthings = things[things.length - 1].things;
	console.log(nowthings);
	return { num: nowthings };
};
const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: () => {
			dispatch(addThings("zh2", "2018"));
		}
	};
};
// 连接 store，作为 props
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hello);
