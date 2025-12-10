import styled, { css } from 'styled-components'

export const Button = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.primary};
		color: ${theme.colors.white};
		width: 152px;
		height: 66px;
		border-radius: 12px;
		border: none;
		font-weight: bold;
		cursor: pointer;
	`}
`
