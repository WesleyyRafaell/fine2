import styled, { css } from 'styled-components'
import { InputProps } from '.'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`
export const Label = styled.label`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: 1.6rem;
		margin-bottom: 1rem;
		font-weight: ${theme.font.bold};
	`}
`
export const ContainerInput = styled.div`
	display: flex;
`

export const Input = styled.input<Pick<InputProps, 'inputSize'>>`
	${({ theme, inputSize }) => css`
		width: ${inputSize === 'regular' ? '17.9rem' : '7.9rem'};
		background: none;
		border: none;
		font-size: 1.6rem;
		outline: none;
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};

		::placeholder {
			color: #ffffff7d;
		}
	`}
`
export const MoneySymbol = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};
		font-size: 1.4rem;
		margin-right: 0.8rem;
	`}
`

export const ErrorLabel = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.darkRed};
		font-weight: ${theme.font.bold};
		font-size: 1.1563rem;
		margin-top: 0.3375rem;
	`}
`
