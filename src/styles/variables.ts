import { rem } from "./mixins"

export const colors: ColorProps = {
	brand: {
		primary: "#BD003D",
		secondary: "#ca1736",
		tertiary: "#e73655",
		quaternary: "#FC726A",
	},
	accent: {
		lighter: "#ffffff",
		light: "#8692A6",
		base: "#384559",
		dark: "#1f2A3C#",
		darker: "#000000",
	},
	grey: {
		lighter: "#eeeded",
		light: "#b1b3b5",
		base: "#8a8a8a",
		dark: "#676b6f",
		darker: "#262626",
	},
	success: "#37b635",
	warning: "#ec1818",
	code: "#fcf6f0",
	gradientStart: "#dfdfdf",
	gradientEnd: "#fdfdfd",

	white: "#fff",
	black: "#000",
	syntax: {
		javascript: "#f1e05a",
		json: "#40d47e",
		html: "#e34c26",
	},
}

export const fonts: StringObjProps = {
	sans_serif:
		'"Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
	sans_body:
		'"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
	serif: '"Abril Fatface", Georgia, "Times New Roman", Times, serif',
	monospace:
		'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
}
export const font_weight: NumberObjProps = {
	thin: 100,
	light: 300,
	regular: 400,
	medium: 500,
	semi_bold: 600,
	bold: 700,
	extra_bold: 800,
	black: 900,
}

export const breakpoints: NumberObjProps = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
}

export const widths: NumberObjProps = {
	xs: 480,
	sm: 720,
	md: 960,
	lg: 1200,
	xl: 1440,
}
interface DimensionsProps {
	font_size: NumberObjProps
	font_sizes: NumberObjProps
	line_height: NumberObjProps
}
export const dimensions: DimensionsProps = {
	font_size: {
		small: 14,
		regular: 16,
		large: 18,
	},
	font_sizes: {
		h1: rem(40),
		h2: rem(32),
		h3: rem(24),
		h4: rem(20),
		h5: rem(20),
		h6: rem(20),
		p: rem(20),
	},
	line_height: {
		regular: 1.45,
		heading: 1.2,
	},
}

export const heights = {
	header: 60,
}

// types

/* tslint:disable:max-line-length */
interface NumberObjProps {
	[key: string]: number
}
interface StringObjProps {
	[key: string]: string | { [key: string]: string }
}
interface ColorProps {
	brand: {
		primary: string
		secondary: string
		tertiary: string
		quaternary: string
	}
	accent: {
		lighter: string
		light: string
		base: string
		dark: string
		darker: string
	}
	grey: {
		lighter: string
		light: string
		base: string
		dark: string
		darker: string
	}
	syntax: {
		javascript: string
		json: string
		html: string
	}
	success: string
	warning: string
	code: string
	gradientStart: string
	gradientEnd: string
	black: string
	white: string
}
