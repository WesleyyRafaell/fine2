// import { fireEvent, screen, waitFor } from '@testing-library/react'
// import { renderWithTheme } from '@/utils/tests/helper'
// import userEvent from '@testing-library/user-event'

// import CardTransaction from '.'

// describe('<CardTransaction />', () => {
// 	it('should render card name and value of CardTransaction', async () => {
// 		renderWithTheme(<CardTransaction name="Luz" value="255" />)

// 		expect(screen.getByText(/Luz/i)).toBeInTheDocument()
// 		expect(screen.getByText(/255/i)).toBeInTheDocument()
// 	})

// 	it('should change height of CardTransaction in hover', async () => {
// 		renderWithTheme(<CardTransaction name="Luz" value="255" />)

// 		const card = screen.getByTestId('card')

// 		expect(card).toHaveStyle({
// 			height: '9.1rem',
// 		})

// 		userEvent.hover(card)

// 		await waitFor(() => {
// 			expect(card).toHaveStyle({
// 				height: '15rem',
// 			})
// 		})
// 	})

// 	it('should change type of CardTransaction to expense ', async () => {
// 		renderWithTheme(<CardTransaction name="Luz" value="255" />)

// 		const cardType = screen.getByTestId('cardType')

// 		expect(cardType).toHaveStyle({
// 			'background-color': '#21BE3A',
// 		})

// 		fireEvent.click(screen.getByTestId('buttonRed'))

// 		await waitFor(() => {
// 			expect(cardType).toHaveStyle({
// 				'background-color': '#DD4747',
// 			})
// 		})
// 	})

// 	it('should change type of CardTransaction to revenue', async () => {
// 		renderWithTheme(<CardTransaction name="Luz" value="255" />)

// 		const cardType = screen.getByTestId('cardType')

// 		expect(cardType).toHaveStyle({
// 			'background-color': '#21BE3A',
// 		})

// 		fireEvent.click(screen.getByTestId('buttonRed'))

// 		await waitFor(() => {
// 			expect(cardType).toHaveStyle({
// 				'background-color': '#DD4747',
// 			})
// 		})

// 		fireEvent.click(screen.getByTestId('buttonGreen'))

// 		await waitFor(() => {
// 			expect(cardType).toHaveStyle({
// 				'background-color': '#21BE3A',
// 			})
// 		})
// 	})

// 	it('should disable card on button click', () => {
// 		renderWithTheme(<CardTransaction name="Luz" value="255" />)

// 		const card = screen.getByTestId('card')

// 		expect(card).toHaveStyle({
// 			'background-color': '#757EFF',
// 		})

// 		fireEvent.click(screen.getByTestId('buttonDisableCard'))

// 		expect(card).toHaveStyle({
// 			'background-color': '#5f65c5',
// 		})
// 	})
// })
