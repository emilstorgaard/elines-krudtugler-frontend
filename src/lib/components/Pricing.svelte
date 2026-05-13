<script lang="ts">
	import type { PracticalPage } from '$lib/types/practicalPage';

	let { page }: { page: PracticalPage } = $props();

	const p = $derived(page.properties);

	const infoTiles = $derived(
		p.pricingInfoTiles?.items?.map((item) => item.content.properties) ?? []
	);

	const subTiles = $derived(p.pricingSubTiles?.items?.map((item) => item.content.properties) ?? []);

	const hasPricingCard = $derived(
		!!(p.pricingPriceValue || p.pricingDiscountValue || p.pricingFinalValue)
	);

	const hasContent = $derived(
		!!(
			p.pricingLabel ||
			p.pricingIntro ||
			hasPricingCard ||
			infoTiles.length > 0 ||
			subTiles.length > 0
		)
	);
</script>

{#if hasContent}
	<section id="priser" class="relative overflow-hidden px-4 py-8">
		<div class="relative mx-auto max-w-3xl">
			{#if p.pricingLabel}
				<div class="mb-4 flex justify-center">
					<span
						class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
						{p.pricingLabel}
					</span>
				</div>
			{/if}

			{#if p.pricingIntro}
				<p
					class="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed whitespace-pre-line text-gray-500"
				>
					{p.pricingIntro}
				</p>
			{/if}

			{#if hasPricingCard}
				<div
					class="relative mb-6 overflow-hidden rounded-3xl border border-brand-200/60 bg-white shadow-2xl shadow-brand-900/10"
				>
					<div class="h-1.5 bg-linear-to-r from-brand-400 via-brand-500 to-brand-600"></div>

					<div class="px-8 py-2 sm:px-10">
						{#if p.pricingPriceLabel && p.pricingPriceValue}
							<div class="flex items-baseline justify-between border-b border-gray-100 py-5">
								<span class="text-gray-500">{p.pricingPriceLabel}</span>
								<span class="text-2xl font-bold text-gray-800 tabular-nums sm:text-3xl">
									{p.pricingPriceValue}
								</span>
							</div>
						{/if}

						{#if p.pricingDiscountLabel && p.pricingDiscountValue}
							<div class="flex items-baseline justify-between border-b border-gray-100 py-5">
								<span class="text-gray-500">{p.pricingDiscountLabel}</span>
								<span class="text-xl font-bold text-brand-600 tabular-nums sm:text-2xl">
									{p.pricingDiscountValue}
								</span>
							</div>
						{/if}
					</div>

					{#if p.pricingFinalLabel && p.pricingFinalValue}
						<div
							class="relative flex items-baseline justify-between bg-linear-to-br from-brand-50 to-brand-100/60 px-8 py-7 sm:px-10"
						>
							<div>
								<p class="mb-1 text-xs font-semibold tracking-[0.15em] text-brand-700 uppercase">
									{p.pricingFinalLabel}
								</p>
							</div>
							<span class="text-3xl font-bold text-gray-900 tabular-nums sm:text-4xl">
								{p.pricingFinalValue}
								{#if p.pricingFinalUnit}
									<span class="text-base font-normal text-gray-500 sm:text-lg">
										{p.pricingFinalUnit}
									</span>
								{/if}
							</span>
						</div>
					{/if}
				</div>
			{/if}

			{#if infoTiles.length > 0}
				<div class="grid gap-4 sm:grid-cols-2">
					{#each infoTiles as tile}
						<div
							class="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
						>
							{#if tile.icon}
								<div
									class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-xl"
								>
									{tile.icon}
								</div>
							{/if}
							<div>
								<p class="mb-1 font-bold text-gray-800">{tile.title}</p>
								<p class="text-sm leading-relaxed whitespace-pre-line text-gray-500">
									{tile.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
			{/if}

			{#if subTiles.length > 0}
				<div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each subTiles as tile}
						<div
							class="group relative overflow-hidden rounded-2xl border border-brand-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
						>
							{#if tile.icon}
								<div
									class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-lg transition-colors group-hover:bg-brand-100"
								>
									{tile.icon}
								</div>
							{/if}
							<p class="mb-1.5 font-bold text-gray-800">{tile.title}</p>
							<p class="text-sm leading-relaxed whitespace-pre-line text-gray-500">
								{tile.description}
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}
