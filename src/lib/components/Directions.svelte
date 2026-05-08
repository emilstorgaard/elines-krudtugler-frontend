<div class=" text-center">
	<h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">Sådan finder du os</h1>
</div>

<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
	Vi holder til i et roligt kvarter i hjertet af Viborg
</p>

<div class="my-14 grid items-stretch gap-8 lg:grid-cols-5">
	<!-- Map — takes up 3 of 5 columns on desktop -->
	<div class="overflow-hidden rounded-3xl shadow-xl lg:col-span-3">
		<iframe
			title="Krudtuglernes placering på kort"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.0!2d9.4!3d56.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSvinglen%2016%2C%208800%20Viborg!5e0!3m2!1sda!2sdk!4v1"
			width="100%"
			height="100%"
			style="min-height: 420px; border: 0; display: block;"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>

	<!-- Info panel — takes up 2 of 5 columns on desktop -->
	<div class="flex flex-col gap-5 lg:col-span-2">
		<!-- Address card -->
		<div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
			<div class="mb-4 flex items-center gap-3">
				<div
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-xl"
				>
					📍
				</div>
				<div>
					<p class="text-xs font-semibold tracking-wide text-gray-400 uppercase">Adresse</p>
					<p class="font-bold text-gray-800">Svinglen 16, 8800 Viborg</p>
				</div>
			</div>
			<a
				href="https://www.google.com/maps/dir/?api=1&destination=Svinglen+16,+8800+Viborg"
				target="_blank"
				rel="noopener noreferrer"
				class="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-3 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				Få rutevejledning
			</a>
		</div>

		<!-- Transport options -->
		{#each [{ emoji: '🚗', title: 'Bil', desc: 'Parkering direkte foran huset.' }, { emoji: '🚌', title: 'Bus', desc: 'Buslinje 2 stopper ved Svinglen — kun 2 minutters gang derfra.' }, { emoji: '🚲', title: 'Cykel', desc: 'God cykelsti hele vejen.' }] as item}
			<div
				class="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-brand-200 hover:bg-brand-50 hover:shadow-md"
			>
				<div
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-xl transition-transform duration-200 group-hover:scale-110"
				>
					{item.emoji}
				</div>
				<div>
					<p class="mb-0.5 font-bold text-gray-800">{item.title}</p>
					<p class="text-sm leading-relaxed text-gray-500">{item.desc}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
