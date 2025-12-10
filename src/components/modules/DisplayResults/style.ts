import styled, { css } from 'styled-components'

import { IoClose } from 'react-icons/io5'

import * as Input from '@/components/elements/Input/style'

export const Container = styled.div`
	width: 47rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const ContainerForm = styled.div`
	width: 100%;
	margin-bottom: 4rem;
`

export const Box = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
export const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
`

export const WrapperInput = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 22rem;
	border-bottom: 1px solid #f7f7f754;
	padding-bottom: 0.5rem;
`

export const Label = styled(Input.Label)``

export const TextInput = styled(Input.Input)``

export const Icon = styled(IoClose)`
	${({ theme }) => css`
		cursor: pointer;
		color: ${theme.colors.white};
		font-weight: bold;
		font-size: 2rem;
	`}
`
