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

<h1 class="pagetitle">Blog</h1>

<div class="latestblogposts">

	{#each data.posts.slice(0, 1) as post}
		<a href = blog/{post.slug} class="Latestpost"  style="  background-image: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url('{post.background}');
		">
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
	<a href = blog/{post.slug} class="Latestpost"  style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url('{post.background}');
	">
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
	<a href = blog/{post.slug} class="Latestpost"  style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url('{post.background}');">
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
	<div class="Olderposts">
		<h2 class="olderpoststitle">Older posts:</h2>
		{#each data.posts.slice(3, 4) as post}
		<a href = blog/{post.slug} class="Olderpost"  style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url('{post.background}');">
			<div class="olderpost">
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
		{#each data.posts.slice(4, 5) as post}
		<a href = blog/{post.slug} class="Olderpost"  style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url('{post.background}');">
			<div class="olderpost">
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
		<div class="buttoncontainer">
			<button class="button" type="button">
				View archived posts
			</button>
		</div>	
	</div>
</section>
