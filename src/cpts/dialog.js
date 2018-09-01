//模态框
class Modal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
	}
	componentDidMount() {
		modaRoot.appendChild(this.el);
	}
	componentWillUnmounted() {
		modaRoot.removeChild(this.el);
	}
	render() {
		return React.createPortal(this.props.children, this.el);
	}
}
//模态框的调用和展示
class ModalHandle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};

		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}
	handleShow() {
		this.setState({
			showModal: true
		});
	}
	handleHide() {
		this.setState({
			showModal: false
		});
	}
	render() {
		const modal = this.state.showModal ? (
			<Modal>
				<div className="modal">11111</div>
				<button onClick={this.handleHide}>隐藏</button>
			</Modal>
		) : null;

		return (
			<div className="modalWrap">
				<button onClick={this.handleShow}>显示</button>
				{modal}
			</div>
		);
	}
}
