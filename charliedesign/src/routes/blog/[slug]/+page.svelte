<script lang="ts">
	import { formatDate } from '$lib/utils'
    import styles from "./globals.css";
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
	<hgroup class="header">
		<h1>{data.meta.title}</h1>
			<div class="information">
			<p>{formatDate(data.meta.date)}</p>
			<div class="tags">
				{#each data.meta.categories as category}
					<span class="catag">&num;{category}</span>
				{/each}
			</div>
		</div>
	</hgroup>

  <!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
		margin: 0;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: 20px;
	}

	.tags > * {
		justify-content: center;
		align-items: center;

	}

	.information {
		display: flex;
		flex-direction: row;	
		gap: 10px;

	}

	.header {
		display:flex;
		flex-direction: column;
	}

	.catag {
		display: flex;
		background-color: red;
		margin: 0;
		padding: 0;
	}
</style>


