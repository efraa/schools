import React, { memo } from 'react'
import TimesImg from '../../../../contexts/images/times.svg'
import AccountDisabledImg from '../../../../contexts/images/account-disabled.svg'
import { Container, Row, Col } from 'reactstrap'
import { Button } from '../../../core/components/Forms/Button'
import { Times, Account, Title, Text } from './Style'
import { Link } from 'react-router-dom'

const AccountDisabled = memo(({ title, text, withButton }) => {
  return (
    <Account>
      <Container>
        <Row>
          <Col
            xs={{
              size: 12,
              order: 2,
            }}
            lg={{
              size: 6,
              order: 0,
            }}
          >
            <Times src={TimesImg} alt="" />
            <Title>
              {title
                ? title
                : 'Sorry, your account is temporarily deactivated.'}
            </Title>
            <Text>
              {text
                ? text
                : 'Your account is deactivated until it is validated by the organization to which you registered.'}
            </Text>
            {!withButton && (
              <Button
                as={Link}
                to="/logout"
                secound="true"
                style={{ display: 'inline-flex' }}
              >
                Log out
              </Button>
            )}
          </Col>
          <Col xs={12} lg={6}>
            <img src={AccountDisabledImg} alt="" />
          </Col>
        </Row>
      </Container>
    </Account>
  )
})

export default AccountDisabled
