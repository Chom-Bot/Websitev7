<script lang="ts">
	import { formatDate } from '$lib/utils'
	export let data
	import styles from './globals.css'
</script>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href=/blog/{post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>

<h1>Blog</h1>

	<div class="latestblogposts">

	{#each data.posts.slice(0, 1) as post}
		<a href = blog/{post.slug} class="Latestpost"  style="background-image: url('{post.background}')">
		<div class="latestpost">
		  <div class="information">
			<h2>{post.title}</h2>
			<div class="info">
			  <h3 class="date">{formatDate(post.date)}</h3>
			  <h3>{post.author}</h3>
			</div>
		  </div>
		  </div>
	  </a>
	{/each}
	{#each data.posts.slice(1, 2) as post}
	<a href = blog/{post.slug} class="Latestpost"  style="background-image: url('{post.background}')">
		<div class="latestpost">
		  <div class="information">
			<h2>{post.title}</h2>
			<div class="info">
			  <h3 class="date">{formatDate(post.date)}</h3>
			  <h3>{post.author}</h3>
			</div>
		  </div>
		  </div>
	  </a>
	{/each}

	{#each data.posts.slice(2, 3) as post}
	<a href = blog/{post.slug} class="Latestpost"  style="background-image: url('{post.background}')">
		<div class="latestpost">
		  <div class="information">
			<h2>{post.title}</h2>
			<div class="info">
			  <h3 class="date">{formatDate(post.date)}</h3>
			  <h3>{post.author}</h3>
			</div>
		  </div>
		  </div>
	  </a>
	{/each}

	</div>
</section>
