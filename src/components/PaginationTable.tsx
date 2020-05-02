import React from 'react'
import { ApolloTableQL } from 'react-tableql'

import { ALL_PEOPLE } from '../common/queries'

const PaginationTable = () => <ApolloTableQL query={ALL_PEOPLE} pagination />

export default PaginationTable