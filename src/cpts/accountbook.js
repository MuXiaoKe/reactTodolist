import React, { Component } from "react";
import dayjs from "dayjs";
import { Form, Input, Button, Table, Tag } from "antd";

const FormItem = Form.Item;

const columns = [
	{
		title: "金额",
		dataIndex: "money",
		key: "money",
		render: text => <a href="javascript:;">{text}</a>
	},
	{
		title: "时间",
		dataIndex: "time",
		key: "time"
	},
	{
		title: "类型",
		key: "tags",
		dataIndex: "tags",
		render: tags => (
			<span>
				{tags.map(tag => (
					<Tag color="blue" key={tag}>
						{tag}
					</Tag>
				))}
			</span>
		)
	},
	{
		title: "操作",
		key: "action",
		render: (text, record) => (
			<span>
				<a href="javascript:;">Delete</a>
			</span>
		)
	}
];

// const data = [
// 	{
// 		key: "1",
// 		money: "200",
// 		time: 32,
// 		tags: ["吃饭"]
// 	}
// ];

class AccountBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputval: "",
			tabledata: [
				{
					key: "1",
					money: "200",
					time: "1989-10-26",
					tags: ["吃饭"]
				}
			]
		};
	}
	handleChange = e => {
		let v = e.target.value;
		this.setState({
			inputval: v
		});
	};
	handleSubmit = e => {
		e.preventDefault();

		let time = dayjs().format("YYYY/MM/DD HH:MM");
		let copytable = this.state.tabledata.slice();
		copytable.push({
			key: 'copytable.length + "" + 1',
			money: this.state.inputval,
			time: time,
			tags: ["吃饭"]
		});
		this.setState({ tabledata: copytable });
	};
	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormItem label="花费">
						<Input
							value={this.state.inputval}
							onChange={this.handleChange}
						/>
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit">
							提交
						</Button>
					</FormItem>
				</Form>
				<Table columns={columns} dataSource={this.state.tabledata} />
			</div>
		);
	}
}
export default AccountBook;
