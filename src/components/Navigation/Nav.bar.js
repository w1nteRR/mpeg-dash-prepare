import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Card } from '../shared/styled/Card'
import { Container } from '../shared/layout'

import { Title, Text } from '../shared/typography'
import { dark } from '../shared/colors'

export const NavBar = () => {

    const title = useSelector(state => state.file.metadata.format.tags.title)

    return (
        <Container w='90%'>
            <Card w='inherit'>
                <Container justify='space-between'>
                    <Container justify='flex-start'>
                        <Title>{title}</Title>
                    </Container> 
                    <Container justify='flex-end'>
                        {
                            links.map((link, index) => (
                                <NavLink 
                                    style={linkStyle} 
                                    activeStyle={activeLinkStyle} 
                                    to={link.path} 
                                    key={index}
                                >
                                    <Text>
                                        {link.name}
                                    </Text>
                                </NavLink>
                            ))
                        }
                    </Container>
                </Container>
            </Card>
        </Container>
    )
}

const links =  [
    {
        name: 'Info',
        path: '/main/info'
    },
    {
        name: 'FFmpeg',
        path: '/main/ffmpeg'
    },
    {
        name: 'Gpac',
        path: '/main/gpac'
    }
]

const linkStyle = {
    textDecoration: 'none',
    margin: '10px',
    color: dark,
    opacity: 0.8
}

const activeLinkStyle = {
    opacity: 1
}
