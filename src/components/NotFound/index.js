import {
  NotFoundPageContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundMessage,
} from './styledComponents'

const NotFound = () => (
  <NotFoundPageContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundMessage>
      We are sorry, the page you requested could not be found
    </NotFoundMessage>
  </NotFoundPageContainer>
)

export default NotFound
