import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MeetupContext from './context/MeetupContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTopicId: topicsList[0].id,
    username: '',
    isRegistered: false,
    showErrorMessage: false,
  }

  onChangeUsername = value => {
    this.setState({username: value})
  }

  onChangeActiveTopicId = value => {
    this.setState({activeTopicId: value})
  }

  onSubmitError = () => {
    this.setState(prevState => ({
      showErrorMessage: !prevState.showErrorMessage,
    }))
  }

  onChangeRegisteredStatus = () => {
    this.setState(prevState => ({
      isRegistered: !prevState.isRegistered,
    }))
  }

  render() {
    const {activeTopicId, username, isRegistered, showErrorMessage} = this.state

    return (
      <MeetupContext.Provider
        value={{
          topicsList,
          activeTopicId,
          username,
          isRegistered,
          showErrorMessage,
          onChangeUsername: this.onChangeUsername,
          onChangeActiveTopicId: this.onChangeActiveTopicId,
          onSubmitError: this.onSubmitError,
          onChangeRegisteredStatus: this.onChangeRegisteredStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
