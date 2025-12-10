// import { screen, waitFor } from '@testing-library/react'
// import { renderWithTheme } from '@/utils/tests/helper'
// import userEvent from '@testing-library/user-event'

// import Card from '.'

// describe('<Card />', () => {
// 	it('should change height of Card on hover', async () => {
// 		renderWithTheme(<Card />)

// 		const CardElement = screen.getByTestId('Card')

// 		expect(CardElement).toBeInTheDocument()
// 		expect(CardElement).toHaveStyle({
// 			height: '81px',
// 		})

// 		userEvent.hover(CardElement)

// 		await waitFor(() => {
// 			expect(CardElement).toHaveStyle({
// 				height: '109px',
// 			})
// 		})
// 	})

// 	it('should show icon on hover', async () => {
// 		renderWithTheme(<Card />)

// 		const IconElement = screen.getByTestId('ContainerIcon')
// 		expect(IconElement).toHaveStyle({
// 			opacity: '0',
// 		})

// 		userEvent.hover(IconElement)

// 		await waitFor(() => {
// 			expect(IconElement).toHaveStyle({
// 				opacity: '1',
// 			})
// 		})
// 	})
// })
