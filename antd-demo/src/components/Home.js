import React, {Component} from 'react';

class Home extends Component {
    componentWillReceiveProps(nextProps) {
        // locationChanged
        //const locationChanged = nextProps.location !== this.props.location
        console.log(this.props.location)
    }

    render(){
        return (
            <p>home {this.props.location.pathname}</p>
        )
    }
}
export default Home;