import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { widths, breakpoints } from "../../styles/variables"
import { rem } from "../../styles/mixins"
import "prismjs/themes/prism-tomorrow.css"

export const CodeSnippet: FunctionComponent<ICodeSnippet> = ({
	children,
	language,
}) => (
	<div className="gatsby-highlight" data-language="javascript">
		<pre className={`language-${language}`}>
			<code className="language-javascript">{children}</code>
		</pre>
	</div>
)

interface ICodeSnippet {
	children?: any
	language: string
}
