import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

import {
  HomePageContainer,
  RegisteredHeading,
  RegisteredParagraph,
  InitialHeading,
  InitialParagraph,
  RegisterButton,
  MeetupImage,
} from './styledComponents'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {isRegistered, username, activeTopicId, topicsList} = value
      const topicObject = topicsList.find(each => each.id === activeTopicId)
      const topic = topicObject.displayText

      return (
        <>
          <Header />
          <HomePageContainer>
            {isRegistered ? (
              <>
                <RegisteredHeading>Hello {username}</RegisteredHeading>
                <RegisteredParagraph>Welcome to {topic}</RegisteredParagraph>
              </>
            ) : (
              <>
                <InitialHeading>Welcome to Meetup</InitialHeading>
                <InitialParagraph>
                  Please register for the topic
                </InitialParagraph>
                <Link to="/register">
                  <RegisterButton type="button">Register</RegisterButton>
                </Link>
              </>
            )}
            <MeetupImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomePageContainer>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
