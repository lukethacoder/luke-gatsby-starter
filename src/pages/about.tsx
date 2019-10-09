import React from "react"

import { Intro } from "../components/intro"
import { Highlight } from "../components/intro/highlight"
import { Banner } from "../components/banner"
import { Container } from "../components/container"
import { Canberra } from "../components/canberra"
import { Link } from "../components/link"
import { SpringFadeUp, TrailFadeUp } from "../utils/animations"

export default () => (
	<>
		<Canberra title="About" />

		<Banner>
			<h2>
				An <Highlight>about</Highlight> page eh?
			</h2>
		</Banner>

		<Container>
			<Intro>
				<SpringFadeUp>
					<p>
						This starter was created as a{" "}
						<Highlight>base</Highlight> for future projects built
						using <Highlight>GatsbyJS</Highlight>.
						<br />
						<br />
						Keeping the template <Highlight>
							source-less
						</Highlight>{" "}
						means you can hook any source you want in without having
						to worry about removing an existing structure.
						<br />
						<br />
						Want to find out more, head on over to Github for the{" "}
						<Link
							name="github documentation"
							to="https://github.com/lukethacoder/luke-gatsby-starter"
						>
							Documentation
						</Link>
						.
					</p>
				</SpringFadeUp>
			</Intro>
		</Container>
	</>
)
