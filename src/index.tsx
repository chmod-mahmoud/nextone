import React from "react";
import {createRoot} from 'react-dom/client'

import {App} from '@/components'

const wrapper = document.querySelector('#root')
if (wrapper)
{
    const root = createRoot(wrapper)
    root.render(<App />)
} else throw new Error('Cannot found root element')

