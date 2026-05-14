<script lang="ts">
	import type { PracticalPage } from '$lib/types/practicalPage';

	let { page }: { page: PracticalPage } = $props();

	const p = $derived(page.properties);

	const hasContent = $derived(
		!!(
			p.parentCoopLabel ||
			p.parentCoopMainText ||
			p.parentCoopHighlight ||
			p.parentCoopClosingNote
		)
	);
</script>

{#if hasContent}
	<section id="foraeldresamarbejde" class="relative overflow-hidden px-4 py-8">
		<div class="relative mx-auto max-w-3xl">
			<div
				class="relative overflow-hidden rounded-3xl border border-brand-200/60 bg-white/90 p-8 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:p-12"
			>
				{#if p.parentCoopLabel}
					<div class="mb-8 flex justify-center">
						<span
							class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
							{p.parentCoopLabel}
						</span>
					</div>
				{/if}

				<div class="relative space-y-6 text-center leading-relaxed text-gray-700">
					{#if p.parentCoopMainText}
						<p class="text-lg whitespace-pre-line">{p.parentCoopMainText}</p>
					{/if}

					{#if p.parentCoopHighlight}
						<div
							class="relative overflow-hidden rounded-2xl bg-linear-to-br from-brand-50 to-brand-100/50 px-6 py-6 shadow-inner"
						>
							<p class="whitespace-pre-line text-gray-700">{p.parentCoopHighlight}</p>
						</div>
					{/if}

					{#if p.parentCoopClosingNote}
						<p class="whitespace-pre-line text-gray-600 italic">
							{p.parentCoopClosingNote}
						</p>
					{/if}
				</div>
			</div>
		</div>
	</section>
{/if}
