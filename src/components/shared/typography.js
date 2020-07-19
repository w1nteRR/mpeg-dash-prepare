import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 14px;
    font-family: Roboto, Arial;
    font-weight: 300;
`

export const Text = styled.span`
    font-size: ${props => props.size || '15px'};
    font-weight: ${props => props.weight || '500'};

    font-family: Roboto, Arial;
`

export const ActiveText = styled(Text)`
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 800;
    color: ${props => props.color || '#505050'};
`