import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)``

export const Card = styled(motion.div)`
	${({ theme }) => css`
		width: 187px;
		cursor: pointer;
		border-radius: 12px;
		text-align: center;
		padding-top: 27px;
		background-color: ${theme.colors.orange};
	`}
`

export const Text = styled.p`
	${({ theme }) => css`
		font-size: 18px;
		font-weight: bold;
		color: ${theme.colors.white};
	`}
`

export const ContainerIcon = styled(motion.div)`
	padding-top: 13.5px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const BoxIcon = styled.div`
	background: #00000000;
	display: inline-block;
	width: 7px;
	border-radius: 50%;
	width: 28.3px;
	height: 28.3px;
	display: flex;
	justify-content: center;
	align-items: center;

	transition: all 0.5s;

	:hover {
		background: #0000001a;
	}
`
export const WrapperModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #00000069;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Modal = styled.div`
	${({ theme }) => css`
		width: 45rem;
		padding: 2rem 2rem 2.5rem 2rem;
		background: ${theme.colors.white};
		border-radius: 0.625rem;
		transform: rotate(-1deg);
	`}
`
export const TitleModal = styled.h3`
	${({ theme }) => css`
		color: ${theme.colors.darkGray};
		font-size: 1.7rem;
	`}
`
export const ContainerButtonsModal = styled.div`
	padding-top: 5rem;
	display: flex;
	justify-content: space-between;
`
