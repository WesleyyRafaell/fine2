import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import { lighten } from 'polished'

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
	${({ theme, color }) => css`
		background-color: ${theme.colors[color!]};
		color: ${theme.colors.white};
		display: flex;
		justify-content: center;
		align-items: center;
		width: 17rem;
		height: 4.2rem;
		border-radius: 13px;
		border: none;
		font-size: 1.6rem;
		font-weight: ${theme.font.bold};
		cursor: pointer;
		box-shadow: 2.5px 2.5px 4.3px #0000005c;
		transform: rotate(-1.5deg);

		:hover {
			background-color: ${lighten(0.1, theme.colors[color!])};
		}
	`}
`
