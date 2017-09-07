import React, {Component} from 'react';
import { withRouter } from 'react-router'
import {Menu, Icon} from 'antd';
const { SubMenu } = Menu;


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: []
        };
        //this.linkTo = this.linkTo.bind(this);

    }
    componentWillReceiveProps(nextProps) {
        this.setState({selectedKeys: [nextProps.location.pathname]})
        //console.log(nextProps)
    }
    componentDidMount() {
        this.setState({ selectedKeys: [this.props.location.pathname] });
        //console.log(this.props.location)
    }

    linkTo = (item) => {
        console.log(this.props)

        this.props.history.push(item.key)
    };
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']} selectedKeys={this.state.selectedKeys} onClick={this.linkTo}>
                <Menu.Item key="/">
                    <Icon type="user"/>
                    <span>首页</span>
                </Menu.Item>
                <Menu.Item key="/pro">
                    <Icon type="video-camera"/>
                    <span>产品</span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                    <SubMenu key="sub2" title="Submenu">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        );
    }
}
export default withRouter(Navigation);