import React from 'react'
import { Container } from '../../../core/containers/Container'
import { Title } from '../../../core/components/Title'

// Bubbles
import { Bubble } from '../../components/Bubble'
import SchoolImage from '../../../../images/bubble-school.svg'
import TeacherImage from '../../../../images/bubble-teacher.svg'
import StudentImage from '../../../../images/bubble-student.svg'

// Styles
import {
  BubbleSchool,
  BubbleTeacher,
  BubbleStudent,
  BubbleContainer,
  BubbleWrapper,
  SignupHead,
  SignupSubTitle,
  SignupText,
  SignupCard,
  SignupCardTitle,
  SignupCardText,
  Signup,
} from './Style'

const SignupLanding = () => (
  <Signup>
    <Container>
      <div className="col-12">
        <SignupHead>
          <Title text="Let’s create your account." />

          <SignupSubTitle>
            We're the platform that works for your school.
          </SignupSubTitle>

          <SignupText>
            Register your school for free and enjoy our platform for a semester
            of classes, <span> without commitments.</span>
          </SignupText>

          <SignupCard>
            <SignupCardTitle>Get Started</SignupCardTitle>

            <SignupCardText>
              Click on the bubble of the role you play in your organization.
            </SignupCardText>
          </SignupCard>
        </SignupHead>
      </div>
      <div className="col-12">
        <BubbleWrapper>
          <BubbleContainer>
            <BubbleTeacher>
              <Bubble to="/signup-teacher" image={TeacherImage} small />
            </BubbleTeacher>
            <BubbleSchool>
              <Bubble to="/signup-school" image={SchoolImage} />
            </BubbleSchool>
            <BubbleStudent>
              <Bubble to="/signup-student" image={StudentImage} small />
            </BubbleStudent>
          </BubbleContainer>
        </BubbleWrapper>
      </div>
    </Container>
  </Signup>
)

export default SignupLanding
