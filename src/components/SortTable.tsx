import React from 'react'
import { ApolloTableQL } from 'react-tableql'

import { ALL_FILMS } from '../common/queries'

const SortTable = () => <ApolloTableQL query={ALL_FILMS} sort />

export default SortTable