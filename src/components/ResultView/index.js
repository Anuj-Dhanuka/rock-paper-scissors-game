import {Component} from 'react'

import ImageContext from '../../context/ImageContext'

import {
  Container,
  InnerContainer,
  ImgContainer,
  Image,
  Heading,
  Button,
} from './styledComponent'

class ResultView extends Component {
  componentDidMount() {}

  render() {
    return (
      <ImageContext.Consumer>
        {value => {
          const {
            choicesList,
            clickedObject,
            playAgain,
            randomNumber,
            resultText,
          } = value

          const onClickPlayAgain = () => {
            playAgain()
          }

          return (
            <Container>
              <InnerContainer>
                <ImgContainer>
                  <Image src={clickedObject.imageUrl} alt="your choice" />
                </ImgContainer>

                <ImgContainer>
                  <Image
                    src={choicesList[randomNumber].imageUrl}
                    alt="opponent choice"
                  />
                </ImgContainer>
              </InnerContainer>
              <Heading>{resultText}</Heading>
              <Button type="button" onClick={onClickPlayAgain}>
                PLAY AGAIN
              </Button>
            </Container>
          )
        }}
      </ImageContext.Consumer>
    )
  }
}

export default ResultView
