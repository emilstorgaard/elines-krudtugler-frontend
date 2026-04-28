<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Slide {
		src: string;
		alt: string;
		caption: string;
	}

	let { slides }: { slides: Slide[] } = $props();

	let current = $state(0);
	let transitioning = $state(false);
	let interval: ReturnType<typeof setInterval>;

	function goTo(index: number): void {
		if (transitioning || index === current) return;
		transitioning = true;
		current = (index + slides.length) % slides.length;
		setTimeout(() => (transitioning = false), 500);
	}

	function prev(): void {
		goTo(current - 1);
	}
	function next(): void {
		goTo(current + 1);
	}

	function pauseAndResume(): void {
		clearInterval(interval);
		interval = setInterval(next, 3000);
	}

	onMount(() => {
		interval = setInterval(next, 3000);
	});
	onDestroy(() => clearInterval(interval));
</script>

<div
	role="region"
	aria-label="Billedgalleri"
	class="relative mb-20 overflow-hidden rounded-3xl shadow-2xl"
	style="height: 440px;"
	onmouseenter={() => clearInterval(interval)}
	onmouseleave={() => {
		interval = setInterval(next, 3000);
	}}
>
	{#each slides as slide, i}
		<div
			class="absolute inset-0 transition-opacity duration-700"
			style="opacity: {i === current ? 1 : 0}; z-index: {i === current ? 1 : 0};"
		>
			<img src={slide.src} alt={slide.alt} class="h-full w-full object-cover" />
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
			></div>

			<!-- Caption -->
			<div class="absolute bottom-8 left-8">
				<span
					class="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm"
				>
					{i + 1} / {slides.length}
				</span>
				<p class="text-2xl font-bold text-white drop-shadow-lg">{slide.caption}</p>
			</div>
		</div>
	{/each}

	<!-- Prev/Next -->
	<button
		onclick={() => {
			prev();
			pauseAndResume();
		}}
		class="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
		aria-label="Forrige billede"
	>
		<svg class="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>
	<button
		onclick={() => {
			next();
			pauseAndResume();
		}}
		class="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
		aria-label="Næste billede"
	>
		<svg class="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<!-- Dots -->
	<div class="absolute right-8 bottom-8 z-10 flex gap-2">
		{#each slides as _, i}
			<button
				onclick={() => {
					goTo(i);
					pauseAndResume();
				}}
				class="h-2 rounded-full transition-all duration-300 {i === current
					? 'w-8 bg-white'
					: 'w-2 bg-white/40 hover:bg-white/70'}"
				aria-label="Gå til billede {i + 1}"
			></button>
		{/each}
	</div>
</div>
