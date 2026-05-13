<script lang="ts">
	import type { PracticalPage } from '$lib/types/practicalPage';

	let { page }: { page: PracticalPage } = $props();

	const p = $derived(page.properties);

	const parentsItems = $derived(
		p.bringParentsItems?.items?.map((item) => item.content.properties) ?? []
	);

	const elineItems = $derived(
		p.bringElineItems?.items?.map((item) => item.content.properties) ?? []
	);

	const hasContent = $derived(parentsItems.length > 0 || elineItems.length > 0);
</script>

{#if hasContent}
	<section id="hvad-skal-medbringes" class="relative overflow-hidden px-4 py-8">
		<div class="relative mx-auto max-w-5xl">
			{#if p.bringLabel}
				<div class="mb-4 flex justify-center">
					<span
						class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
						{p.bringLabel}
					</span>
				</div>
			{/if}

			{#if p.bringIntro}
				<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-500">
					{p.bringIntro}
				</p>
			{/if}

			<div class="grid gap-6 md:grid-cols-2">
				{#if parentsItems.length > 0}
					<div
						class="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-200/60 bg-white/90 p-8 shadow-xl shadow-brand-900/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
					>
						<div
							class="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
						></div>
						<div class="relative">
							{#if p.bringParentsTitle}
								<div class="mb-6 flex items-center gap-3">
									<h3 class="text-xl font-bold text-gray-800">{p.bringParentsTitle}</h3>
								</div>
							{/if}
							<ul class="space-y-3.5 text-gray-700">
								{#each parentsItems as item}
									<li class="flex items-start gap-3">
										<span
											class="mt-2 h-2 w-2 shrink-0 rounded-full bg-linear-to-br from-brand-400 to-brand-600 shadow-sm"
										></span>
										<span>
											{item.text}
											{#if item.subText}
												<span class="text-gray-500"> {item.subText}</span>
											{/if}
										</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/if}

				{#if elineItems.length > 0}
					<div
						class="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-200/60 bg-white/90 p-8 shadow-xl shadow-brand-900/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
					>
						<div
							class="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
						></div>
						<div class="relative">
							{#if p.bringElineTitle}
								<div class="mb-6 flex items-center gap-3">
									<h3 class="text-xl font-bold text-gray-800">{p.bringElineTitle}</h3>
								</div>
							{/if}
							<ul class="space-y-3.5 text-gray-700">
								{#each elineItems as item}
									<li class="flex items-start gap-3">
										<span
											class="mt-2 h-2 w-2 shrink-0 rounded-full bg-linear-to-br from-brand-400 to-brand-600 shadow-sm"
										></span>
										<span>
											{item.text}
											{#if item.subText}
												<span class="mt-1 block text-sm text-gray-500">{item.subText}</span>
											{/if}
										</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>
{/if}
