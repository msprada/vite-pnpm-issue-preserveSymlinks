import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupRedirect } from './redirect-button.ts';
//because the class Redirect is not exported I have to use the indes file in which the Redrect class is defined
import { Redirect} from '../node_modules/.pnpm/@sveltejs+kit@2.5.18_@sveltejs+vite-plugin-svelte@3.1.1_svelte@4.2.18_vite@5.3.3__svelte@4.2.18_vite@5.3.3/node_modules/@sveltejs/kit/src/runtime/control.js';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
     <div class="card">
    <button id="redirect" type="button"></button>
  </div>
    <p class="read-the-docs">
      Click on throw Redirect
    </p>
  </div>
`

setupRedirect(document.querySelector<HTMLButtonElement>('#redirect')!);

window.addEventListener('error', (error: any) => {
  console.log({ error });
  alert(
    `error is instance of Redirect: ${error.error instanceof Redirect}`
  );
});
