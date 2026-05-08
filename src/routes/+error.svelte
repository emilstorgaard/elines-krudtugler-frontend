<!-- src/routes/+error.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const status = $derived($page.status);
	const isNotFound = $derived(status === 404);

	const suggestions = [
		{ emoji: '🏠', title: 'Forsiden', desc: 'Start forfra og find rundt på siden.', href: '/' },
		{
			emoji: '💰',
			title: 'Priser',
			desc: 'Se hvad en plads koster med tilskud.',
			href: '/#priser'
		},
		{ emoji: '📖', title: 'Om os', desc: 'Læs om hverdagen i dagplejen.', href: '/#om' },
		{ emoji: '✉️', title: 'Kontakt', desc: 'Skriv til os — vi svarer hurtigt.', href: '/#kontakt' }
	];
</script>

<svelte:head>
	<title>{status} · {isNotFound ? 'Siden blev ikke fundet' : 'Der opstod en fejl'}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="relative flex min-h-screen overflow-hidden bg-white px-4 py-24">
	<!-- Decorative blurs -->
	<div class="absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-50/80 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-50/60 blur-3xl"></div>

	<div class="relative mx-auto w-full max-w-3xl">
		<!-- Header -->
		<div class="mb-4 flex justify-center">
			<span
				class="rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-brand-700 uppercase"
			>
				Fejl {status}
			</span>
		</div>

		<h1 class="mb-4 text-center text-5xl font-bold text-gray-800 md:text-6xl">
			{#if isNotFound}
				Hovsa — siden findes ikke
			{:else}
				Noget gik galt
			{/if}
		</h1>
		<p class="mx-auto mb-12 max-w-xl text-center text-lg text-gray-500">
			{#if isNotFound}
				Den side du leder efter er enten flyttet, slettet, eller har aldrig eksisteret. Lad os
				hjælpe dig videre.
			{:else}
				Der opstod en uventet fejl. Prøv at genindlæse siden eller gå tilbage til forsiden.
			{/if}
		</p>

		<!-- Big status card -->
		<div class="mb-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
			<div class="flex flex-col items-center gap-6 px-8 py-10 sm:flex-row sm:gap-8">
				<div
					class="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-brand-100 text-5xl"
				>
					{isNotFound ? '🧭' : '⚠️'}
				</div>
				<div class="flex-1 text-center sm:text-left">
					<p class="mb-1 text-sm font-semibold tracking-wide text-brand-700 uppercase">
						{isNotFound ? 'Side ikke fundet' : 'Uventet fejl'}
					</p>
					<p class="mb-4 leading-relaxed text-gray-600">
						{$page.error?.message ?? 'Vi kunne ikke finde det du søgte.'}
					</p>
					<div class="flex flex-wrap justify-center gap-3 sm:justify-start">
						<button
							onclick={() => goto('/')}
							class="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500"
						>
							Til forsiden
						</button>
						<button
							onclick={() => history.back()}
							class="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
						>
							← Gå tilbage
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
