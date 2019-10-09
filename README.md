# Luke Gatsby Starter

Kick off your project with this opinionated boilerplate. This barebones starter ships with the main Gatsby configuration files you might need. This starter was inspired by [ueno-gatsby-starter](https://github.com/ueno-llc/ueno-gatsby-starter)

# Installation

Install:

> make sure GatsbyJS is globally installed

```bash
# yarn
yarn global add gatsby-cli

# npm
npm install -g gatsby-cli
```

```bash
gatsby new my-app "https://github.com/lukethacoder/luke-gatsby-starter#master --recursive"
```

Development Environment:

```bash
# yarn
yarn dev

# npm
npm run dev
```

# Things to know

There are couple of things that are good to know about this starter, compared to the default gatsby starter.

## TypeScript

We encourage TypeScript usage and have included basic linting.

-   Avoid `export default ...` - the only place you absolutely need to do this is in `./pages/*`. Rather `export const Module = ...` and `import { Module } from './file'` ([details](https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html))

See the [TypeScript Handbook](https://basarat.gitbooks.io/typescript) for more tips and tricks

## Naming Conventions & Folder Structure

#### Components

Component files and folders should be named using **kebab-case** and follow the folder structure of:

```
...
└── components
|   └── header
|   |   ├── index.tsx // export { Header } from './header'
|   |   ├── header.tsx // main component view and logic
|   |   └── style.ts // component specific styled components
...
```

## Font Awesome

Font Awesome is home to more than 5,000 icons and are an easy way to get up and running with icons on your site. The `gatsby-browser.js` file is home to the root of the font awesome magic. `import` any icons you wish to use here, and append them to `library.add(...)`.

```tsx
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

export default () => <FontAwesomeIcon icon={["fab", "github"]} />
```

See the [Font Awesome React Docs](https://github.com/FortAwesome/react-fontawesome) for more info.

## SVG

You can import SVG files as React components by placing them in the `./src/assets/svg` folder.

Usage:

```tsx
import React from "react"
import Logo from "assets/svg/logo.svg"

export const Header = () => (
	<header>
		<Logo style={{ fill: "peru" }} />
	</header>
)
```

## Developer Mode

Dev mode is enabled by clicking `ctrl + ,`;

> make sure you have an `.env` file with `NODE_ENV` set to `development`

### TODO

-   example of pulling data from various data sources
