import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {App} from '.'

afterEach(cleanup)

describe('App', () => {
    it('should render text', () => {
        const {getByText} = render(<App />)
        expect(getByText('Hello world!')).toBeInTheDocument();
    })
})