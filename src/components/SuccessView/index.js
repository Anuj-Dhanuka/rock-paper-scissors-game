import {Container, InnerContainer, CustomBtn, Image} from './styledComponent'

import ImageContext from '../../context/ImageContext'

const SuccessView = () => (
  <ImageContext.Consumer>
    {value => {
      const {choicesList, onClickOption} = value

      const onClickRockBtn = () => {
        const clickedObject = choicesList[0]
        onClickOption(clickedObject)
      }

      const onClickScissorBtn = () => {
        const clickedObject = choicesList[1]
        onClickOption(clickedObject)
      }

      const onClickPaperBtn = () => {
        const clickedObject = choicesList[2]
        onClickOption(clickedObject)
      }
      return (
        <Container>
          <InnerContainer>
            <CustomBtn
              type="button"
              onClick={onClickRockBtn}
              data-testid="rockButton"
            >
              <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
            </CustomBtn>
            <CustomBtn
              type="button"
              onClick={onClickScissorBtn}
              data-testid="scissorsButton"
            >
              <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
            </CustomBtn>
          </InnerContainer>
          <CustomBtn
            type="button"
            onClick={onClickPaperBtn}
            data-testid="paperButton"
          >
            <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </CustomBtn>
        </Container>
      )
    }}
  </ImageContext.Consumer>
)

export default SuccessView
