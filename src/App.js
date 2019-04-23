import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card {...profile} />)}
  </div>
);

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment)
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
    <div>
      <div>{props.message}</div>
    </div>
  );
}

function PsTutorial() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <React.Fragment>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </React.Fragment>
  )
}

class Form extends Component {
  state = { userName: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github username"
          required />
        <button>Add Card</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    profiles: testData,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <PsTutorial />
          <Form />
          <CardList profiles={this.state.profiles} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
