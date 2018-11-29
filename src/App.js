import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

import TodoList from "./cpts/todolist";
import Hello from "./cpts/hello";
import AccountBook from "./cpts/accountbook";
import Test from "./cpts/test";

const { Header, Content, Footer } = Layout;

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<Layout className="layout">
					<Header>
						<div className="logo">ZH's Home</div>
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={["1"]}
							style={{ lineHeight: "64px" }}
						>
							<Menu.Item key="todolist">
								<NavLink
									to="/todolist"
									activeClassName="active"
								>
									todolist
								</NavLink>
							</Menu.Item>
							<Menu.Item key="hello">
								<NavLink to="/hello" activeClassName="active">
									hello
								</NavLink>
							</Menu.Item>
							<Menu.Item key="accountBook">
								<NavLink
									to="/accountBook"
									activeClassName="active"
								>
									accountBook
								</NavLink>
							</Menu.Item>
							<Menu.Item key="test">
								<NavLink to="/test" activeClassName="active">
									test
								</NavLink>
							</Menu.Item>
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
								<Route exact path="/" component={Hello} />
								<Route
									exact
									path="/todolist"
									component={TodoList}
								/>
								<Route exact path="/hello" component={Hello} />
								<Route
									exact
									path="/accountBook"
									component={AccountBook}
								/>
								<Route exact path="/test" component={Test} />
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

export default App;
