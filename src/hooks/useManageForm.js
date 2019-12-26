import { useState, useEffect } from 'react'
import Validator from 'simple-react-validator'

import { validations } from '../utils/config'

export const useManageForm = ({ fields, connect }) => {
  const [isValid, setValid] = useState(false)
  const [data, setData] = useState({
    ...fields,
    validator: new Validator(validations),
  })
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault()
    if (isValid)
      await connect({
        ...data,
        validator: undefined,
      })
  }

  useEffect(() => {
    const validForm = () => {
      if (!data.validator.allValid()) {
        setValid(false)
        data.validator.showMessages()
      } else setValid(true)
    }
    validForm()
  }, [data])

  return {
    onSubmit,
    onChange,
    isValid,
    validator: data.validator,
    data,
    setData,
  }
}
