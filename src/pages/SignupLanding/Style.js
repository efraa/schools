import styled from 'styled-components'
import SchoolsImg from '../../assets/images/schools.svg'
import { Media } from '../../styles'

export const BubbleSchool = styled.div`
  margin-top: -70px;
  position: absolute;

  ${Media.desktop`
    margin-left: 20%;
  `}

  ${Media.desktopFull`
    margin-left: 28%;
  `}
`

export const BubbleTeacher = styled.div`
  margin-top: 90px;
  position: absolute;

  ${Media.desktop`
    margin-left: -24px;
  `}

  ${Media.desktopFull`
    margin-left: 8%;
  `}
`

export const BubbleStudent = styled.div`
  margin-top: 150px;
  position: absolute;
  right: 0;
`

export const BubbleContainer = styled.div`
  min-height: 500px;
  width: 65%;
  background-image: url(${SchoolsImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  justify-content: center;
  position: relative;

  ${Media.mobile`
    width: 100%;
    background-position: center;
  `}
`

export const BubbleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -350px;

  ${Media.mobile`
    margin-top: 60px;
    justify-content: center;
  `}
`
