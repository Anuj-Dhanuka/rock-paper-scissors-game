import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #ffffff;
  width: 80%;
  padding: 5px;
  border-radius: 12px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: Bree Serif;
  color: #ffffff;
  font-size: 22px;
  font-weight: 300;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreText = styled.p`
  font-family: Roboto;
  color: #223a5f;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0px;
  padding-bottom: 0px;
`

export const Score = styled.p`
  font-family: Roboto;
  color: #223a5f;
  font-size: 36px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 16px;
  padding-bottom: 0px;
`
