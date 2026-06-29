<script lang="ts">
	import type { AvailabilityPage } from '$lib/types/availabilityPage';

	let { page }: { page: AvailabilityPage } = $props();
	const p = $derived(page.properties);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('da-DK', {
			month: 'long',
			year: 'numeric'
		});
	}

	function formatShortMonth(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('da-DK', { month: 'short' });
	}

	const spotsList = $derived(
		p.spotsList?.items?.map((item) => item.content.properties) ?? []
	);
</script>

<section class="px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
	<div class="mx-auto max-w-5xl">
		<!-- Header -->
		<div class="text-center">
			<h1
				class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl"
			>
				{p.pageTitle}
				<span class="text-brand-600">{p.pageTitleHighlight}</span>
			</h1>
			<p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg">
				{p.pageIntro}
			</p>
		</div>

		<!-- Hovedkort -->
		<div
			class="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] ring-1 ring-black/5 sm:mt-12 sm:rounded-3xl"
		>
			<div class="relative p-5 sm:p-8 md:p-12">
				<!-- Baggrundsgradient -->
				<div
					class="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-50/70 via-transparent to-transparent"
				></div>

				<div class="relative mx-auto max-w-2xl space-y-5 sm:space-y-6">
					<!-- Status badge -->
					<div
						class="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm ring-1 ring-brand-100 sm:px-4 sm:py-1.5 sm:text-sm"
					>
						{p.statusBadge}
					</div>

					<!-- Overskrift -->
					<div class="space-y-2 sm:space-y-3">
						<h2 class="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl md:text-3xl">
							{p.sectionHeading}
						</h2>
						<div
							class="h-1 w-12 rounded-full bg-linear-to-br from-brand-400 to-brand-600 sm:w-16"
						></div>
					</div>

					<!-- Beskrivelse -->
					{#if p.descriptionParagraph1}
						<p class="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
							{p.descriptionParagraph1}
						</p>
					{/if}
					{#if p.descriptionParagraph2}
						<p class="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
							{p.descriptionParagraph2}
						</p>
					{/if}

					<!-- CTA Button -->
					<a
						href={p.buttonLink}
						class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-600 bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-400 hover:shadow-lg sm:mt-6 sm:w-auto sm:text-base"
					>
						{p.buttonText}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>

					<!-- Pladser -->
					{#if spotsList.length}
						<div class="border-t border-gray-100 pt-5 sm:pt-6">
							<h3 class="mb-4 text-base font-bold tracking-tight text-gray-800 sm:text-lg">
								{p.availableSpotsHeading}
							</h3>
							<ul class="space-y-3">
								{#each spotsList as spot}
									<li
										class="group relative overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-gray-200 transition-all duration-200 sm:p-5 {spot.status === 'Reserveret'
											? 'hover:shadow-md hover:ring-yellow-300'
											: spot.status === 'Optaget'
												? 'hover:shadow-md hover:ring-red-300'
												: 'hover:shadow-md hover:ring-brand-300'}"
									>
										<!-- Dekorativ venstre-bar -->
										<div
											class="absolute top-0 left-0 h-full w-1 bg-linear-to-br {spot.status === 'Reserveret'
												? 'from-yellow-400 to-yellow-600'
												: spot.status === 'Optaget'
													? 'from-red-400 to-red-600'
													: 'from-brand-400 to-brand-600'}"
										></div>

										<div class="flex items-start gap-3 sm:items-center sm:gap-4">
											<!-- Måned + år badge -->
											<div
												class="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl ring-1 sm:h-16 sm:w-16 {spot.status === 'Reserveret'
													? 'bg-yellow-50 ring-yellow-100'
													: spot.status === 'Optaget'
														? 'bg-red-50 ring-red-100'
														: 'bg-brand-50 ring-brand-100'}"
											>
												<span
													class="text-[10px] font-bold tracking-wider uppercase sm:text-xs {spot.status === 'Reserveret'
														? 'text-yellow-500'
														: spot.status === 'Optaget'
															? 'text-red-500'
															: 'text-brand-500'}"
												>
													{formatShortMonth(spot.date)}
												</span>
												<span
													class="text-base leading-none font-bold sm:text-lg {spot.status === 'Reserveret'
														? 'text-yellow-600'
														: spot.status === 'Optaget'
															? 'text-red-600'
															: 'text-brand-600'}"
												>
													{new Date(spot.date).getFullYear()}
												</span>
											</div>

											<!-- Indhold -->
											<div class="min-w-0 flex-1">
												<p class="text-sm font-semibold text-gray-800 sm:text-base">
													{spot.description}
												</p>
												<div class="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
													<!-- Fuld dato -->
													<span
														class="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-500"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-3.5 w-3.5"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
																clip-rule="evenodd"
															/>
														</svg>
														{formatDate(spot.date)}
													</span>

													<!-- Antal pladser badge - KUN MOBIL -->
													<span
														class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 sm:hidden {spot.status === 'Reserveret'
															? 'bg-yellow-50 text-yellow-700 ring-yellow-200'
															: spot.status === 'Optaget'
																? 'bg-red-50 text-red-700 ring-red-200'
																: 'bg-green-50 text-green-700 ring-green-200'}"
													>
														<span class="relative flex h-1.5 w-1.5">
															<span
																class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 {spot.status === 'Reserveret'
																	? 'bg-yellow-400'
																	: spot.status === 'Optaget'
																		? 'bg-red-400'
																		: 'bg-green-400'}"
															></span>
															<span
																class="relative inline-flex h-1.5 w-1.5 rounded-full {spot.status === 'Reserveret'
																	? 'bg-yellow-500'
																	: spot.status === 'Optaget'
																		? 'bg-red-500'
																		: 'bg-green-500'}"
															></span>
														</span>
														{spot.spots}
														{spot.spots === 1 ? 'plads' : 'pladser'}
													</span>
												</div>
											</div>

											<!-- Antal pladser badge - KUN DESKTOP -->
											<span
												class="ml-auto hidden shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ring-1 sm:inline-flex {spot.status === 'Reserveret'
													? 'bg-yellow-50 text-yellow-700 ring-yellow-200'
													: spot.status === 'Optaget'
														? 'bg-red-50 text-red-700 ring-red-200'
														: 'bg-green-50 text-green-700 ring-green-200'}"
											>
												<span class="relative flex h-2 w-2">
													<span
														class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 {spot.status === 'Reserveret'
															? 'bg-yellow-400'
															: spot.status === 'Optaget'
																? 'bg-red-400'
																: 'bg-green-400'}"
													></span>
													<span
														class="relative inline-flex h-2 w-2 rounded-full {spot.status === 'Reserveret'
															? 'bg-yellow-500'
															: spot.status === 'Optaget'
																? 'bg-red-500'
																: 'bg-green-500'}"
													></span>
												</span>
												{spot.spots}
												{spot.spots === 1 ? 'plads' : 'pladser'}
											</span>
										</div>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>