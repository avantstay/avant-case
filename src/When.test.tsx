import * as React from 'react'
import { render } from '@testing-library/react'

import When from './When'

describe('When', () => {
  it('should return null if condition is equal false', () => {
    const { queryByText } = render(
      <When is={false} render={() => <h1>hey</h1>} />
    )

    expect(queryByText('hey')).toBeNull()
  })

  it('should return Then if condition is equal true', () => {
    const { queryByText } = render(
      <When is={true} render={() => <h1>hey</h1>} />
    )

    expect(queryByText('hey')).not.toBeNull()
  })
})
