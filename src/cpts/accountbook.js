import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class AccountBook extends Component {
	constructor(props) {
		super(props);
	}
	handleSubmit = () => {};
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem label="花费">
					<Input />
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit">
						提交
					</Button>
				</FormItem>
			</Form>
		);
	}
}
export default AccountBook;
