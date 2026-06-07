<script lang="ts">
	import '$lib/styles/app.css';
	import { onMount } from 'svelte';
	import { getMediaUrl } from '$lib/api/umbraco';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';
	let { children, data } = $props();

	const logoUrl = $derived(
		data.settings.properties.logo?.[0]?.url
			? getMediaUrl(data.settings.properties.logo[0].url)
			: null
	);

	let stickyEl: HTMLDivElement;

	onMount(() => {
		const updateHeight = () => {
			if (!stickyEl) return;
			document.documentElement.style.setProperty('--header-total-h', `${stickyEl.offsetHeight}px`);
		};

		updateHeight();

		const ro = new ResizeObserver(updateHeight);
		ro.observe(stickyEl);

		return () => {
			ro.disconnect();
		};
	});
</script>

<svelte:head>
	{#if logoUrl}
		<link rel="preload" as="image" href={logoUrl} fetchpriority="high" />
	{/if}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<div bind:this={stickyEl} class="sticky top-0 z-50">
		<AnnouncementBar settings={data.settings} />
		<Header settings={data.settings} />
	</div>

	<main class="font-nunito flex-1">
		{@render children()}
	</main>

	<Footer settings={data.settings} />
</div>

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