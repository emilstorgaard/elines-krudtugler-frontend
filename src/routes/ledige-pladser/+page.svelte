<script lang="ts">
	import Schedule from '$lib/components/Schedule.svelte';
</script>

<svelte:head>
	<title>Børnepasning – Eline Storgaard Andersen</title>
	<meta
		name="description"
		content="Professionel børnepasning i Viborg. Et trygt og kærligt hjem for dit barn."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Nunito:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section id="ledige-pladser" class="relative overflow-hidden bg-brand-50 px-4 py-12">
	<!-- Decorative background blobs -->
	<div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"></div>

	<div class="relative mx-auto max-w-5xl">
		<!-- Section label -->
		<div class="mb-12 flex justify-center">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm ring-1 ring-brand-200/60"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
				Ledige pladser
			</span>
		</div>

		<!-- Heading / intro -->
		<h2 class="text-center text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
			Har du brug for en
			<span class="text-brand-600">tryg pasningsløsning?</span>
		</h2>

		<p class="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
			Er I interesseret i at høre nærmere om hverdagen hos <strong>Eline´s Krudtugler</strong>, er I
			meget velkomne til at kontakte mig. I er også velkomne til et besøg og en snak om jeres
			pasningsbehov.
		</p>

		<div
			class="mt-14 overflow-hidden rounded-4xl bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
		>
			<div class="relative p-8 md:p-12">
				<div
					class="absolute inset-0 bg-linear-to-br from-brand-50/70 via-transparent to-transparent"
				></div>

				<div class="relative mx-auto max-w-2xl space-y-6">
					<div
						class="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600 shadow-sm ring-1 ring-brand-100"
					>
						Opdateres løbende
					</div>

					<div class="space-y-3">
						<h3 class="text-2xl font-bold tracking-tight text-gray-800 md:text-3xl">
							Ledige pladser hos Eline´s Krudtugler
						</h3>
						<div class="h-1 w-16 rounded-full bg-linear-to-r from-brand-400 to-brand-600"></div>
					</div>

					<p class="max-w-xl text-lg leading-relaxed text-gray-600">
						Ledige pladser opdateres løbende her på siden.
					</p>

					<p class="max-w-xl text-lg leading-relaxed text-gray-600">
						Er der ikke en ledig plads, der passer til jeres behov, er I meget velkomne til at
						kontakte mig, så vi sammen kan prøve at finde en løsning.
					</p>

					<a
						href="/kontakt"
						class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-600 bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-400 hover:shadow-lg sm:text-base"
					>
						Kontakt mig gerne
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
