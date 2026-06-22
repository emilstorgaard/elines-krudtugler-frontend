<script lang="ts">
	import '$lib/styles/app.css';
	import { onMount } from 'svelte';
	import { mediaSrc, mediaSrcset } from '$lib/utils/media';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';
	let { children, data } = $props();

	const logoRawUrl = $derived(data.settings.properties.logo?.[0]?.url ?? null);

	const logoSrc = $derived(logoRawUrl ? mediaSrc(logoRawUrl, 'headerLogo') : null);
	const logoSrcset = $derived(logoRawUrl ? mediaSrcset(logoRawUrl, 'headerLogo') : null);

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
	{#if logoSrc}
		<link
			rel="preload"
			as="image"
			href={logoSrc}
			imagesrcset={logoSrcset}
			imagesizes="96px"
			fetchpriority="high"
		/>
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