<script lang="ts">
	import type { ContactPage } from '$lib/types/contactPage';
	import type { Settings } from '$lib/types/settings';

	let {
		page,
		settings
	}: {
		page: ContactPage;
		settings: Settings;
	} = $props();

	const p = $derived(page.properties);
	const s = $derived(settings.properties);

	const showAvailability = $derived(p.availabilityEnabled === true);

	const phoneHref = $derived(`tel:${s.phone?.replace(/\s/g, '') ?? ''}`);
	const emailHref = $derived(`mailto:${s.email ?? ''}`);

	type ContactItem = {
		emoji: string;
		label: string;
		lines: string[];
		href?: string;
	};

	const contactItems = $derived<ContactItem[]>(
		[
			s.phone && {
				emoji: '📞',
				label: 'Telefon',
				lines: [s.phone],
				href: phoneHref
			},
			s.email && {
				emoji: '✉️',
				label: 'Email',
				lines: [s.email],
				href: emailHref
			},
			s.address && {
				emoji: '📍',
				label: 'Adresse',
				lines: s.address.split('\n').filter((line) => line.trim() !== '')
			}
		].filter((item): item is ContactItem => Boolean(item))
	);
</script>

<div class="text-center">
	<h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
		{p.pageTitle}
	</h1>
</div>

{#if p.pageIntro}
	<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
		{p.pageIntro}
	</p>
{/if}

<div class="my-14 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
	<div class="grid" class:md:grid-cols-2={showAvailability}>
		<div class="space-y-6 p-8 md:p-10">
			{#if p.contactSectionTitle}
				<h3 class="text-xl font-bold text-gray-800">{p.contactSectionTitle}</h3>
			{/if}

			{#each contactItems as item}
				<svelte:element
					this={item.href ? 'a' : 'div'}
					href={item.href}
					class="group flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition-all duration-200 {item.href
						? 'hover:border-brand-200 hover:bg-brand-50 hover:shadow-sm'
						: ''}"
				>
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-2xl {item.href
							? 'transition-transform duration-200 group-hover:scale-110'
							: ''}"
					>
						{item.emoji}
					</div>
					<div>
						<p class="text-xs font-semibold tracking-wide text-gray-400 uppercase">
							{item.label}
						</p>
						{#each item.lines as line}
							<p class="font-semibold {item.href ? 'text-brand-600' : 'text-gray-700'}">
								{line}
							</p>
						{/each}
					</div>
				</svelte:element>
			{/each}
		</div>

		{#if showAvailability}
			<div
				class="flex flex-col justify-between bg-linear-to-br from-brand-500 to-brand-600 p-8 text-white md:p-10"
			>
				<div>
					{#if p.availabilityBadge}
						<div
							class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm"
						>
							<span class="h-2 w-2 animate-pulse rounded-full bg-brand-300"></span>
							<span class="text-sm font-semibold">{p.availabilityBadge}</span>
						</div>
					{/if}

					{#if p.availabilityTitle}
						<h3 class="mb-4 text-2xl font-bold whitespace-pre-line">
							{p.availabilityTitle}
						</h3>
					{/if}

					{#if p.availabilityDescription}
						<p class="mb-8 leading-relaxed whitespace-pre-line text-white/85">
							{p.availabilityDescription}
						</p>
					{/if}
				</div>

				<div class="mt-8 flex flex-col gap-3">
					{#if p.availabilityCallButton && s.phone}
						<a
							href={phoneHref}
							class="flex items-center justify-center gap-2 rounded-full bg-white py-3 text-center font-bold text-brand-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
						>
							{p.availabilityCallButton}
						</a>
					{/if}

					{#if p.availabilityEmailButton && s.email}
						<a
							href={emailHref}
							class="flex items-center justify-center gap-2 rounded-full border-2 border-white/50 py-3 text-center font-semibold text-white transition-all hover:bg-white/10"
						>
							{p.availabilityEmailButton}
						</a>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>
