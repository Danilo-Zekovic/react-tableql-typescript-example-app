import React from 'react'
import { ApolloTableQL } from 'react-tableql'

import { ALL_FILMS } from '../common/queries'

const DefaultTable = () => <ApolloTableQL query={ALL_FILMS} />

export default DefaultTable