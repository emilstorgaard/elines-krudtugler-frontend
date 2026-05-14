<script lang="ts">
	import { getMediaUrl } from '$lib/api/umbraco';
	import type { AboutPage } from '$lib/types/aboutPage';

	let { page }: { page: AboutPage } = $props();

	const p = $derived(page.properties);

	// Now using the full arrays instead of [0]
	const aboutImages = $derived(p.aboutImage ?? []);
	const familyImages = $derived(p.familyImage ?? []);
	const locationImages = $derived(p.locationImage ?? []);
	const animalsImages = $derived(p.animalsImage ?? []);
</script>

<!--
	Reusable image gallery snippet.
	- 1 image  → full-width, same look as before
	- 2 images → side-by-side
	- 3+       → 2-column masonry-style grid (first image spans both rows)
-->
{#snippet imageGallery(images: typeof aboutImages, borderSide: 'left' | 'right')}
	<div class="relative">
		<!-- Decorative border offset -->
		<div
			class="absolute -top-4 h-full w-full rounded-2xl border-2 border-brand-300"
			class:left-[-1rem]={borderSide === 'left'}
			class:right-[-1rem]={borderSide === 'right'}
			class:-left-4={borderSide === 'left'}
			class:-right-4={borderSide === 'right'}
		></div>

		{#if images.length === 0}
			<!-- Nothing to render -->
		{:else if images.length === 1}
			<img
				src={getMediaUrl(images[0].url)}
				alt={images[0].name}
				class="relative h-122 w-full rounded-2xl object-cover shadow-xl"
			/>
		{:else if images.length === 2}
			<div class="relative grid h-112 grid-cols-2 gap-2">
				{#each images as img}
					<img
						src={getMediaUrl(img.url)}
						alt={img.name}
						class="h-full w-full rounded-2xl object-cover shadow-xl"
					/>
				{/each}
			</div>
		{:else}
			<!-- 3+ images: first image tall on the left, rest stacked on the right -->
			<div class="relative grid grid-cols-2 gap-2">
				<img
					src={getMediaUrl(images[0].url)}
					alt={images[0].name}
					class="row-span-2 h-full min-h-80 w-full rounded-2xl object-cover shadow-xl"
					style="max-height: 30rem;"
				/>
				<div class="grid gap-2" style="grid-template-rows: repeat({images.length - 1}, 1fr);">
					{#each images.slice(1) as img}
						<img
							src={getMediaUrl(img.url)}
							alt={img.name}
							class="h-full w-full rounded-2xl object-cover shadow-xl"
							style="max-height: {Math.round(480 / (images.length - 1))}px;"
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/snippet}

<div class="relative mx-auto max-w-6xl">
	<h2 class="mb-6 text-center text-4xl font-bold text-gray-800 md:text-5xl">
		{p.pageTitle} <br /><strong class="text-brand-600">{p.pageTitleHighlight}</strong>
	</h2>
	<p class="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
		{p.pageIntro}
	</p>

	<!-- About section -->
	<div class="mb-24 grid items-center gap-12 md:grid-cols-2">
		<div class="order-2 space-y-6 md:order-1">
			<div>
				<span
					class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
				>
					{p.aboutLabel}
				</span>
				<h3 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
					{p.aboutHeading}
					{#if p.aboutHeadingHighlight}
						<span class="text-brand-600">{p.aboutHeadingHighlight}</span>
					{/if}
				</h3>
				<div class="prose text-lg leading-relaxed text-gray-600">
					{@html p.aboutText?.markup ?? ''}
				</div>
			</div>
		</div>

		<div class="relative order-1 md:order-2">
			{@render imageGallery(aboutImages, 'right')}
			<div
				class="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-gray-100"
			>
				<img src="/logo.png" alt="" class="h-10 w-10 object-contain" />
				<div>
					<p class="text-xs font-medium text-gray-500">{p.experienceLabel}</p>
					<p class="text-lg font-bold text-gray-800">{p.experienceValue}</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Family section -->
	<div class="mb-20 grid items-center gap-12 md:grid-cols-2">
		<div class="relative">
			{@render imageGallery(familyImages, 'left')}
		</div>

		<div class="space-y-6">
			<div>
				<span
					class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
				>
					{p.familyLabel}
				</span>
				<div class="prose text-lg leading-relaxed text-gray-600">
					{@html p.familyText?.markup ?? ''}
				</div>
			</div>
		</div>
	</div>

	<!-- Location section -->
	<div class="mb-20 grid items-center gap-12 md:grid-cols-2">
		<div class="order-2 space-y-6 md:order-1">
			<div>
				<span
					class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
				>
					{p.locationLabel}
				</span>
				<div class="prose text-lg leading-relaxed text-gray-600">
					{@html p.locationText?.markup ?? ''}
				</div>
			</div>
		</div>

		<div class="relative order-1 md:order-2">
			{@render imageGallery(locationImages, 'right')}
		</div>
	</div>

	<!-- Animals section -->
	<div class="mb-20 grid items-center gap-12 md:grid-cols-2">
		<div class="order-2 space-y-6 md:order-2">
			<div>
				<span
					class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
				>
					{p.animalsLabel}
				</span>
				<div class="prose text-lg leading-relaxed text-gray-600">
					{@html p.animalsText?.markup ?? ''}
				</div>
			</div>
		</div>

		<div class="relative order-1 md:order-1">
			{@render imageGallery(animalsImages, 'right')}
		</div>
	</div>

	<!-- Values section -->
	<div class="mb-20 rounded-3xl bg-white p-8 shadow-sm md:p-12">
		<div class="mb-10 text-center">
			<h3 class="text-3xl font-bold text-gray-800 md:text-4xl">{p.valuesHeading}</h3>
			<p class="mx-auto mt-3 max-w-2xl text-gray-600">
				{p.valuesIntro}
			</p>
		</div>
		<ul class="grid gap-3 sm:grid-cols-2">
			{#each p.valuesList ?? [] as value}
				<li class="flex items-start gap-3 rounded-xl bg-brand-50 p-4">
					<span class="text-gray-700">{value}</span>
				</li>
			{/each}
		</ul>

		{#if (p.primaryValuesList ?? []).length > 0}
			<div class="mt-10 border-t border-gray-100 pt-10">
				<ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{#each p.primaryValuesList ?? [] as value}
						<li
							class="flex items-center gap-3 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4 ring-1 ring-brand-100"
						>
							<span class="text-sm font-semibold text-brand-700">{value}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<div class="rounded-3xl bg-white p-8 shadow-sm md:p-12">
		<div class="mb-10 text-center">
			<p class="mx-auto mt-3 max-w-2xl text-gray-600">
				{p.educationalIntro}
			</p>
		</div>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each p.educationalImages ?? [] as image}
				<div class="mx-auto aspect-[210/297] w-full max-w-xs overflow-hidden rounded-xl">
					<img src={getMediaUrl(image.url)} alt={image.name} class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>

		<p class="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-gray-600 italic">
			"{p.educationalQuote}"
		</p>
	</div>
</div>
