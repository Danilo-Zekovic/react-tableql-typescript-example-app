import React from 'react'
import { ApolloTableQL } from 'react-tableql'

import { ALL_FILMS } from '../../common/queries'

import "./customStylesTable.css"

const CustomStylesTable = () => <ApolloTableQL query={ALL_FILMS} styles={{

  thead: 'custom-table-header',

}} />

export default CustomStylesTable