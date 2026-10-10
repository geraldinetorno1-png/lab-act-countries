# Countries of the World

React project for Front-End Development 2, Labs 07 to 09.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Pages

- `/` — Home, with links to the country list and a random country.
- `/countries` — Countries and their capitals.
- `/countries/PH` — Example country detail page.
- `/bucket-list` — A fixed list of countries to visit.
- `/about` — Project description.
- Other addresses show the 404 page.

## Lab 09

The countries section shares a breadcrumb through `CountriesLayout`.
`RequireValidCountry` checks the country code before rendering a detail page.
An unknown code such as `/countries/zzz` redirects to the list with a warning.
The redirect replaces the history entry, and refreshing the list clears the warning.

## Build

```bash
npm run build
npm run preview
```

Uses React, React Router, Vite, Tailwind CSS, and DaisyUI.
