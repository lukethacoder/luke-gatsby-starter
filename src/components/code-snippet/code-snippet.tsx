import React, { FunctionComponent } from "react"
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
