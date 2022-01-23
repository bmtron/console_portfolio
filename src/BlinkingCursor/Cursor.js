import React, {Component} from "react";


class Cursor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursorVis: false,
            cursorInterval: null
        }
    }
    componentWillMount() {
        this.blinkCursor();
    }

    blinkCursor() {
        var interval = setInterval(() => {
            this.setState({
                cursorVis: !this.state.cursorVis
            })
        }, 600);
        this.setState({
            cursorInterval: interval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }


    render() {
        return <div className={this.state.cursorVis ? "showCursor" : "hideCursor"}>
        </div>
    }
}

export default Cursor