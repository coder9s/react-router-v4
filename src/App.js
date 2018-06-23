import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router ,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    Home
  </div>
);

const About = () => (
  <div>
    About
  </div>
);

const Topics = ({match}) => (
  <div>
    Topics
    <ul>
      <li><Link to={`${match.url}/render-with-react`}>Render with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-vs-state`}>Props vs State</Link></li>
    </ul>
    <Route path="/topics/:topicId" component={Topic} />
    <Route exact path={match.url} render={() => (
        <h2>please choose a topics</h2>
      )} />
  </div>
);

const Topic = ({match}) => console.log(match) || (
  <div>
    {match.params.topicId}
  </div>
);
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    );
  }
}

export default App;
