<script lang="ts">
	import type { ContactPage } from '$lib/types/contactPage';

	let { page }: { page: ContactPage } = $props();

	const p = $derived(page.properties);

	const transportOptions = $derived(
		p.transportOptions?.items?.map((item) => item.content.properties) ?? []
	);
</script>

<div class="text-center">
	<h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
		{p.directionsTitle}
	</h1>
</div>

{#if p.directionsIntro}
	<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
		{p.directionsIntro}
	</p>
{/if}

<div class="my-14 grid items-stretch gap-8 lg:grid-cols-5">
	{#if p.mapsEmbedUrl}
		<div class="overflow-hidden rounded-3xl shadow-xl lg:col-span-3">
			<iframe
				title="Krudtuglernes placering på kort"
				src={p.mapsEmbedUrl}
				width="100%"
				height="100%"
				style="min-height: 420px; border: 0; display: block;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	{/if}

	<div class="flex flex-col gap-5 lg:col-span-2" class:lg:col-span-5={!p.mapsEmbedUrl}>
		{#if p.addressCardLabel || p.directionsButtonText}
			<div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
				{#if p.addressCardLabel}
					<div class="mb-4 flex items-center gap-3">
						<div
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-xl"
						>
							📍
						</div>
						<div>
							<p class="text-xs font-semibold tracking-wide text-gray-400 uppercase">
								{p.addressCardLabel}
							</p>
						</div>
					</div>
				{/if}

				{#if p.directionsButtonText && p.directionsButtonUrl}
					<a
						href={p.directionsButtonUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-3 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						{p.directionsButtonText}
					</a>
				{/if}
			</div>
		{/if}

		{#each transportOptions as option}
			<div
				class="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-brand-200 hover:bg-brand-50 hover:shadow-md"
			>
				{#if option.icon}
					<div
						class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-xl transition-transform duration-200 group-hover:scale-110"
					>
						{option.icon}
					</div>
				{/if}
				<div>
					<p class="mb-0.5 font-bold text-gray-800">{option.title}</p>
					<p class="text-sm leading-relaxed whitespace-pre-line text-gray-500">
						{option.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
