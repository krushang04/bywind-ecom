# ByWind eCommerce Dashboard

This project is a React-based dashboard with a modular and reusable component architecture. The codebase has been refactored to follow DRY principles, improve accessibility, and standardize UI patterns.

## Project Structure (key paths)

```
src/
  components/
    common/
      SectionCard.jsx        # Reusable panel wrapper for consistent layout
    charts/
      BarChart.jsx           # Uses centralized chart theming
      LineBar.jsx            # Uses centralized chart theming
      DonutChart.jsx
  context/
    ThemeContext.jsx         # App theme with hook `useTheme()`
  pages/
    dashboard/
      Dashboard.jsx
      modules/
        MetricsCards.jsx
        ProductTable.jsx     # Uses shared currency formatter + SectionCard
        RevenueByLocation.jsx# Wrapped with SectionCard
        TotalSales.jsx       # Wrapped with SectionCard
  utils/
    chartTheme.js            # Centralized Recharts colors per theme
    formatters.js            # `formatCurrency()` util
    SidebarUtils.js, ...
```

## Reusability and Best Practices

- Section containers now use `src/components/common/SectionCard.jsx` for consistent padding, colors, and headings.
- Charts use `src/utils/chartTheme.js` so axis/grid/tick colors stay consistent across themes.
- Currency formatting centralized in `src/utils/formatters.js`.
- Components aim to be presentational and composable; heavy logic can be moved to hooks if needed.

## Accessibility

- `SectionCard` exposes `aria-label` when `title` is a string.
- Keyboard and screen-reader friendly markup; keep headings as text where possible.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm start
   ```

## Build

```bash
npm run build
```

## Deployment

This repo includes a `netlify.toml` for simple Netlify deploys:

- Build command: `npm run build`
- Publish directory: `build`
- SPA routing: redirect all to `/index.html`

You can also deploy to Vercel or GitHub Pages using the standard CRA approach.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
