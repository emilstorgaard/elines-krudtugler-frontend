<section id="om-mig" class="relative overflow-hidden bg-green-50 px-4 py-24">
	<!-- Decorative background blob -->
	<div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"></div>

	<div class="relative mx-auto max-w-6xl">
		<!-- Section label -->
		<div class="mb-4 flex justify-center">
			<span class="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-green-700 uppercase">
				Om mig
			</span>
		</div>
		<h2 class="mb-16 text-center text-4xl font-bold text-gray-800 md:text-5xl">
			Mød din private børnepasser
		</h2>

		<div class="grid items-center gap-12 md:grid-cols-2">
			<!-- Image -->
			<div class="relative">
				<div class="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-green-300"></div>
				<img
					src="https://images.unsplash.com/photo-1672586420444-1a1a492e7bd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwaG9tZSUyMGludGVyaW9yJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzY3OTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
					alt="Krudtuglernes base"
					class="relative h-[420px] w-full rounded-2xl object-cover shadow-xl"
				/>
				<!-- Floating badge -->
				<div class="absolute -bottom-5 -right-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg">
					<span class="text-3xl">
						<img src="/logo.png" alt="Logo" class="h-10 w-10 object-contain"/>
					</span>
					<div>
						<p class="text-xs font-medium text-gray-500">Erfaring</p>
						<p class="text-lg font-bold text-gray-800">10+ år</p>
					</div>
				</div>
			</div>

			<!-- Content -->
			<div class="space-y-6">
				<div>
					<h3 class="mb-3 text-2xl font-bold text-gray-800">
						Hej, jeg er <span class="text-green-600">Eline</span> 👋
					</h3>
					<p class="text-lg leading-relaxed text-gray-600">
						Jeg har passet børn i over 10 år og elsker mit arbejde.
						Hos mig får dit barn en tryg hverdag fyldt med leg, læring og kærlighed.
					</p>
				</div>

				<p class="text-lg leading-relaxed text-gray-600">
					Jeg har plads til <strong class="text-green-600">5 børn i alderen 0–3 år</strong> i mit
					lyse og børnevenlige hjem på Svinglen 16 i Viborg.
				</p>

				<!-- Qualifications -->
				<div class="rounded-2xl bg-white p-6 shadow-md">
					<h4 class="mb-4 text-lg font-bold text-gray-800">Mine kvalifikationer</h4>
					<ul class="space-y-3">
						{#each [
							'Uddannet pædagogisk assistent',
							'Førstehjælpskursus (børn)',
							'Certificeret børnepasser siden 2014',
							'Børnehaveklasselæreruddannelse'
						] as qualification}
							<li class="flex items-center gap-3 text-gray-700">
								<span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">
									✓
								</span>
								{qualification}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>