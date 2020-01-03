import React from 'react'
import { render } from 'react-dom'
import './index.css'

// 此处的window.root表示index.html中的<div id="root"></div>
render(<h1>我是reactDOM渲染的</h1>, window.root)