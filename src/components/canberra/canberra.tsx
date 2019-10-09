/* 
  Canberra
  - adjust which style of <head> elements to use
    - NextJS = next/head
    - GatsbyJS || CRA = react-helmet
*/

import React, { FunctionComponent } from "react"
// import Head from 'next/head'
import { Helmet } from "react-helmet"
import { base_helmet } from "../../utils/helmet"

interface ICanberra {
	title?: string
	description?: string
	[key: string]: any
}

export const Canberra: FunctionComponent<ICanberra> = ({ ...props }) => {
	// return <Helmet {...props}>{children}</Helmet>
	console.log("props => ", props)
	return (
		<Helmet>
			<title key="title">
				{props.title
					? `${props.title} - ${base_helmet.titleTemplate}`
					: base_helmet.title}
			</title>

			<meta
				key="description"
				name="description"
				content={
					props.description
						? props.description
						: (base_helmet as any).description
				}
			/>
			{base_helmet.meta &&
				base_helmet.meta.map((meta_item) => (
					<meta
						key={
							meta_item.name
								? meta_item.name
								: meta_item.property
								? meta_item.property
								: ""
						}
						name={meta_item.name && meta_item.name}
						property={meta_item.property && meta_item.property}
						content={meta_item.content}
					/>
				))}
			{base_helmet.link &&
				base_helmet.link.map((link_item) => (
					<link
						rel={link_item.rel}
						type={link_item.type}
						href={link_item.href}
					/>
				))}
		</Helmet>
	)
}
