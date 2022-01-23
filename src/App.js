import logo from './logo.svg';
import {React, Component} from "react";
import './App.css';

import Cursor from "./BlinkingCursor/Cursor";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            shiftKeyHeld: false,
            charCount: 0
        }
    }
    onKeyDownEvent = () => {
        document.addEventListener("keydown", this.mapKeyDownEvents, false);
    }

    onKeyUpEvent = () => {
        document.addEventListener("keyup", this.mapKeyUpEvents, false);
    }
    componentDidMount() {
        this.onKeyDownEvent();
        this.onKeyUpEvent();
    }
    mapKeyDownEvents = (e) => {
        let eCode = e.code.toString();
        let keyPressed = "";
        let inputPanel = document.getElementById("textInput");
        if ((eCode.includes("Key") || eCode.includes("Space")) && !eCode.includes("Shift")) {
            keyPressed = eCode[eCode.length - 1];
            keyPressed = this.state.shiftKeyHeld ? keyPressed.toUpperCase() : keyPressed.toLowerCase();
            if (eCode.includes("Space")) {
                inputPanel.append("\xA0")
            } else {
                inputPanel.append(keyPressed)
            }
            let currCount = this.state.charCount
            this.setState({
                charCount: currCount + 1
            });
            console.log(this.state.charCount)
        } else if (eCode.includes("Shift")) {

            this.setState({
                shiftKeyHeld: true
            });
        } else if (eCode.includes("Backspace")) {
            this.handleBackspace(inputPanel);
        }
        console.log(eCode)
    }
    mapKeyUpEvents = (e) => {
        let eCode = e.code.toString();
        let keyPressed = "";
        if (eCode.includes("Shift")) {
            this.setState({
                shiftKeyHeld: false
            });

        }
    }
    handleBackspace = (nodeElm) => {
        let currCount = this.state.charCount
        console.log(currCount)
        if (currCount != 0) {
            nodeElm.removeChild(nodeElm.childNodes[currCount - 1]);
            this.setState({
                charCount: currCount - 1
            })
        }
    }
    render() {
        return (
            <div className="App" id="AppElm">
                <div className="test1">
                    <div className="textInput" id="textInput"></div>
                    <Cursor/>
                </div>
            </div>
        );
    }

}

export default App;
