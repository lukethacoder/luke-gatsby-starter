declare module "*.scss"
declare module "*.css"
declare module "*.svg"
declare module "*.png"
declare module "*.jpg"
type ReactNode =
	| ReactChild
	| ReactFragment
	| ReactPortal
	| boolean
	| null
	| undefined
