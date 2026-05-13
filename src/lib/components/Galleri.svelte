<script lang="ts">
	import { getMediaUrl } from '$lib/api/umbraco';
	import type { GalleryPage } from '$lib/types/galleryPage';

	let { page }: { page: GalleryPage } = $props();

	const p = $derived(page.properties);
	const images = $derived(p.images ?? []);

	function getAltText(image: { name: string }): string {
		return image.name.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
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
	<div class="my-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each images as image (image.id)}
			<div
				class="group relative aspect-square overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
			>
				<img
					src={getMediaUrl(image.url)}
					alt={getAltText(image)}
					loading="lazy"
					decoding="async"
					class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
				/>

				<div
					class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
				></div>

				<div
					class="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
				>
					<div class="rounded-2xl bg-white/95 px-4 py-3 backdrop-blur-sm">
						<p class="text-sm font-semibold text-gray-800">{getAltText(image)}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<p class="my-14 text-center text-gray-500">Der er ikke uploadet billeder endnu.</p>
{/if}

{#if p.bottomHeading || p.bottomText}
	<div class="mx-auto mt-16 max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-10">
		{#if p.bottomHeading}
			<h3 class="text-2xl font-bold text-gray-800">{p.bottomHeading}</h3>
		{/if}
		{#if p.bottomText}
			<p class="mt-4 text-lg leading-relaxed text-gray-600">
				{p.bottomText}
			</p>
		{/if}
	</div>
{/if}
