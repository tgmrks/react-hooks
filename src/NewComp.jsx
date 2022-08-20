import React from 'react';

class NewComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Click the button bellow to subscribe",
            btn: "Subscribe"
        };
    }

    BtnChange = () => {
        this.setState({
            message: "Hit the bell",
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
export default NewComp;