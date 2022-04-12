# [jschilders.dev](https://jschilders.dev)

My personal portfolio repository.
Whenever deployed to this repository, a web hook from [Vercel](https://vercel.com/) will get fired.

This builds the project on one of their servers and returns a couple of URL's, for previewing, etc.

The master branch is in sync with my own domains.

# Prerequisites

Make sure you have at least Node.js 14, and npm 7.

You can verify by typing `node -v` for Node.js, and `npm -v` for npm, in your terminal.

Currently there is a [bug](https://github.com/webpack/webpack/issues/14532) in Webpack so you cannot use Node.js 17 without a workaround.

My preffered workaround is just not using Node.js 17 for this specific project.

(See [asdf](https://github.com/asdf-vm/asdf) or [nvm](https://github.com/nvm-sh/nvm))

## Usage

Start by installing npm packages.

`npm install`

To run locally:

`npm run dev`

Linting the repository

`npm run lint`

Manually building the application

`npm run build`

Testing the manually built application

`npm run start`
