/* Helpers */

/*
  CapitaliseFirstLetter
*/
export const CapitaliseFirstLetter = (text: String) =>
	text.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})

/*
  Slugify
  - string replace ' ' with '-' (or other characters as optional params)
  - can be used as an Unslugify with props passed in
*/
export const Slugify = (
	text: String,
	replaceThis?: String,
	withThis?: String
) =>
	text
		? text
				.replace(
					new RegExp(`${replaceThis ? replaceThis : " "}`, "g"),
					`${withThis ? `'${withThis}'` : "-"}`
				)
				.toLowerCase()
		: "invalid string passed to Slugify"

/*
  MaxLengthString
  - add elipses to strings that are too long
*/
export const MaxLengthString = (string: string, max_length: number) =>
	string.length > max_length
		? string.substring(0, max_length - 3) + "..."
		: string

/*
  RepeatElement
*/
export const RepeatElement = (number: number, element: any) => {
	const allElements: Array<any> = []
	Array.from({ length: number }).forEach(() => {
		allElements.push(element)
	})
	return allElements.join("")
}
