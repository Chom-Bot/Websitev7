export const prerender = true;

import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/work')
	const posts: Post[] = await response.json()
	return { posts }
}

