import React from 'react'
import { Button } from '../Forms/Button'
import { Title } from '../Title'
import { Field } from '../Forms/Field'

const Header = ({ setOnBoarding }) => {
  const onSubmit = async e => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className="header__container">
      <div className="header__title">
        <Title text="What Pokémon are you looking for?" />
      </div>
      <div className="header__form">
        <form onSubmit={e => onSubmit(e)}>
          <div className="row no-gutters">
            <Field
              placeholder="Search Pokémon..."
              name="search"
              wrapper="col-lg"
            />
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
              <Button text="Search" type="submit" classes="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

/* const mapStateToProps = state => ({
  user: state.auth.user,
}) */

export default Header
