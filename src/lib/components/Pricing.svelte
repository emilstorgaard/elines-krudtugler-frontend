<section id="priser" class="relative overflow-hidden bg-white px-4 py-24">
	<div class="absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-50/80 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-50/60 blur-3xl"></div>

	<div class="relative mx-auto max-w-3xl">
		<!-- Header -->
		<div class="mb-4 flex justify-center">
			<span class="rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-brand-700 uppercase">
				Priser
			</span>
		</div>
		<h2 class="mb-4 text-center text-4xl font-bold text-gray-800 md:text-5xl">Hvad koster det?</h2>
		<p class="mb-16 text-center text-lg text-gray-500">
			Én fuldtidsplads · 54 timer/uge · alle 12 måneder
		</p>

		<!-- Main pricing card -->
		<div class="mb-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
			<div class="divide-y divide-gray-100 px-8 py-2">
				<div class="flex items-baseline justify-between py-5">
					<span class="text-gray-500">Månedlig pris 2025</span>
					<span class="text-3xl font-bold text-gray-800">9.700 kr.</span>
				</div>
				<div class="flex items-baseline justify-between py-5">
					<span class="text-gray-500">Maks. kommunalt tilskud (75 %)</span>
					<span class="text-2xl font-bold text-brand-600">− 7.247 kr.</span>
				</div>
				<div class="flex items-baseline justify-between bg-brand-50 -mx-8 px-8 py-6">
					<div>
						<p class="text-sm font-semibold text-brand-700 uppercase tracking-wide mb-1">Din egenbetaling</p>
						<p class="text-gray-500 text-sm">ved maks. tilskud fra Viborg Kommune</p>
					</div>
					<span class="text-4xl font-bold text-gray-800">2.434 <span class="text-lg text-gray-500 font-normal">kr./md.</span></span>
				</div>
			</div>
		</div>

		<!-- Subsidy explanation -->
		<div class="mb-8 flex items-start gap-4 rounded-3xl border border-brand-100 bg-brand-50 px-6 py-5">
			<span class="mt-0.5 text-2xl">💡</span>
			<p class="text-gray-600 leading-relaxed">
				Tilskuddet fra Viborg Kommune kan maks. udgøre <strong class="text-gray-800">75 % af de dokumenterede udgifter</strong>.
				Du betaler den fulde pris til dagplejen og modtager tilskuddet bagud direkte fra kommunen.
				<a href="https://www.viborg.dk/borger/boern-og-familie/dagtilbud/privat-pasning/" target="_blank" rel="noopener noreferrer" class="text-brand-600 underline underline-offset-2 hover:text-brand-500 ml-1">
					Læs om tilskud hos Viborg Kommune →
				</a>
			</p>
		</div>

		<!-- Info tiles -->
		<div class="grid gap-4 sm:grid-cols-2">
			{#each [
				{
					emoji: '📅',
					title: '12 måneder om året',
					desc: 'Der betales alle 12 måneder — tilskuddet fra kommunen udbetales ligeledes alle 12 måneder, men er bagud betalt.'
				},
				{
					emoji: '🔒',
					title: 'Pladsgebyr: 2.434 kr.',
					desc: 'Pladsen er sikret, når kontrakten er underskrevet og gebyret er betalt. Gebyret fratrækkes første måneds betaling.'
				},
				{
					emoji: '💚',
					title: 'Gratis indkøring',
					desc: 'Vi tilbyder en gratis indkøringsperiode, så dit barn kan vænne sig til de nye rammer i sit eget tempo.'
				},
				{
					emoji: '🍼',
					title: 'Alder: 0–3 år',
					desc: 'Pladsen gælder fra barnet er ca. 6 måneder til måneden inden det fylder 3 år.'
				}
			] as tile}
				<div class="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
					<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-xl">
						{tile.emoji}
					</div>
					<div>
						<p class="mb-1 font-bold text-gray-800">{tile.title}</p>
						<p class="text-sm leading-relaxed text-gray-500">{tile.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>