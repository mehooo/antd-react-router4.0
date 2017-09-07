import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Navigation from './components/Navigation';
import Home from './components/Home';
import Product from './components/Product';

import {Layout,Icon} from 'antd';
const {Header, Sider, Content} = Layout;



class App extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    <div id="components-layout-demo-custom-trigger">
                        <Layout>
                            <Sider
                                trigger={null}
                                collapsible
                                collapsed={this.state.collapsed}>
                                <img src={logo} className="App-logo" alt="logo"/>
                                <Navigation></Navigation>
                            </Sider>
                            <Layout style={{minHeight: '100vh'}}>
                                <Header style={{background: '#fff', padding: 0}}>
                                    <Icon
                                        className="trigger"
                                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                        onClick={this.toggle}
                                    />
                                </Header>
                                <Content style={{margin: '24px 16px', padding: 24, background: '#fff'}}>

                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/pro" component={Product} />
                                    </Switch>

                                </Content>
                            </Layout>
                        </Layout>

                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
