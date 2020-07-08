import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};

    display: flex;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${props => props.direction || 'row'};

    margin: ${props => props.m || '0'};
    padding: ${props => props.p || '0'};

    background-color: ${props => props.bgColor || ''}
`