<script lang="ts">
	import { scrollTo } from '$lib/utils/scroll';
</script>

<section class="relative flex h-[680px] items-center justify-center overflow-hidden">
	<img
		src="https://images.unsplash.com/photo-1774641374101-0c5a243b7e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZyUyMGRheWNhcmV8ZW58MXx8fHwxNzc2NzkwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
		alt="Glade børn der leger"
		class="absolute inset-0 h-full w-full scale-105 object-cover"
		style="transform-origin: center;"
	/>

	<!-- Layered gradient for depth -->
	<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>
	<div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

	<div class="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
		<div
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm"
		>
			<span class="text-lg">
				<img src="/logo.png" alt="Logo" class="h-10 w-10 object-contain" />
			</span>
			<span class="text-sm font-medium tracking-widest uppercase">Eline Storgaard Andersen</span>
		</div>

		<h1 class="mb-6 text-5xl leading-tight font-bold drop-shadow-lg md:text-7xl">
			Velkommen til<br />
			<span class="text-green-300">Elines Krudtugler</span>
		</h1>

		<p class="mx-auto mb-10 max-w-xl text-xl text-white/90 md:text-2xl">
			Et trygt og kærligt hjem for dit barn
		</p>

		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<button
				onclick={() => scrollTo('#kontakt')}
				class="rounded-full bg-green-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/30"
			>
				Kontakt mig
			</button>

			<a
				href="#om-mig"
				class="rounded-full border border-white/50 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
			>
				Læs mere
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>
</section>
