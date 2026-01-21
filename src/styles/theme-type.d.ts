import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		grid: {
			container: string
			containerSmall: string
			gutter: string
		}
		border: {
			radius: string
		}
		font: {
			family: string
			light: number
			normal: number
			bold: number
			sizes: {
				xsmall: string
				small: string
				medium: string
				large: string
				xlarge: string
				xxlarge: string
				xxxlarge: string
			}
		}
		colors: {
			primary: string
			mainBg: string
			lightBg: string
			white: string
			black: string
			lightGray: string
			blue: string
			lightBlue: string
			darkBlue: string
			gray: string
			darkGray: string
			green: string
			darkGreen: string
			red: string
			darkRed: string
			orange: string
			revenue: string
			expense: string
		}
		spacings: {
			xxsmall: string
			xsmall: string
			small: string
			medium: string
			large: string
			xlarge: string
			xxlarge: string
		}
		layers: {
			base: number
			menu: number
			overlay: number
			modal: number
			alwaysOnTop: number
		}
		transition: {
			default: string
			fast: string
		}
	}
}
