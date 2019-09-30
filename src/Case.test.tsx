import * as React from 'react'
import { render, cleanup } from '@testing-library/react'

import Case from './Case'
import When from './When'

afterEach(cleanup)

describe('Case', () => {
  it('should render the first element found with When true', () => {
    const { queryByText } = render(
      <Case>
        <When is={true} render={() => <h1>first</h1>} />
        <When is={true} render={() => <h1>second</h1>} />
      </Case>
    )

    expect(queryByText('first')).not.toBeNull()
    expect(queryByText('second')).toBeNull()
  })

  it('should render the second When', () => {
    const { queryByText } = render(
      <Case>
        <When is={false} render={() => <h1>first</h1>} />
        <When is={true} render={() => <h1>second</h1>} />
      </Case>
    )

    expect(queryByText('first')).toBeNull()
    expect(queryByText('second')).not.toBeNull()
  })

  it('should render nothing with all matches false', () => {
    const { queryByText } = render(
      <Case>
        <When is={false} render={() => <h1>first</h1>} />
        <When is={false} render={() => <h1>second</h1>} />
      </Case>
    )

    expect(queryByText('first')).toBeNull()
    expect(queryByText('second')).toBeNull()
  })

  it('should render all truthy elements', () => {
    const { queryByText } = render(
      <Case nonExclusive>
        <When is={true} render={() => <h1>first</h1>} />
        <When is={false} render={() => <h1>second</h1>} />
        <When is={true} render={() => <h1>third</h1>} />
      </Case>
    )

    expect(queryByText('first')).not.toBeNull()
    expect(queryByText('second')).toBeNull()
    expect(queryByText('third')).not.toBeNull()
  })
})
