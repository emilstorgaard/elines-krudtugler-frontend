<script lang="ts">
	import { onMount } from 'svelte';
	import { getMediaUrl, getMediaInFolder } from '$lib/api/umbraco';
	import type { GalleryPage } from '$lib/types/galleryPage';
	import type { UmbracoMedia } from '$lib/types/umbraco';

	let { page }: { page: GalleryPage } = $props();

	const p = $derived(page.properties);

	let images: UmbracoMedia[] = $state([]);
	let loading = $state(false);
	let allLoaded = $state(false);
	let skip = 0;
	const take = 24;

	let sentinel: HTMLDivElement;

	async function loadMore() {
		const folder = Array.isArray(p.imageFolder) ? p.imageFolder[0] : p.imageFolder;

		const folderId = folder?.id ?? folder?.key;

		if (loading || allLoaded || !folderId) return;
		loading = true;

		const { items, total } = await getMediaInFolder(folderId, take, skip);
		images = [...images, ...items];
		skip += take;

		if (images.length >= total) allLoaded = true;
		loading = false;
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) loadMore();
			},
			{ rootMargin: '300px' }
		);

		if (sentinel) observer.observe(sentinel);
		return () => observer.disconnect();
	});

	function getAltText(name: string) {
		return name.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
	}
</script>

<div class="text-center">
	<h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
		{p.pageTitle}
		<span class="text-brand-600">{p.pageTitleHighlight}</span>
	</h1>
</div>

<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
	{p.pageIntro}
</p>

{#if images.length > 0}
	<div class="my-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
		{#each images as image, i (image.id)}
			<div
				class="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
			>
				<img
					src={getMediaUrl(image.url)}
					alt={getAltText(image.name)}
					loading="lazy"
					decoding="async"
					class="block w-full object-cover transition duration-500 group-hover:scale-105"
					style="aspect-ratio: {[3/4, 1/1, 4/5, 1/1, 16/9, 3/4][i % 6]}"
				/>
				<div
					class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
				></div>
			</div>
		{/each}
	</div>
{:else if !loading}
	<p class="my-14 text-center text-gray-500">Der er ikke uploadet billeder endnu.</p>
{/if}

<div bind:this={sentinel} class="flex justify-center py-8">
	{#if loading}
		<div
			class="h-8 w-8 animate-spin rounded-full border-4 border-brand-600 border-t-transparent"
		></div>
	{/if}
</div>

{#if p.bottomHeading || p.bottomText}
	<div class="mx-auto mt-16 max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-10">
		{#if p.bottomHeading}
			<h3 class="text-2xl font-bold text-gray-800">{p.bottomHeading}</h3>
		{/if}
		{#if p.bottomText}
			<p class="mt-4 text-lg leading-relaxed text-gray-600">{p.bottomText}</p>
		{/if}
	</div>
{/if}
