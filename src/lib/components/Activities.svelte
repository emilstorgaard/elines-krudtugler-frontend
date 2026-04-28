<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Activity {
		icon: string;
		title: string;
		description: string;
	}

	const activities: Activity[] = [
		{ icon: '🎨', title: 'Kreative aktiviteter', description: 'Maling, tegning og håndarbejde stimulerer fantasien' },
		{ icon: '🎵', title: 'Musik og bevægelse', description: 'Sang, dans og rytmik hver dag' },
		{ icon: '🌳', title: 'Udeliv', description: 'Daglige ture i naturen og på legepladsen' },
		{ icon: '📙', title: 'Læsning', description: 'Højtlæsning og billedbøger' },
		{ icon: '🍽️', title: 'Sunde måltider', description: 'Hjemmelavet mad med økologiske råvarer' },
		{ icon: '👩‍🍼', title: 'Tryg tilknytning', description: 'Nærhed og omsorg i hverdagen' }
	];

	const slides = [
		{ src: 'https://images.unsplash.com/photo-1654343532574-53e699fe0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG91dGRvb3IlMjBhY3Rpdml0aWVzJTIwcGxheWdyb3VuZHxlbnwxfHx8fDE3NzY3OTA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Børn leger udenfor', caption: 'Daglige udeteventyr' },
		{ src: 'https://images.unsplash.com/photo-1637195141628-f0f75585a07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Njc5MDUxMHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Børn læser bøger', caption: 'Læring og nysgerrighed' },
		{ src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', alt: 'Børn maler', caption: 'Kreativ udfoldelse' }
	];

	let current = $state(0);
	let transitioning = $state(false);
	let interval: ReturnType<typeof setInterval>;

	function goTo(index: number): void {
		if (transitioning || index === current) return;
		transitioning = true;
		current = (index + slides.length) % slides.length;
		setTimeout(() => (transitioning = false), 500);
	}

	function prev(): void { goTo(current - 1); }
	function next(): void { goTo(current + 1); }

	function pauseAndResume(): void {
		clearInterval(interval);
		interval = setInterval(next, 3000);
	}

	onMount(() => { interval = setInterval(next, 3000); });
	onDestroy(() => clearInterval(interval));
</script>

<section id="aktiviteter" class="relative overflow-hidden bg-white px-4 py-24">
	<!-- Decorative blob -->
	<div class="absolute top-0 right-0 h-80 w-80 rounded-full bg-green-50/80 blur-3xl"></div>

	<div class="relative mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-4 flex justify-center">
			<span class="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-green-700 uppercase">
				Hverdagen
			</span>
		</div>
		<h2 class="mb-16 text-center text-4xl font-bold text-gray-800 md:text-5xl">
			Hvad laver vi?
		</h2>

		<!-- Carousel -->
		<div
			class="relative mb-20 overflow-hidden rounded-3xl shadow-2xl"
			style="height: 440px;"
			on:mouseenter={() => clearInterval(interval)}
			on:mouseleave={() => { interval = setInterval(next, 3000); }}
		>
			{#each slides as slide, i}
				<div
					class="absolute inset-0 transition-opacity duration-700"
					style="opacity: {i === current ? 1 : 0}; z-index: {i === current ? 1 : 0};"
				>
					<img src={slide.src} alt={slide.alt} class="h-full w-full object-cover" />
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

					<!-- Caption -->
					<div class="absolute bottom-8 left-8">
						<span class="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
							{i + 1} / {slides.length}
						</span>
						<p class="text-2xl font-bold text-white drop-shadow-lg">{slide.caption}</p>
					</div>
				</div>
			{/each}

			<!-- Prev/Next -->
			<button
				on:click={() => { prev(); pauseAndResume(); }}
				class="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
				aria-label="Forrige billede"
			>
				<svg class="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				on:click={() => { next(); pauseAndResume(); }}
				class="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
				aria-label="Næste billede"
			>
				<svg class="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			<!-- Dots -->
			<div class="absolute bottom-8 right-8 z-10 flex gap-2">
				{#each slides as _, i}
					<button
						on:click={() => { goTo(i); pauseAndResume(); }}
						class="h-2 rounded-full transition-all duration-300 {i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}"
						aria-label="Gå til billede {i + 1}"
					/>
				{/each}
			</div>
		</div>

<!-- Activity cards -->
<div class="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
     style="-webkit-overflow-scrolling: touch; scrollbar-width: none;">
    {#each activities as activity}
        <div class="group flex w-64 flex-shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:w-auto">
            <div class="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-2xl transition-transform duration-300 group-hover:scale-110">
                {activity.icon}
            </div>
            <h3 class="mb-1 text-base font-bold text-gray-800">{activity.title}</h3>
            <p class="text-sm leading-relaxed text-gray-500">{activity.description}</p>
        </div>
    {/each}
</div>

<!-- Scroll hint (kun mobil) -->
<p class="mt-2 text-center text-xs text-gray-400 sm:hidden">Swipe for at se mere →</p>
	</div>
</section>