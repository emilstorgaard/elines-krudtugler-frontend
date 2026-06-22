<script lang="ts">
	import { onMount } from 'svelte';
	import { getMediaInFolder } from '$lib/api/umbraco';
	import { mediaSrc, mediaSrcset } from '$lib/utils/media';
	import type { GalleryPage } from '$lib/types/galleryPage';
	import type { UmbracoMedia } from '$lib/types/umbraco';

	let { page }: { page: GalleryPage } = $props();

	const p = $derived(page.properties);

	let images: UmbracoMedia[] = $state([]);
	let loading = $state(false);
	let allLoaded = $state(false);
	let skip = 0;
	const take = 12;

	let sentinel: HTMLDivElement;

	function gridSrc(url: string) {
		return mediaSrc(url, 'galleryGrid');
	}

	function gridSrcset(url: string) {
		return mediaSrcset(url, 'galleryGrid');
	}

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

		return () => {
			observer.disconnect();
		};
	});

	function getAltText(name: string) {
		return name.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
	}
</script>

<div class="px-4 sm:px-6">
	<div class="text-center">
		<h1 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
			{p.pageTitle}
			<span class="text-brand-600">{p.pageTitleHighlight}</span>
		</h1>
	</div>

	<p
		class="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg"
	>
		{p.pageIntro}
	</p>

	{#if images.length > 0}
		<div class="my-8 grid grid-cols-2 gap-2 sm:my-14 sm:grid-cols-3 sm:gap-4">
			{#each images as image (image.id)}
				<div
					class="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 sm:rounded-3xl"
				>
					<img
						src={gridSrc(image.url)}
						srcset={gridSrcset(image.url)}
						sizes="(min-width: 640px) 33vw, 50vw"
						alt={getAltText(image.name)}
						width={image.width || 640}
						height={image.height || 640}
						loading="lazy"
						decoding="async"
						class="block aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
					></div>
				</div>
			{/each}
		</div>
	{:else if !loading}
		<p class="my-8 text-center text-sm text-gray-500 sm:my-14 sm:text-base">
			Der er ikke uploadet billeder endnu.
		</p>
	{/if}

	<div bind:this={sentinel} class="flex justify-center py-6 sm:py-8">
		{#if loading}
			<div
				class="h-7 w-7 animate-spin rounded-full border-4 border-brand-600 border-t-transparent sm:h-8 sm:w-8"
			></div>
		{/if}
	</div>

	{#if p.bottomHeading || p.bottomText}
		<div
			class="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-5 text-center shadow-sm sm:mt-16 sm:rounded-3xl sm:p-8 md:p-10"
		>
			{#if p.bottomHeading}
				<h3 class="text-xl font-bold text-gray-800 sm:text-2xl">{p.bottomHeading}</h3>
			{/if}
			{#if p.bottomText}
				<p class="mt-3 text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg">
					{p.bottomText}
				</p>
			{/if}
		</div>
	{/if}
</div>