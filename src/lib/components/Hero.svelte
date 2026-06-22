<script lang="ts">
	import { onMount } from 'svelte';
	import { mediaSrc, mediaSrcset } from '$lib/utils/media';
	import type { HomePage } from '$lib/types/homePage';
	import type { Settings } from '$lib/types/settings';

	let {
		page,
		settings
	}: {
		page: HomePage;
		settings: Settings;
	} = $props();

	const p = $derived(page.properties);
	const s = $derived(settings.properties);

	const heroNavLinks = $derived(s.navLinks?.items?.map((item) => item.content.properties) ?? []);

	const INTERVAL_MS = 5000;
	let currentIndex = $state(0);
	let isPaused = $state(false);

	const heroImages = $derived(p.heroImages?.map((img) => img.url) ?? []);

	function srcsetFor(url: string) {
		return mediaSrcset(url, 'hero');
	}

	function srcFor(url: string) {
		return mediaSrc(url, 'hero');
	}

	onMount(() => {
		const handleVisibility = () => {
			isPaused = document.hidden;
		};
		document.addEventListener('visibilitychange', handleVisibility);

		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (reducedMotion.matches) {
			isPaused = true;
		}

		return () => {
			document.removeEventListener('visibilitychange', handleVisibility);
		};
	});

	$effect(() => {
		if (isPaused) return;
		if (heroImages.length <= 1) return;

		const id = setInterval(() => {
			currentIndex = (currentIndex + 1) % heroImages.length;
		}, INTERVAL_MS);

		return () => clearInterval(id);
	});
</script>

<section
	class="relative flex min-h-[calc(100svh-var(--header-total-h,0))] flex-col overflow-hidden"
	aria-label="Velkommen"
>
	<div class="absolute inset-0" aria-hidden="true">
		{#each heroImages as url, i (url)}
			<img
				src={srcFor(url)}
				srcset={srcsetFor(url)}
				alt=""
				width="1920"
				height="1080"
				sizes="100vw"
				fetchpriority={i === 0 ? 'high' : 'low'}
				loading={i === 0 ? 'eager' : 'lazy'}
				decoding="async"
				class="hero-img absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
				class:is-active={i === currentIndex}
				style:opacity={i === currentIndex ? 1 : 0}
			/>
		{/each}
	</div>

	<div
		class="absolute inset-0 bg-linear-to-b from-black/60 via-black/25 to-black/70"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 bg-linear-to-tr from-brand-900/40 via-transparent to-transparent"
		aria-hidden="true"
	></div>

	<div
		class="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl sm:h-72 sm:w-72"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-brand-300/20 blur-3xl sm:h-80 sm:w-80"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto w-full max-w-5xl px-4 pt-8 text-center text-white sm:pt-12">
		<h1
			class="animate-fade-in-up mb-4 text-4xl leading-[1.1] font-bold tracking-tight drop-shadow-2xl sm:mb-6 sm:text-5xl sm:leading-[1.05] md:text-7xl lg:text-8xl"
			style="animation-delay: 100ms"
		>
			{p.heroTitle}
		</h1>

		{#if p.heroSubtitle}
			<p
				class="animate-fade-in-up mx-auto mb-3 max-w-xl text-base text-white/90 sm:mb-2 sm:text-lg md:text-xl"
				style="animation-delay: 200ms"
			>
				{p.heroSubtitle}
			</p>
		{/if}

		<p
			class="animate-fade-in-up mx-auto mb-6 max-w-2xl text-base text-white/90 sm:mb-10 sm:text-lg md:text-2xl"
			style="animation-delay: 300ms"
		>
			{p.heroIntro}
		</p>
	</div>

	<div class="flex-1"></div>

	<div class="relative z-10 mx-auto w-full max-w-5xl px-4 pb-6 text-center text-white sm:pb-10">
		<nav
			aria-label="Genveje"
			class="animate-fade-in-up mb-4 flex flex-wrap items-center justify-center gap-2 sm:mb-6 sm:gap-3"
			style="animation-delay: 400ms"
		>
			{#each heroNavLinks as item (item.link)}
				{#if item.link === '/kontakt'}
					<a
						href={item.link}
						class="group rounded-full border border-brand-600 bg-brand-500 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-300 hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-base"
					>
						{item.label}
					</a>
				{:else}
					<a
						href={item.link}
						class="group rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-base"
					>
						{item.label}
					</a>
				{/if}
			{/each}
		</nav>

		{#if heroImages.length > 1}
			<div class="flex items-center justify-center gap-2" role="tablist" aria-label="Vælg billede">
				{#each heroImages as _, i (i)}
					<button
						type="button"
						role="tab"
						aria-selected={i === currentIndex}
						aria-label={`Vis billede ${i + 1}`}
						onclick={() => (currentIndex = i)}
						class="h-1.5 cursor-pointer rounded-full bg-white/40 backdrop-blur-sm transition-all duration-500 hover:bg-white/70"
						class:w-8={i === currentIndex}
						class:bg-white={i === currentIndex}
						class:w-1.5={i !== currentIndex}
					></button>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.hero-img.is-active {
		animation: ken-burns 6s ease-out forwards;
		transform-origin: center;
	}
	@keyframes ken-burns {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.08);
		}
	}
	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	:global(.animate-fade-in-up) {
		animation: fade-in-up 0.8s ease-out both;
	}
	@media (prefers-reduced-motion: reduce) {
		.hero-img.is-active,
		:global(.animate-fade-in-up) {
			animation: none !important;
		}
		.hero-img {
			transition: none !important;
		}
	}
</style>