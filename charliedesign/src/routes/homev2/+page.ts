export const prerender = true;
import type { Categories } from '$lib/types';

export interface RouteParams {
	category?: Categories;
  }

import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/work')
	const posts: Post[] = await response.json()
	return { posts }
}

