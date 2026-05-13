<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import type { ErrorPage } from '$lib/types/errorPage';

	const status = $derived(page.status);
	const isNotFound = $derived(status === 404);

	const errorPage = $derived(page.data.errorPage as ErrorPage | null);
	const p = $derived(errorPage?.properties);

	const label = $derived(isNotFound ? p?.notFoundLabel : p?.errorLabel);
	const title = $derived(isNotFound ? p?.notFoundTitle : p?.errorTitle);
	const description = $derived(isNotFound ? p?.notFoundDescription : p?.errorDescription);
	const emoji = $derived(isNotFound ? p?.notFoundEmoji : p?.errorEmoji);
	const cardLabel = $derived(isNotFound ? p?.notFoundCardLabel : p?.errorCardLabel);

	const FALLBACK = {
		label: `Fejl ${status}`,
		title: isNotFound ? 'Hovsa — siden findes ikke' : 'Noget gik galt',
		description: isNotFound
			? 'Den side du leder efter er enten flyttet, slettet, eller har aldrig eksisteret.'
			: 'Der opstod en uventet fejl. Prøv at genindlæse siden.',
		emoji: isNotFound ? '🧭' : '⚠️',
		cardLabel: isNotFound ? 'Side ikke fundet' : 'Uventet fejl',
		homeButton: 'Til forsiden',
		backButton: '← Gå tilbage'
	};

	const showSuggestions = $derived(p?.showSuggestions === true);
	const suggestions = $derived(p?.suggestions?.items?.map((item) => item.content.properties) ?? []);

	const displayTitle = $derived(`${status} · ${title || FALLBACK.title}`);
</script>

<svelte:head>
	<title>{displayTitle}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="relative flex min-h-screen overflow-hidden bg-white px-4 py-24">
	<div class="absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-50/80 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-50/60 blur-3xl"></div>

	<div class="relative mx-auto w-full max-w-3xl">
		<div class="mb-4 flex justify-center">
			<span
				class="rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-brand-700 uppercase"
			>
				{label || FALLBACK.label}
			</span>
		</div>

		<h1 class="mb-4 text-center text-5xl font-bold text-gray-800 md:text-6xl">
			{title || FALLBACK.title}
		</h1>

		<p class="mx-auto mb-12 max-w-xl text-center text-lg whitespace-pre-line text-gray-500">
			{description || FALLBACK.description}
		</p>

		<div class="mb-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
			<div class="flex flex-col items-center gap-6 px-8 py-10 sm:flex-row sm:gap-8">
				<div
					class="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-brand-100 text-5xl"
				>
					{emoji || FALLBACK.emoji}
				</div>
				<div class="flex-1 text-center sm:text-left">
					<p class="mb-1 text-sm font-semibold tracking-wide text-brand-700 uppercase">
						{cardLabel || FALLBACK.cardLabel}
					</p>
					<p class="mb-4 leading-relaxed text-gray-600">
						{page.error?.message ?? 'Vi kunne ikke finde det du søgte.'}
					</p>
					<div class="flex flex-wrap justify-center gap-3 sm:justify-start">
						<button
							onclick={() => goto('/')}
							class="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500"
						>
							{p?.homeButtonText || FALLBACK.homeButton}
						</button>
						<button
							onclick={() => history.back()}
							class="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
						>
							{p?.backButtonText || FALLBACK.backButton}
						</button>
					</div>
				</div>
			</div>
		</div>

		{#if showSuggestions && suggestions.length > 0}
			<div class="mt-12">
				{#if p?.suggestionsHeading}
					<h2 class="mb-6 text-center text-xl font-bold text-gray-800">
						{p.suggestionsHeading}
					</h2>
				{/if}

				<div class="grid gap-4 sm:grid-cols-2">
					{#each suggestions as suggestion}
						<a
							href={suggestion.link}
							class="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-brand-200 hover:bg-brand-50 hover:shadow-md"
						>
							{#if suggestion.icon}
								<div
									class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-xl transition-transform duration-200 group-hover:scale-110"
								>
									{suggestion.icon}
								</div>
							{/if}
							<div>
								<p class="mb-0.5 font-bold text-gray-800">{suggestion.title}</p>
								{#if suggestion.description}
									<p class="text-sm leading-relaxed text-gray-500">
										{suggestion.description}
									</p>
								{/if}
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
