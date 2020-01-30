import React, { memo } from 'react'
import { Picture } from '../../../../../components/Picture'
import { Sidebar } from './Style'

export const ProfileSidebar = memo(props => (
  <Sidebar>
    <Picture width="180px" />
  </Sidebar>
))
