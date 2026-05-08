<script lang="ts">
	const values = [
		'En hverdag med trivsel og udvikling',
		'Omsorg, nærvær og tryghed',
		'Tid til det enkelte barn i trygge, rolige og hjemlige omgivelser',
		'En hverdag med leg, glæde og en masse kram',
		'En god og tryg relation mellem mig og barnet',
		'Et tæt og godt samarbejde med jer forældre',
		'Struktur og genkendelighed i hverdagen',
		'Alle børn skal føle sig set, hørt og forstået',
		'Leg, sprog og motorisk udvikling',
		'Udeliv som en vigtig del af hverdagen',
		'Børnefællesskaber og relationer'
	];
</script>

<div class="relative mx-auto max-w-6xl">
	<h2 class="mb-6 text-center text-4xl font-bold text-gray-800 md:text-5xl">
		Velkommen til min pasningsordning <br /><strong class="text-brand-600"
			>Eline´s Krudtugler</strong
		>
	</h2>
	<p class="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
		En tryg og nærværende hverdag med masser af omsorg, glæde, leg, læring og udvikling for dit
		barn.
	</p>

	<!-- Intro: Content (venstre) + Image (højre) -->
	<div class="mb-24 grid items-center gap-12 md:grid-cols-2">
		<!-- Content -->
		<div class="order-2 space-y-6 md:order-1">
			<div>
				<span
					class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
				>
					Om mig
				</span>
				<h3 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
					Hej, jeg er <span class="text-brand-600">Eline</span>
				</h3>
				<p class="text-lg leading-relaxed text-gray-600">
					Jeg tilbyder en tryg og nærværende hverdag med masser af omsorg, glæde, leg, læring og
					udvikling for dit barn. Jeg lægger stor vægt på anerkendelse og omsorg, så dit barn føler
					sig set og er tryg, mens det er i pasning hos mig.
				</p>
			</div>
			<p class="text-lg leading-relaxed text-gray-600">
				Jeg har <strong class="text-brand-600">23 års erfaring</strong> som kommunal dagplejer, er
				uddannet
				<strong class="text-brand-600">Pædagogisk Assistent</strong> og har derudover erfaring fra både
				vuggestue og børnehave.
			</p>
		</div>

		<!-- Image -->
		<div class="relative order-1 md:order-2">
			<div
				class="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-brand-300"
			></div>
			<img
				src="/me.jpg"
				alt="Eline - Privat dagplejer"
				class="relative h-122 w-full rounded-2xl object-cover shadow-xl"
			/>
			<!-- Floating badge -->
			<div
				class="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-gray-100"
			>
				<img src="/logo.png" alt="" class="h-10 w-10 object-contain" />
				<div>
					<p class="text-xs font-medium text-gray-500">Erfaring</p>
					<p class="text-lg font-bold text-gray-800">23+ år</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Family: Image (venstre) + Content (højre) -->
	<div class="mb-20 grid items-center gap-12 md:grid-cols-2">
		<!-- Image -->
		<div class="relative">
			<div
				class="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-brand-300"
			></div>
			<img
				src="/fam.jpg"
				alt="Min familie"
				class="relative h-112 w-full rounded-2xl object-cover shadow-xl"
			/>
		</div>

		<!-- Content -->
		<div class="space-y-6">
			<div>
				<span
					class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
				>
					Min familie
				</span>
				<p class="text-lg leading-relaxed text-gray-600">
					Jeg er 46 år og bor sammen med min mand René. Sammen har vi 5 børn.<br />
					Emil på 24 år - Sofie på 21 år - Julie på 19 år - Albert på 11 år - Alba på 9 år.<br />
					Julie, Albert og Alba bor stadig hjemme.
				</p>
			</div>
		</div>
	</div>

	<!-- Animals: Content (venstre) + Image (højre) -->
	<div class="mb-20 grid items-center gap-12 md:grid-cols-2">
		<!-- Content -->
		<div class="order-2 space-y-6 md:order-1">
			<div>
				<span
					class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
				>
					Dyr hos Krudtuglerne
				</span>
				<p class="text-lg leading-relaxed text-gray-600">
					Vi har to små hunde Walter og Mogens (Bischos Havanaise - allergi venlig)<br />
					På vores legeplads bor kaninerne Lars og Henning<br />
					På legesværelset har vi et akvarie med mange fisk samt frøen Frode
				</p>
			</div>
		</div>

		<!-- Image -->
		<div class="relative order-1 md:order-2">
			<div
				class="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-brand-300"
			></div>
			<img
				src="/dogs.jpg"
				alt="Vores dyr"
				class="relative h-122 w-full rounded-2xl object-cover shadow-xl"
			/>
		</div>
	</div>

	<!-- Values Section -->
	<div class="rounded-3xl bg-white p-8 shadow-sm md:p-12">
		<div class="mb-10 text-center">
			<h3 class="text-3xl font-bold text-gray-800 md:text-4xl">Værdier hos Krudtuglerne</h3>
			<p class="mx-auto mt-3 max-w-2xl text-gray-600">
				Hos Krudtuglerne lægger jeg stor vægt på et trygt og nærværende miljø for alle børn – altid
				med fokus på:
			</p>
		</div>
		<ul class="grid gap-3 sm:grid-cols-2">
			{#each values as value}
				<li class="flex items-start gap-3 rounded-xl bg-brand-50 p-4">
					<span class="text-gray-700">{value}</span>
				</li>
			{/each}
		</ul>
		<p class="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-gray-600 italic">
			"Jeg arbejder aktivt med børnenes trivsel, læring og udvikling gennem trygge og pædagogiske
			rammer og læringsmiljøer."
		</p>
	</div>
</div>
