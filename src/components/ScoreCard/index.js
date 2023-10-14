import ImageContext from '../../context/ImageContext'

import {
  Container,
  Heading,
  ScoreContainer,
  ScoreText,
  Score,
} from './styledComponent'

const ScoreCard = () => (
  <ImageContext>
    {value => {
      const {score} = value
      return (
        <Container>
          <Heading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </Container>
      )
    }}
  </ImageContext>
)

export default ScoreCard
