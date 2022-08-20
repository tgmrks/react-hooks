import React from 'react';

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Click the button",
            btn: "Subscribe"
        };
    }

    BtnChange = () => {
        this.setState({
            message: "Button was clicked",
            btn: "Subscribed"
        });
    };

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.BtnChange}>{this.state.btn}</button>
            </div>
        );
    }
}
export default ClassComp;