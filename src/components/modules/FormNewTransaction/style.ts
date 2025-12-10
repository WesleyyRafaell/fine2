import styled, { css } from 'styled-components'

export const Container = styled.form`
	${({ theme }) => css`
		background-color: ${theme.colors.orange};
		width: 47rem;
		border-radius: 2.7rem;
		height: 16.3rem;
		display: flex;
		justify-content: space-between;
		padding: 2.4rem 3.1rem;
	`}
`
export const Box = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`
