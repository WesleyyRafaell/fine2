import styled from 'styled-components'
import { Container as DisplayContainer } from '../DisplayResults/style'
import { Container as CardContainer } from '../CardTransaction/style'
import { Container as ContainerForm } from '../FormNewTransaction/style'

export const Container = styled.div`
	${DisplayContainer} {
		margin-bottom: 7.5rem;
	}

	${ContainerForm} {
		margin-top: 7.5rem;
	}

	${CardContainer} {
		margin: 3rem 0;
	}
`
