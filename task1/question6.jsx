/** Can you explain the problem with the following code, and how to fix
it. **/
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById("root"));

// answer:
// it will only +1 after user clicked the button
// it is the React batch update issue,
// when you setState multiple times, it doesn't update the state immediately. It schedules the update and apply at the end.

// we can use previous state to fix the issue
// this.setState((prevState) => ({ count: prevState.count + 1 }));
// this.setState((prevState) => ({ count: prevState.count + 1 }));
// this.setState((prevState) => ({ count: prevState.count + 1 }));

// or simply combine all the updates
// this.setState((prevState) => ({ count: prevState.count + 3 }));
