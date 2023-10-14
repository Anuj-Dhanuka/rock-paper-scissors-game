import {GrClose} from 'react-icons/gr'

import Popup from 'reactjs-popup'

import ImageContext from '../../context/ImageContext'

import ScoreCard from '../ScoreCard'
import SuccessView from '../SuccessView'
import ResultView from '../ResultView'

import {
  RpsContainer,
  PopupContent,
  RulesBtn,
  CloseBtn,
  RulesImg,
} from './styledComponent'

const RockPaperScissor = () => (
  <ImageContext.Consumer>
    {value => {
      const {showResult} = value
      return (
        <RpsContainer>
          <ScoreCard />
          {!showResult && <SuccessView />}
          {showResult && <ResultView />}

          <Popup trigger={<RulesBtn className="button">Rules</RulesBtn>} modal>
            {close => (
              <PopupContent>
                <CloseBtn type="button" onClick={close}>
                  <GrClose />
                </CloseBtn>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContent>
            )}
          </Popup>
        </RpsContainer>
      )
    }}
  </ImageContext.Consumer>
)

export default RockPaperScissor
