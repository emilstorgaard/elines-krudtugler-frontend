<script lang="ts">
	interface ScheduleItem {
		time: string;
		activity: string;
		emoji: string;
	}

	const scheduleItems: ScheduleItem[] = [
		{ time: '7:00 – 8:30',   activity: 'Ankomst og morgenmad',    emoji: '🌅' },
		{ time: '8:30 – 9:30',   activity: 'Fri leg',                  emoji: '🧸' },
		{ time: '9:30 – 11:00',  activity: 'Udetur eller aktiviteter', emoji: '🌳' },
		{ time: '11:00 – 11:30', activity: 'Frokost',                  emoji: '🍽️' },
		{ time: '11:30 – 13:30', activity: 'Middagslur',               emoji: '😴' },
		{ time: '13:30 – 14:00', activity: 'Frugt og vand',            emoji: '🍎' },
		{ time: '14:00 – 15:30', activity: 'Leg og aktiviteter',       emoji: '🎨' },
		{ time: '15:30 – 16:00', activity: 'Mellemmåltid',             emoji: '🥪' },
		{ time: '16:00 – 17:00', activity: 'Fri leg og afhentning',    emoji: '👋' }
	];
</script>

<section id="dagsprogram" class="relative overflow-hidden bg-green-50 px-4 py-24">
	<!-- Decorative blobs -->
	<div class="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"></div>
	<div class="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/60 blur-3xl"></div>

	<div class="relative mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-4 flex justify-center">
			<span class="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-green-700 uppercase">
				Dagsprogram
			</span>
		</div>
		<h2 class="mb-4 text-center text-4xl font-bold text-gray-800 md:text-5xl">
			En typisk dag
		</h2>
		<p class="mb-16 text-center text-lg text-gray-500">
			Fra morgen til eftermiddag – struktur og tryghed i hverdagen
		</p>

		<!-- Timeline -->
		<div class="relative">
			<!-- Vertical line — left-[1.125rem] = halvdelen af emoji-dottens w-9 -->
			<div class="absolute bottom-0 top-0 left-[1.125rem] w-px bg-green-200 md:left-1/2"></div>

			<div class="space-y-4">
				{#each scheduleItems as item, i}
					<div class="relative flex items-center gap-4 md:gap-0 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">

						<!-- Card -->
						<div class="ml-12 flex-1 md:ml-0 {i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}">
							<div class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md">
								<p class="mb-0.5 text-sm font-bold text-green-600">{item.time}</p>
								<p class="font-semibold text-gray-800">{item.activity}</p>
							</div>
						</div>

						<!-- Center dot with emoji -->
						<div class="absolute left-0 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-4 border-green-50 bg-white text-lg shadow-md md:left-1/2 md:-translate-x-1/2">
							{item.emoji}
						</div>

						<!-- Spacer for alternating desktop layout -->
						<div class="hidden flex-1 md:block"></div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Footer note -->
		<div class="mt-12 flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-sm">
			<span class="text-2xl">💚</span>
			<p class="text-gray-600">
				Dagsprogrammet tilpasses altid <strong class="text-green-600">børnenes behov</strong> og vejret
			</p>
		</div>
	</div>
</section>