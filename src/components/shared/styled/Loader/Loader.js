import React from 'react'

import { Container } from '../../layout'

import './style.scss'

export const Loader = ({ w, h }) => 
    <Container width={w} height={h}>
        <div className="lds-dual-ring"></div>
    </Container>
