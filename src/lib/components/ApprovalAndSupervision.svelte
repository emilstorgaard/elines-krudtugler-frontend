<script lang="ts">
	import type { PracticalPage } from '$lib/types/practicalPage';

	let { page }: { page: PracticalPage } = $props();

	const p = $derived(page.properties);

	const cards = $derived(p.approvalCards?.items?.map((item) => item.content.properties) ?? []);

	const hasBanner = $derived(
		!!(p.approvalBannerTitle || p.approvalBannerSubtitle || p.approvalBannerIcon)
	);

	const hasContent = $derived(hasBanner || cards.length > 0);
</script>

{#if hasContent}
	<section id="godkendelse-og-tilsyn" class="relative overflow-hidden px-4 py-8">
		<div class="relative mx-auto max-w-4xl">
			{#if p.approvalLabel}
				<div class="mb-8 flex justify-center">
					<span
						class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
						{p.approvalLabel}
					</span>
				</div>
			{/if}

			{#if hasBanner}
				<div
					class="group relative mb-6 flex items-center gap-5 overflow-hidden rounded-3xl border border-brand-200/60 bg-linear-to-r from-white via-white to-brand-50/50 px-6 py-6 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:px-8"
				>
					<div
						class="absolute top-0 left-0 h-full w-1.5 bg-linear-to-b from-brand-400 to-brand-600"
					></div>
					{#if p.approvalBannerIcon}
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand-100 to-brand-200 text-2xl shadow-sm"
						>
							{p.approvalBannerIcon}
						</div>
					{/if}
					<div>
						{#if p.approvalBannerTitle}
							<p class="text-lg font-bold text-gray-800">{p.approvalBannerTitle}</p>
						{/if}
						{#if p.approvalBannerSubtitle}
							<p class="text-sm text-gray-500">{p.approvalBannerSubtitle}</p>
						{/if}
					</div>
				</div>
			{/if}

			{#if cards.length > 0}
				<div class="grid gap-4 md:grid-cols-3">
					{#each cards as card}
						<div
							class="group relative overflow-hidden rounded-2xl border border-brand-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
						>
							{#if card.icon}
								<div
									class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-brand-100 to-brand-200 text-xl shadow-sm transition-transform duration-300 group-hover:scale-110"
								>
									{card.icon}
								</div>
							{/if}
							<p class="mb-2 font-bold text-gray-800">{card.title}</p>
							<p class="text-sm leading-relaxed whitespace-pre-line text-gray-500">
								{card.description}
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}
