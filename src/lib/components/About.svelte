<script lang="ts">
	import { getMediaUrl } from '$lib/api/umbraco';
	import type { AboutPage } from '$lib/types/aboutPage';

	let { page }: { page: AboutPage } = $props();

	const p = $derived(page.properties);

	const aboutImages = $derived(p.aboutImage ?? []);
	const familyImages = $derived(p.familyImage ?? []);
	const locationImages = $derived(p.locationImage ?? []);
	const animalsImages = $derived(p.animalsImage ?? []);
	const educationalImages = $derived(p.educationalImages ?? []);

	let lightboxImages = $state<Array<{ url: string; name: string }>>([]);
	let lightboxIndex = $state<number | null>(null);

	function openLightbox(images: Array<{ url: string; name: string }>, index: number) {
		lightboxImages = images;
		lightboxIndex = index;
	}

	function closeLightbox() {
		lightboxIndex = null;
		lightboxImages = [];
	}

	function nextImage() {
		if (lightboxIndex !== null) {
			lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
		}
	}

	function prevImage() {
		if (lightboxIndex !== null) {
			lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (lightboxIndex === null) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowRight') nextImage();
		if (e.key === 'ArrowLeft') prevImage();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#snippet imageGallery(images: typeof aboutImages, borderSide: 'left' | 'right')}
	<div class="relative">
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
				<div>
					<p class="text-xs font-medium text-gray-500">{p.experienceLabel}</p>
					<p class="text-lg font-bold text-gray-800">{p.experienceValue}</p>
				</div>
			</div>
		</div>
	</div>

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
							class="flex items-center justify-center gap-3 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4 ring-1 ring-brand-100"
						>
							<span class="text-base font-semibold text-brand-700">{value}</span>
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
			{#each educationalImages as image, i}
				<button
					type="button"
					onclick={() => openLightbox(educationalImages, i)}
					class="mx-auto aspect-210/297 w-full max-w-xs cursor-pointer overflow-hidden rounded-xl transition hover:opacity-90"
				>
					<img src={getMediaUrl(image.url)} alt={image.name} class="h-full w-full object-cover" />
				</button>
			{/each}
		</div>

		<p class="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-gray-600 italic">
			"{p.educationalQuote}"
		</p>
	</div>
</div>

{#if lightboxIndex !== null && lightboxImages.length > 0}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
		role="dialog"
		aria-modal="true"
		aria-label="Billedfremviser"
		tabindex="-1"
	>
		<button
			type="button"
			onclick={closeLightbox}
			class="absolute inset-0 cursor-default"
			aria-label="Luk billedfremviser"
		></button>

		<button
			type="button"
			onclick={closeLightbox}
			class="absolute top-4 right-4 z-10 cursor-pointer text-4xl text-white transition hover:text-gray-300"
			aria-label="Luk"
		>
			&times;
		</button>

		{#if lightboxImages.length > 1}
			<button
				type="button"
				onclick={prevImage}
				class="absolute left-2 z-10 cursor-pointer px-4 text-5xl text-white transition hover:text-gray-300 md:left-6"
				aria-label="Forrige billede"
			>
				&#8249;
			</button>
		{/if}

		<img
			src={getMediaUrl(lightboxImages[lightboxIndex].url)}
			alt={lightboxImages[lightboxIndex].name}
			class="pointer-events-none relative max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
		/>

		{#if lightboxImages.length > 1}
			<button
				type="button"
				onclick={nextImage}
				class="absolute right-2 z-10 cursor-pointer px-4 text-5xl text-white transition hover:text-gray-300 md:right-6"
				aria-label="Næste billede"
			>
				&#8250;
			</button>
		{/if}

		{#if lightboxImages.length > 1}
			<div class="absolute bottom-4 text-sm text-white">
				{lightboxIndex + 1} / {lightboxImages.length}
			</div>
		{/if}
	</div>
{/if}
