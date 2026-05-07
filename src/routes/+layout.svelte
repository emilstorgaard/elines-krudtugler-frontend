<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';

	let { children } = $props();
</script>

<div class="sticky top-0 z-50">
	<AnnouncementBar />
	<Header />
</div>

<div class="font-nunito">
	<main>
		{@render children()}
	</main>
</div>

<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		font-family: 'Nunito', sans-serif;
	}

	:global(h1, h2, h3) {
		font-family: 'Playfair Display', serif;
	}
</style>
