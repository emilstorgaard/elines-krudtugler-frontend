<script lang="ts">
	import '$lib/styles/app.css';
	import { onMount } from 'svelte';
	import { mediaSrc, mediaSrcset } from '$lib/utils/media';
	import { SITE_URL } from '$lib/site';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';
	let { children, data } = $props();

	const logoRawUrl = $derived(data.settings.properties.logo?.[0]?.url ?? null);

	const logoSrc = $derived(logoRawUrl ? mediaSrc(logoRawUrl, 'headerLogo') : null);
	const logoSrcset = $derived(logoRawUrl ? mediaSrcset(logoRawUrl, 'headerLogo') : null);

	const contact = $derived(data.contactPage?.properties);

	const structuredData = $derived({
		'@context': 'https://schema.org',
		'@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
		name: data.settings.properties.siteName,
		url: SITE_URL,
		image: logoRawUrl ? mediaSrc(logoRawUrl, 'headerLogo') : undefined,
		telephone: contact?.phone,
		email: contact?.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: contact?.streetAddress,
			postalCode: contact?.postalCode,
			addressLocality: contact?.city
		},
		sameAs: [data.settings.properties.instagramUrl, data.settings.properties.facebookUrl].filter(
			Boolean
		)
	});

	const structuredDataJson = $derived(JSON.stringify(structuredData).replace(/</g, '\\u003c'));

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

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${structuredDataJson}</scr` + `ipt>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<div bind:this={stickyEl} class="sticky top-0 z-50">
		<AnnouncementBar settings={data.settings.properties} />
		<Header settings={data.settings.properties} />
	</div>

	<main class="font-nunito flex-1">
		{@render children()}
	</main>

	<Footer settings={data.settings.properties} />
</div>
