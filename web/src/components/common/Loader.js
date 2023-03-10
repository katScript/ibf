import React, {Component} from "react";

class Loader extends Component {
    render() {
        return (
            <div id={this.props.id} className="pre-loader-com">
                <div className="loader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Loader;