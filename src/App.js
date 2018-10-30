import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Button, Input } from "antd";
import dayjs from "dayjs";

const { Header, Content, Footer } = Layout;

class App extends Component {
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
				<Layout className="layout">
					<Header>
						<div className="logo">todolist</div>
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={["2"]}
							style={{ lineHeight: "64px" }}
						>
							<Menu.Item key="1">nav 1</Menu.Item>
							<Menu.Item key="2">nav 2</Menu.Item>
						</Menu>
					</Header>
					<Content style={{ padding: "0 50px" }}>
						<div
							style={{
								background: "#fff",
								padding: 24,
								minHeight: 280
							}}
						>
							<div className="app-body">
								<InputC
									addlist={this.addChange}
									value={this.state.nowCon.things}
									submitChange={this.addListChange}
								/>
								<TodoList
									listContent={this.state.listContent}
									deleteItem={i => this.deleteItem(i)}
								/>
							</div>
						</div>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Created by zhouquan
					</Footer>
				</Layout>
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
class TodoList extends Component {
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

export default App;
