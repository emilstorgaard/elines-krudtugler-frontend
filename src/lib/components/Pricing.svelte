<section id="priser" class="relative overflow-hidden px-4 py-16">
    <div class="relative mx-auto max-w-3xl">
        <!-- Header -->
        <div class="mb-4 flex justify-center">
            <span
                class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
            >
                <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                Priser
            </span>
        </div>
        <p class="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-gray-500">
            Egenbetaling for en plads hos Eline´s Krudtugler 2026 er 2900,-<br /><br />
            Der betales alle 12 måneder om året og tilskud fra kommunen udbetales ligeledes 12 måneder om året.
        </p>

        <!-- Main pricing card -->
        <div
            class="relative mb-6 overflow-hidden rounded-3xl border border-brand-200/60 bg-white shadow-2xl shadow-brand-900/10"
        >
            <!-- Top gradient accent -->
            <div class="h-1.5 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"></div>

            <div class="px-8 py-2 sm:px-10">
                <div class="flex items-baseline justify-between border-b border-gray-100 py-5">
                    <span class="text-gray-500">Pris for pladsen</span>
                    <span class="text-2xl font-bold text-gray-800 tabular-nums sm:text-3xl">10.176 kr.</span>
                </div>
                <div class="flex items-baseline justify-between border-b border-gray-100 py-5">
                    <span class="text-gray-500">Tilskud fra kommunen</span>
                    <span class="text-xl font-bold text-brand-600 tabular-nums sm:text-2xl">
                        − 7.176 kr.
                    </span>
                </div>
            </div>

            <div
                class="relative flex items-baseline justify-between bg-gradient-to-br from-brand-50 to-brand-100/60 px-8 py-7 sm:px-10"
            >
                <div>
                    <p class="mb-1 text-xs font-semibold tracking-[0.15em] text-brand-700 uppercase">
                        Din egenbetaling
                    </p>
                </div>
                <span class="text-3xl font-bold text-gray-900 tabular-nums sm:text-4xl">
                    2.900
                    <span class="text-base font-normal text-gray-500 sm:text-lg">kr./md.</span>
                </span>
            </div>
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

        <!-- Info tiles -->
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {#each [{ title: 'Søskenderabat', desc: 'Der ydes søskenderabat af kommunen, hvis mere end ét barn er indmeldt i et pasningstilbud (også selvom det er et kommunalt tilbud).', icon: '👨‍👩‍👧‍👦' }, { title: 'Sikre pladsen', desc: 'Pladsen hos Eline´s Krudtugler er først sikret når kontrakten er underskrevet og gebyr er betalt. Gebyret bliver fratrukket første måned.', icon: '🔒' }, { title: 'Kontrakt', desc: 'Der skal skrives kontrakt mellem forældrene og jeg.', icon: '📝' }] as tile}
                <div
                    class="group relative overflow-hidden rounded-2xl border border-brand-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
                >
                    <div
                        class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-lg transition-colors group-hover:bg-brand-100"
                    >
                        {tile.icon}
                    </div>
                    <p class="mb-1.5 font-bold text-gray-800">{tile.title}</p>
                    <p class="text-sm leading-relaxed text-gray-500">{tile.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>