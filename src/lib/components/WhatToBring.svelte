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
	<section id="hvad-skal-medbringes" class="relative overflow-hidden px-4 py-6 sm:py-8">
		<div class="relative mx-auto max-w-5xl">
			<div
				class="relative overflow-hidden rounded-2xl border border-brand-200/60 bg-white/90 p-5 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-12"
			>
				<div
					class="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-brand-50/40 via-transparent to-transparent sm:rounded-3xl"
				></div>

				<div class="relative">
					{#if p.bringLabel}
						<div class="mb-4 flex justify-center sm:mb-6">
							<span
								class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-brand-700 uppercase shadow-sm sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
							>
								<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
								{p.bringLabel}
							</span>
						</div>
					{/if}

					{#if p.bringIntro}
						<p class="mx-auto mb-6 max-w-2xl text-center text-base text-gray-500 sm:mb-10 sm:text-lg">
							{p.bringIntro}
						</p>
					{/if}

					<div class="grid gap-4 sm:gap-6 md:grid-cols-2">
						{#if parentsItems.length > 0}
							<div
								class="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-200/60 bg-white p-5 shadow-lg shadow-brand-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10 sm:rounded-3xl sm:p-8"
							>
								<div
									class="absolute top-0 right-0 h-24 w-24 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80 sm:h-32 sm:w-32"
								></div>
								<div class="relative">
									{#if p.bringParentsTitle}
										<div class="mb-4 flex items-center gap-3 sm:mb-6">
											<h3 class="text-lg font-bold text-gray-800 sm:text-xl">{p.bringParentsTitle}</h3>
										</div>
									{/if}
									<ul class="space-y-3 text-sm text-gray-700 sm:space-y-3.5 sm:text-base">
										{#each parentsItems as item}
											<li class="flex items-start gap-3">
												<span
													class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-linear-to-br from-brand-400 to-brand-600 shadow-sm sm:mt-2"
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
								class="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-200/60 bg-white p-5 shadow-lg shadow-brand-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10 sm:rounded-3xl sm:p-8"
							>
								<div
									class="absolute top-0 right-0 h-24 w-24 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80 sm:h-32 sm:w-32"
								></div>
								<div class="relative">
									{#if p.bringElineTitle}
										<div class="mb-4 flex items-center gap-3 sm:mb-6">
											<h3 class="text-lg font-bold text-gray-800 sm:text-xl">{p.bringElineTitle}</h3>
										</div>
									{/if}
									<ul class="space-y-3 text-sm text-gray-700 sm:space-y-3.5 sm:text-base">
										{#each elineItems as item}
											<li class="flex items-start gap-3">
												<span
													class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-linear-to-br from-brand-400 to-brand-600 shadow-sm sm:mt-2"
												></span>
												<span>
													{item.text}
													{#if item.subText}
														<span class="mt-1 block text-xs text-gray-500 sm:text-sm">{item.subText}</span>
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
			</div>
		</div>
	</section>
{/if}