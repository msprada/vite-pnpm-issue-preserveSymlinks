# General
I try to create  vanilla TS Vite example which deals with an issue I experienced for a svelte kit application. [Originally: Svelte Isse can be found here](https://github.com/sveltejs/kit/issues/12139)

The svelte kit application uses a default javascript api "instanceof" to check whether an thrown error is a Redirect Class or not. If a redirect is detected the application redirects the user.

If the check fails the user will not be redirected.

There is a direct influence of this behavour in regard to the **vite.config.ts** setting **preserveSymlinks**. 

If "preserveSymlinks" is set to **true** the instanceof check will fail and the user is not redirected at all.

If "preserveSymlinks" is set to **false** the user is redirected.


# To Reproduce
- install pnpm globally
- install all dependencies by `pnpm install`
- run dev mode 'pnpm run dev'
- Click the "Throw Redirect" Button
- An alert will be shown

## Be aware
- currently the instanceof check will succeed because the preserveSymlinks is set to false as default
- the instanceof check will fail if preserveSymlinks is set to true