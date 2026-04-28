<section id="kontakt" class="relative overflow-hidden bg-green-50 px-4 py-24">
	<!-- Decorative blobs -->
	<div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/60 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"></div>

	<div class="relative mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-4 flex justify-center">
			<span class="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-green-700 uppercase">
				Kontakt
			</span>
		</div>
		<h2 class="mb-4 text-center text-4xl font-bold text-gray-800 md:text-5xl">
			Lad os tage en snak
		</h2>
		<p class="mb-16 text-center text-lg text-gray-500">
			Jeg glæder mig til at høre fra dig
		</p>

		<div class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
			<div class="grid md:grid-cols-2">

				<!-- Contact info -->
				<div class="space-y-6 p-8 md:p-10">
					<h3 class="text-xl font-bold text-gray-800">Kontaktoplysninger</h3>

					{#each [
						{ emoji: '📞', label: 'Telefon', content: '+45 12 34 56 78', href: 'tel:+4512345678' },
						{ emoji: '✉️', label: 'Email', content: 'eline@storgaardandersen.dk', href: 'mailto:eline@storgaardandersen.dk' },
					] as item}
						<a
							href={item.href}
							class="group flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition-all duration-200 hover:border-green-200 hover:bg-green-50 hover:shadow-sm"
						>
							<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl transition-transform duration-200 group-hover:scale-110">
								{item.emoji}
							</div>
							<div>
								<p class="text-xs font-semibold tracking-wide text-gray-400 uppercase">{item.label}</p>
								<p class="font-semibold text-green-600">{item.content}</p>
							</div>
						</a>
					{/each}

					{#each [
						{ emoji: '📍', label: 'Adresse', lines: ['Svinglen 16', '8800 Viborg'] },
						{ emoji: '🕐', label: 'Åbningstider', lines: ['Mandag – Fredag', '7:00 – 17:00'] },
					] as item}
						<div class="flex items-center gap-4 rounded-2xl border border-gray-100 p-4">
							<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl">
								{item.emoji}
							</div>
							<div>
								<p class="text-xs font-semibold tracking-wide text-gray-400 uppercase">{item.label}</p>
								{#each item.lines as line}
									<p class="font-semibold text-gray-700">{line}</p>
								{/each}
							</div>
						</div>
					{/each}
				</div>

				<!-- Availability panel -->
				<div class="flex flex-col justify-between bg-gradient-to-br from-green-500 to-green-600 p-8 text-white md:p-10">
					<div>
						<div class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm">
							<span class="h-2 w-2 animate-pulse rounded-full bg-green-300"></span>
							<span class="text-sm font-semibold">Ledige pladser nu</span>
						</div>

						<h3 class="mb-4 text-2xl font-bold">
							2 ledige pladser<br />fra august 2026
						</h3>

						<p class="mb-8 leading-relaxed text-white/85">
							Er du interesseret i at høre mere eller se vores lokaler? Kontakt mig for en
							uforpligtende snak — jeg svarer altid inden for 24 timer.
						</p>

						<div class="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
							<p class="text-sm leading-relaxed text-white/90">
								💝 Jeg tilbyder introduktionsforløb, så dit barn kan vænne sig til dagplejen i eget tempo
							</p>
						</div>
					</div>

					<div class="mt-8 flex flex-col gap-3">
						
						<a
							href="tel:+4512345678"
							class="flex items-center justify-center gap-2 rounded-full bg-white py-3 text-center font-bold text-green-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
						>
							📞 Ring til mig
						</a>
						
						<a
							href="mailto:eline@storgaardandersen.dk"
							class="flex items-center justify-center gap-2 rounded-full border-2 border-white/50 py-3 text-center font-semibold text-white transition-all hover:bg-white/10"
						>
							✉️ Send en email
						</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>