import styled, { css } from 'styled-components'
import * as CardStyle from '@/components/elements/Card/style'

export const Container = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.blue};
		padding: 5rem;
		min-height: 100vh;
	`}
`

export const Wrapper = styled.div`
	max-width: 120rem;
	margin: auto;
	display: flex;
`

export const Box = styled.div`
	width: 50%;
	display: flex;
	align-items: flex-start;

	&:first-child {
		justify-content: flex-start;
		flex-direction: column;
	}

	&:last-child {
		justify-content: flex-end;
	}
`
export const CardsContainer = styled.div`
	margin-top: 2rem;
	flex-wrap: wrap;

	${CardStyle.Container} {
		margin: 0 1rem 1rem 0;
	}

	display: flex;
`
