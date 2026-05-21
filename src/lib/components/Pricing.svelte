<script lang="ts">
	import type { PracticalPage } from '$lib/types/practicalPage';

	let { page }: { page: PracticalPage } = $props();

	const p = $derived(page.properties);

	const infoTiles = $derived(
		p.pricingInfoTiles?.items?.map((item) => item.content.properties) ?? []
	);

	const economyTiles = $derived(
		p.economyTiles?.items?.map((item) => item.content.properties) ?? []
	);

	const hasPricingCard = $derived(
		!!(p.pricingPriceValue || p.pricingDiscountValue || p.pricingFinalValue)
	);

	const hasContent = $derived(
		!!(p.pricingLabel || p.pricingIntro || hasPricingCard || infoTiles.length > 0)
	);
</script>

{#if hasContent}
	<section id="priser" class="relative overflow-hidden px-4 py-6 sm:py-8">
		<div class="relative mx-auto max-w-3xl">
			<div
				class="relative rounded-2xl border border-brand-200/60 bg-white/90 p-5 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-12"
			>
				<div
					class="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-brand-50/40 via-transparent to-transparent sm:rounded-3xl"
				></div>

				<div class="relative">
					{#if p.pricingLabel}
						<div class="mb-4 flex justify-center">
							<span
								class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-brand-700 uppercase shadow-sm sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
							>
								<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
								{p.pricingLabel}
							</span>
						</div>
					{/if}

					{#if p.pricingIntro}
						<p
							class="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed whitespace-pre-line text-gray-500 sm:mb-12 sm:text-lg"
						>
							{p.pricingIntro}
						</p>
					{/if}

					{#if hasPricingCard}
						<div
							class="relative mb-5 overflow-hidden rounded-2xl border border-brand-200/60 bg-white shadow-xl shadow-brand-900/10 sm:mb-6 sm:rounded-3xl"
						>
							<div
								class="h-1 bg-linear-to-r from-brand-400 via-brand-500 to-brand-600 sm:h-1.5"
							></div>
							<div class="">
								<!-- px-5 py-1 sm:px-8 md:px-10 sm:py-2 -->
								{#if p.pricingDiscountLabel && p.pricingDiscountValue}
									<div
										class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-gray-100 py-4 sm:py-5"
									>
										<span class="text-sm text-gray-500 sm:text-base">
											{p.pricingDiscountLabel}
										</span>
										<span
											class="text-lg font-bold text-brand-600 tabular-nums sm:text-xl md:text-2xl"
										>
											{p.pricingDiscountValue}
										</span>
									</div>
								{/if}
							</div>
							{#if p.pricingFinalLabel && p.pricingFinalValue}
								<div
									class="relative flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2 bg-linear-to-br from-brand-50 to-brand-100/60 px-5 py-5 sm:px-8 sm:py-7 md:px-10"
								>
									<p
										class="text-[10px] font-semibold tracking-[0.15em] text-brand-700 uppercase sm:text-xs"
									>
										{p.pricingFinalLabel}
									</p>
									<span
										class="text-2xl font-bold text-gray-900 tabular-nums sm:text-3xl md:text-4xl"
									>
										{p.pricingFinalValue}
										{#if p.pricingFinalUnit}
											<span class="text-sm font-normal text-gray-500 sm:text-base md:text-lg">
												{p.pricingFinalUnit}
											</span>
										{/if}
									</span>
								</div>
							{/if}
						</div>
					{/if}

					{#if economyTiles.length > 0}
						<div class="mb-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
							{#each economyTiles as tile}
								<div
									class="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5"
								>
									<div class="min-w-0 flex-1">
										<p class="mb-1 text-sm font-bold text-gray-800 sm:text-base">{tile.title}</p>
										<p class="text-xs leading-relaxed whitespace-pre-line text-gray-500 sm:text-sm">
											{tile.description}
										</p>
									</div>
								</div>
							{/each}
						</div>
					{/if}

					{#if infoTiles.length > 0}
						<div class="grid gap-3 sm:grid-cols-2 sm:gap-4">
							{#each infoTiles as tile}
								<div
									class="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5"
								>
									{#if tile.icon}
										<div
											class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg sm:h-11 sm:w-11 sm:rounded-2xl sm:text-xl"
										>
											{tile.icon}
										</div>
									{/if}
									<div class="min-w-0 flex-1">
										<p class="mb-1 text-sm font-bold text-gray-800 sm:text-base">{tile.title}</p>
										<p class="text-xs leading-relaxed whitespace-pre-line text-gray-500 sm:text-sm">
											{tile.description}
										</p>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</section>
{/if}
