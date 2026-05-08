<section id="godkendelse-og-tilsyn" class="relative overflow-hidden px-4 py-8">
	<div class="relative mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-8 flex justify-center">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
				Godkendelse og tilsyn
			</span>
		</div>

		<!-- Highlight banner -->
		<div
			class="group relative mb-6 flex items-center gap-5 overflow-hidden rounded-3xl border border-brand-200/60 bg-linear-to-r from-white via-white to-brand-50/50 px-6 py-6 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:px-8"
		>
			<div
				class="absolute top-0 left-0 h-full w-1.5 bg-linear-to-b from-brand-400 to-brand-600"
			></div>
			<div
				class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand-100 to-brand-200 text-2xl shadow-sm"
			>
				✅
			</div>
			<div>
				<p class="text-lg font-bold text-gray-800">Godkendt af Viborg Kommune</p>
				<p class="text-sm text-gray-500">På lige vilkår med den kommunale dagpleje</p>
			</div>
		</div>

		<!-- Info cards -->
		<div class="grid gap-4 md:grid-cols-3">
			{#each [{ icon: '🏡', title: 'Hjem og rammer', desc: 'Viborg Kommune har gennemgået mit hjem, og alle sikkerhedsmæssige og fysiske rammer er godkendt både inde og ude.' }, { icon: '🔍', title: 'Løbende tilsyn', desc: 'Viborg Kommune fører både uanmeldte og anmeldte tilsyn her hos Eline´s Krudtugler, på lige vilkår med den kommunale dagpleje.' }, { icon: '🤍', title: 'Hjælp fra PPR', desc: 'Ved behov er der på lige vilkår med den kommunale dagpleje, mulighed for at få hjælp af kommunens PPR-afdeling.' }] as card}
				<div
					class="group relative overflow-hidden rounded-2xl border border-brand-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-brand-100 to-brand-200 text-xl shadow-sm transition-transform duration-300 group-hover:scale-110"
					>
						{card.icon}
					</div>
					<p class="mb-2 font-bold text-gray-800">{card.title}</p>
					<p class="text-sm leading-relaxed text-gray-500">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
