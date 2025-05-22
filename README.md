# svelte-charla

'svelte-charla' is a web-based presentation about Svelte, built using Svelte and Vite. It aims to provide an interactive and engaging way to learn about the Svelte framework.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
VS Code will also prompt you to install recommended extensions found in `.vscode/extensions.json` when you open the project.

## Getting Started

To run the project locally, follow these steps:

1.  **Install dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```

2.  **Run the development server:**
    After the installation is complete, run:
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use, Vite will indicate this in the terminal).

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting to maintain code quality and consistency.

*   **Lint the code:**
    To check for linting errors, run:
    ```bash
    npm run lint
    ```

*   **Format the code:**
    To automatically format the code according to Prettier rules, run:
    ```bash
    npm run format
    ```

## Deployment

The project can be deployed in a couple of ways:

*   **Firebase Hosting:**
    The project is configured for deployment to Firebase Hosting. You can deploy manually by running:
    ```bash
    npm run deploy
    ```
    This command will first build the project and then deploy it to Firebase. Deployment to Firebase is also automated via GitHub Actions on pushes and pull requests to specific branches (e.g., `main` or `master`).

*   **GitHub Pages:**
    (Coming Soon) Configuration for deploying to GitHub Pages will also be added.

## Technical Considerations

**Why is HMR not preserving my local component state?**

Hot Module Replacement (HMR) state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external Svelte store, which would not be replaced by HMR.

```javascript
// store.js
// An extremely simple external store
import { writable } from 'svelte/store';
export default writable(0);
```
