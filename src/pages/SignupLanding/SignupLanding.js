import React from 'react'
import { Container } from '../../containers/Container'
import { Title } from '../../components/Title'

// Bubbles
import { Bubble } from '../../components/Bubble'
import SchoolImage from '../../assets/images/bubble-school.svg'
import TeacherImage from '../../assets/images/bubble-teacher.svg'
import StudentImage from '../../assets/images/bubble-student.svg'

// Styles
import {
  BubbleSchool,
  BubbleTeacher,
  BubbleStudent,
  BubbleContainer,
  BubbleWrapper,
} from './Style'

const SignupLanding = () => (
  <div className="signup fade">
    <Container>
      <div className="col-12">
        <div className="signup__head">
          <Title text="Let’s create your account." />

          <h4 className="signup__subtitle">
            We're the platform that works for your school.
          </h4>

          <p className="signup__text">
            Register your school for free and enjoy our platform for a semester
            of classes, <span> without commitments.</span>
          </p>

          <div className="signup__card">
            <p className="signup__card-title">Get Started</p>

            <p className="signup__card-text">
              Click on the bubble of the role you play in your organization.
            </p>
          </div>
        </div>
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
  </div>
)

export default SignupLanding
