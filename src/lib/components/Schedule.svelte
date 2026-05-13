<script lang="ts">
	import type { WeekdayPage } from '$lib/types/weekdayPage';

	let { page }: { page: WeekdayPage } = $props();

	const p = $derived(page.properties);

	const scheduleItems = $derived(
		p.scheduleItems?.items?.map((item) => item.content.properties) ?? []
	);
</script>

<div class="text-center">
	<h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
		{p.pageTitle}
	</h1>
</div>

<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
	{p.pageIntro}
</p>

<div class="relative my-14">
	<div
		class="absolute top-0 bottom-0 left-4.5 w-px bg-linear-to-b from-brand-200 via-brand-200 to-brand-100 md:left-1/2 md:-translate-x-1/2"
	></div>

	<div class="space-y-6 md:space-y-8">
		{#each scheduleItems as item, i}
			<div
				class={`relative flex items-start gap-4 md:items-center md:gap-0 ${
					i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
				}`}
			>
				<div
					class={`ml-12 flex-1 md:ml-0 ${
						i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
					}`}
				>
					<div
						class="group rounded-3xl border border-white/70 bg-white/95 p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-all duration-300 md:p-6"
					>
						<p class="mb-1 text-sm font-bold tracking-wide text-brand-600">
							{item.time}
						</p>
						<p class="leading-relaxed font-semibold whitespace-pre-line text-gray-800">
							{item.activity}
						</p>
					</div>
				</div>

				<div
					class="absolute left-0 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-brand-50 bg-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.35)] ring-1 ring-brand-100 md:left-1/2 md:-translate-x-1/2"
				>
					<span class="h-2.5 w-2.5 rounded-full bg-brand-500"></span>
				</div>

				<div class="hidden flex-1 md:block"></div>
			</div>
		{/each}
	</div>
</div>

{#if p.footerNote}
	<div class="mt-12 rounded-3xl bg-white/95 px-6 py-5 text-center shadow-sm ring-1 ring-black/5">
		<p class="text-gray-600">
			{p.footerNote}
		</p>
	</div>
{/if}

{#if p.activitiesHeading || p.activitiesContent}
	<div
		class="mt-6 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm ring-1 ring-black/5"
	>
		{#if p.activitiesHeading}
			<div class="border-b border-brand-100/70 bg-linear-to-r from-brand-50 to-white px-6 py-5">
				<h3 class="text-center text-lg font-bold tracking-tight text-gray-800 md:text-xl">
					{p.activitiesHeading}
				</h3>
			</div>
		{/if}

		<div class="space-y-6 px-6 py-6 text-gray-700 md:px-8">
			{#if p.activitiesContent?.markup}
				<div
					class="prose max-w-none leading-relaxed
                        [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-brand-500
                        [&_ul_ul]:mt-2 [&_ul_ul]:space-y-1 [&_ul_ul]:pl-6 [&_ul_ul]:text-gray-600 [&_ul_ul]:marker:text-brand-300"
				>
					{@html p.activitiesContent.markup}
				</div>
			{/if}

			{#if p.focusHeading || p.focusAreas}
				<div class="rounded-2xl bg-brand-50/70 p-4 ring-1 ring-brand-100/70">
					{#if p.focusHeading}
						<p class="font-semibold text-gray-800">{p.focusHeading}</p>
					{/if}
					{#if p.focusAreas}
						<p class="text-gray-600">{p.focusAreas}</p>
					{/if}
				</div>
			{/if}
		</div>
	</div>
{/if}
