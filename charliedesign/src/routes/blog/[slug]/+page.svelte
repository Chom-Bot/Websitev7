<script lang="ts">
	import { formatDate } from '$lib/utils'
	import styles from './globals.css'
	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <!-- Title -->
  <div class="grid">
	<hgroup>
		<h1 class="title">{data.meta.title}</h1>
		<div class="subtitle">

			<p class="date">{formatDate(data.meta.date)}</p>
			<p class="author">{data.meta.author}</p>
			
			<div class="tags">
				{#each data.meta.categories as category}
					<span class="surface-4">&num;{category}</span>
				{/each}
			</div>

		</div>
		<div class="prose">
			<svelte:component this={data.content} />
		</div>

		
	</hgroup>

</div>

</article>