//react-router-dom (routing)
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Profile } from './Pages/Profile';
import { Alert } from './components/Alert';
import { AlerState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';

function App() {
  return (
    <GithubState>
      <AlerState>
        <BrowserRouter>
          <Navbar />
          <div className={'container pt-4'}>
            <Alert alert={{ text: 'test alert' }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlerState>
    </GithubState>
  );
}

export default App;
