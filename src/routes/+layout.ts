import type { LayoutLoad } from './$types';

export const load = (({ data }) => {
	return { message: '', ...data };
}) satisfies LayoutLoad;
