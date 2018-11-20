import React, { Component } from "react";
import { Button, Input } from "antd";
import dayjs from "dayjs";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nowCon: {
				things: "",
				time: ""
			},
			listContent: []
		};
		this.addListChange = this.addListChange.bind(this);
		this.addChange = this.addChange.bind(this);
	}
	addChange(newContent) {
		let time = dayjs().format("YYYY/MM/DD HH:MM");
		this.setState({
			nowCon: {
				things: newContent,
				time: time
			}
		});
	}
	addListChange() {
		const listContent = this.state.listContent.slice();
		listContent.push(this.state.nowCon);
		this.setState({
			listContent: listContent
		});
		this.setState({
			nowCon: {
				things: "",
				time: ""
			}
		});
	}
	deleteItem(i) {
		let [...newlist] = this.state.listContent;
		newlist.splice(i, 1);
		this.setState({
			listContent: newlist
		});
	}
	render() {
		return (
			<div className="App">
				<InputC
					addlist={this.addChange}
					value={this.state.nowCon.things}
					submitChange={this.addListChange}
				/>
				<TodoListUl
					listContent={this.state.listContent}
					deleteItem={i => this.deleteItem(i)}
				/>
			</div>
		);
	}
}

// 输入事件
class InputC extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.props.addlist(event.target.value);
	}
	render() {
		return (
			<div className="list-input">
				<Input
					type="text"
					value={this.props.value}
					onChange={this.handleChange}
					style={{ width: 200, marginRight: 10 }}
				/>
				<Button type="primary" onClick={this.props.submitChange}>
					确定
				</Button>
			</div>
		);
	}
}
//列表
class TodoListUl extends Component {
	render() {
		return (
			<div className="todolist">
				<ul>
					{this.props.listContent.map((item, index) => (
						<li key={index}>
							<span>{item.things}</span>
							<span>{item.time}</span>
							<a
								className="closeme"
								onClick={() => this.props.deleteItem(index)}
							>
								X
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoList;
