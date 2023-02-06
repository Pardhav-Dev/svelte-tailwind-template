import type { LayoutServerLoad } from './$types';

export const load = (() => {
	return {
		tech: ['Sveltekit + Typescript', 'Tailwind']
	};
}) satisfies LayoutServerLoad;
