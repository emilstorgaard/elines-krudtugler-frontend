<script lang="ts">
	import type { PracticalPage } from '$lib/types/practicalPage';

	let { page }: { page: PracticalPage } = $props();

	const p = $derived(page.properties);
</script>

<section id="kost" class="relative overflow-hidden px-4 py-8">
	<div class="relative mx-auto max-w-4xl">
		{#if p.dietLabel}
			<div class="mb-8 flex justify-center">
				<span
					class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
					{p.dietLabel}
				</span>
			</div>
		{/if}
	</div>
</section>
