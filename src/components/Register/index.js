import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

import {
  RegisterPageContainer,
  RegisterPageSubContainer,
  RegisterImageContainer,
  RegisterImage,
  FormContainer,
  FormTitle,
  FormLabel,
  InputElement,
  SelectElement,
  RegisterButton,
  ErrorMessage,
} from './styledComponents'

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        username,
        activeTopicId,
        topicsList,
        showErrorMessage,
        onChangeActiveTopicId,
        onChangeUsername,
        onSubmitError,
        onChangeRegisteredStatus,
      } = value

      const onChangeTopic = event => {
        onChangeActiveTopicId(event.target.value)
      }

      const onChangeName = event => {
        onChangeUsername(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        if (username === '') {
          onSubmitError()
        } else {
          const {history} = props
          onChangeRegisteredStatus()
          history.replace('/')
        }
      }

      return (
        <>
          <Header />
          <RegisterPageContainer>
            <RegisterPageSubContainer>
              <RegisterImageContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </RegisterImageContainer>

              <>
                <FormContainer onSubmit={onSubmitForm}>
                  <FormTitle>Let us join</FormTitle>
                  <FormLabel htmlFor="name">NAME</FormLabel>
                  <InputElement
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={username}
                    onChange={onChangeName}
                  />
                  <FormLabel htmlFor="topic">Topics</FormLabel>
                  <SelectElement
                    id="topic"
                    value={activeTopicId}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </SelectElement>
                  <RegisterButton type="submit">Register Now</RegisterButton>
                  {showErrorMessage && (
                    <ErrorMessage>Please enter your name</ErrorMessage>
                  )}
                </FormContainer>
              </>
            </RegisterPageSubContainer>
          </RegisterPageContainer>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
