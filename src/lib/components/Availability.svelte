<script lang="ts">
	import type { AvailabilityPage } from '$lib/types/availabilityPage';

	let { page }: { page: AvailabilityPage } = $props();

	const p = $derived(page.properties);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('da-DK', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	const availableSpots = $derived(
		p.availableSpots?.items?.map((item) => item.content.properties) ?? []
	);
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

	<div
		class="my-8 overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] ring-1 ring-black/5 sm:my-14 sm:rounded-4xl"
	>
		<div class="relative p-5 sm:p-8 md:p-12">
			<div
				class="absolute inset-0 bg-linear-to-br from-brand-50/70 via-transparent to-transparent"
			></div>
			<div class="relative mx-auto max-w-2xl space-y-5 sm:space-y-6">
				<div
					class="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm ring-1 ring-brand-100 sm:px-4 sm:py-1.5 sm:text-sm"
				>
					{p.statusBadge}
				</div>
				<div class="space-y-2 sm:space-y-3">
					<h3 class="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl md:text-3xl">
						{p.sectionHeading}
					</h3>
					<div
						class="h-1 w-12 rounded-full bg-linear-to-r from-brand-400 to-brand-600 sm:w-16"
					></div>
				</div>
				{#if p.descriptionParagraph1}
					<p class="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
						{p.descriptionParagraph1}
					</p>
				{/if}
				<p class="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
					{p.descriptionParagraph2}
				</p>
				<a
					href={p.buttonLink}
					class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-600 bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-400 hover:shadow-lg sm:mt-6 sm:text-base"
				>
					{p.buttonText}
				</a>

				<!-- Ledige pladser -->
				{#if availableSpots.length}
					<div class="border-t border-gray-100 pt-5 sm:pt-6">
						<h4 class="mb-4 text-base font-bold tracking-tight text-gray-800 sm:text-lg">
							{p.availableSpotsHeading}
						</h4>
						<ul class="space-y-3">
							{#each availableSpots as spot}
								<li
									class="flex items-center gap-4 rounded-xl bg-gray-50 p-3 ring-1 ring-black/5 sm:p-4"
								>
									<!-- Dato-badge -->
									<div
										class="flex-shrink-0 rounded-lg bg-brand-50 px-2.5 py-1.5 text-center ring-1 ring-brand-100 sm:px-3 sm:py-2"
									>
										<span
											class="block text-xs font-semibold tracking-wide text-brand-500 uppercase"
										>
											{new Date(spot.date).toLocaleDateString('da-DK', { month: 'short' })}
										</span>
										<span class="block text-xl leading-none font-bold text-brand-600 sm:text-2xl">
											{new Date(spot.date).getDate()}
										</span>
										<span class="block text-xs text-brand-400">
											{new Date(spot.date).getFullYear()}
										</span>
									</div>

									<!-- Indhold -->
									<div class="min-w-0 flex-1">
										<p class="text-sm font-semibold text-gray-800 sm:text-base">
											{spot.description}
										</p>
										<p class="text-xs text-gray-500 sm:text-sm">
											{formatDate(spot.date)}
										</p>
									</div>

									<!-- Antal pladser -->
									<span
										class="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200 sm:text-sm"
									>
										<span class="size-1.5 rounded-full bg-green-500"></span>
										{spot.spots}
										{spot.spots === 1 ? 'plads' : 'pladser'}
									</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
