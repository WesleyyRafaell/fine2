import styled, { css } from 'styled-components'
import { ResultIndicatorProps } from '.'

export const Container = styled.div``

export const Text = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};
		margin-bottom: 1.2rem;
	`}
`

export const MoneySign = styled.p<Pick<ResultIndicatorProps, 'moneySignColor'>>`
	${({ theme, moneySignColor }) => css`
		font-size: 1.5rem;
		font-weight: ${theme.font.bold};
		color: ${theme.colors[moneySignColor!]};
		margin-bottom: 0.9rem;
	`}
`

export const Number = styled.p`
	${({ theme }) => css`
		font-size: 4.8rem;
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};
		padding-left: ${theme.font.sizes.xlarge};
	`}
`
