class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState(state => ({
            event: state.input = event.target.value
        }));
    }
    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange}></input>
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};