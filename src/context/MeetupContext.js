import React from 'react'

const MeetupContext = React.createContext({
  username: '',
  activeTopicId: '',
  topicsList: [],
  isRegistered: false,
  showErrorMessage: false,
  onChangeUsername: () => {},
  onChangeActiveTopicId: () => {},
  onSubmitError: () => {},
  onChangeRegisteredStatus: () => {},
})

export default MeetupContext
