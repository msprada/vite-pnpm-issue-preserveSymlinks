//because I used the Redirect Class in main.ts from node_modules
//I also use the redirect function from index.js instead of svelte/kit 
import {redirect} from '../node_modules/@sveltejs/kit/src/exports/index.js';

export function setupRedirect(element: HTMLButtonElement) {
  const setRedirect = () => {
    console.warn('redirect will be thrown.');
    redirect(307, '/signin');
  };
  element.innerHTML = 'throw redirect';
  element.addEventListener('click', () => setRedirect());
}
