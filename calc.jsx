class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "0",
            output: "",
            buffer: ""
        };
        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
        this.handleOperatorClick = this.handleOperatorClick.bind(this);
        this.handleEqualsClick = this.handleEqualsClick.bind(this);
        this.handleDecimalClick = this.handleDecimalClick.bind(this);
    }

    handleNumberClick(e) {
        const { value } = e.target;

        this.setState((state) => {
            const operators = ["+", "-", "*", "/"];
            if (state.input === "0") {
                return { input: `${value}`, buffer: `${value}` };
            } else if (operators.some((oper) => oper === state.input)) {
                return {
                    input: `${value}`,
                    buffer: (state.buffer += value)
                };
            }
            return {
                buffer: (state.buffer += value),
                input: (state.input += value)
            };
        });
    }

    handleClearClick(clear) {
        this.setState({ input: "0", output: "", buffer: "" });
    }

    handleOperatorClick(e) {
        const { value } = e.target;
        this.setState((state) => {
            return { input: value, buffer: (state.buffer += value) };
        });
    }

    handleEqualsClick() {
        const lastCharacter = this.state.buffer[this.state.buffer.length - 1];

        if (/[0-9]/.test(lastCharacter)) {
            this.setState((state) => {
                return {
                    output: math.evaluate(state.buffer),
                    input: math.evaluate(state.buffer),
                    buffer: (state.buffer += "=")
                };
            });
        } else {
            let split = this.state.buffer.split("");
            split.pop();
            split = split.join("");
            this.setState({
                output: math.evaluate(split),
                input: math.evaluate(split),
                buffer: (split += "=")
            });
        }
    }

    handleDecimalClick() {
        this.setState((state) => {
            return { buffer: (state.buffer += "."), input: (state.input += ".") };
        });
    }

    render() {
        return (
            <div id="input-area">
                <button id="zero" value="0" onClick={this.handleNumberClick}>
                    0
        </button>
                <button id="one" value="1" onClick={this.handleNumberClick}>
                    1
        </button>
                <button id="two" value="2" onClick={this.handleNumberClick}>
                    2
        </button>
                <button id="three" value="3" onClick={this.handleNumberClick}>
                    3
        </button>
                <button id="four" value="4" onClick={this.handleNumberClick}>
                    4
        </button>
                <button id="five" value="5" onClick={this.handleNumberClick}>
                    5
        </button>
                <button id="six" value="6" onClick={this.handleNumberClick}>
                    6
        </button>
                <button id="seven" value="7" onClick={this.handleNumberClick}>
                    7
        </button>
                <button id="eight" value="8" onClick={this.handleNumberClick}>
                    8
        </button>
                <button id="nine" value="9" onClick={this.handleNumberClick}>
                    9
        </button>
                <button id="subtract" value="-" onClick={this.handleOperatorClick}>
                    -
        </button>
                <button id="add" value="+" onClick={this.handleOperatorClick}>
                    +
        </button>
                <button id="multiply" value="*" onClick={this.handleOperatorClick}>
                    *
        </button>
                <button id="divide" value="/" onClick={this.handleOperatorClick}>
                    /
        </button>
                <button id="equals" onClick={this.handleEqualsClick}>
                    =
        </button>
                <button id="clear" onClick={this.handleClearClick}>
                    Clear
        </button>
                <button id="decimal" onClick={this.handleDecimalClick}>
                    .
        </button>

                <div id="display">{this.state.input}</div>
                <p>
                    {this.state.buffer}
                    {this.state.output}
                </p>
            </div>
        );
    }
}

const targetNode = document.getElementById("main");

ReactDOM.render(<Calculator />, targetNode);
