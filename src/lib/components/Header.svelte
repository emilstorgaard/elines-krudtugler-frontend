<script lang="ts">
	import { onMount } from 'svelte';
	import { navLinks } from '$lib/data/site';
	import { scrollTo } from '$lib/utils/scroll';

	let { class: className = '' } = $props();
	let isMenuOpen: boolean = $state(false);
	let headerEl: HTMLElement | null = null;

	onMount(() => {
		const handlePointerDown = (event: PointerEvent) => {
			if (!isMenuOpen) return;
			if (headerEl && !headerEl.contains(event.target as Node)) {
				isMenuOpen = false;
			}
		};

		document.addEventListener('pointerdown', handlePointerDown);

		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
		};
	});
</script>

<header
	bind:this={headerEl}
	class={`relative z-50 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-md transition-all ${className}`}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-24 items-center justify-between md:h-32 lg:h-36">
			<a href="/" class="group flex items-center gap-4 transition-opacity hover:opacity-90">
				<img
					src="/logo.png"
					alt="Eline´s Krudtugler logo"
					class="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-36 md:h-44 lg:h-52"
				/>
				<div class="text-left">
					<span class="block text-xl leading-tight font-bold text-gray-800 sm:text-2xl md:text-3xl">
						Eline´s Krudtugler
					</span>
					<span
						class="block text-xs font-medium tracking-wide text-brand-600 sm:text-sm md:text-base"
					>
						Eline Storgaard Andersen
					</span>
				</div>
			</a>

			<nav class="hidden items-center gap-1 md:flex">
				{#each navLinks as item (item.href)}
					{#if item.href === '/kontakt'}
						<a
							href={item.href}
							class="ml-4 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-md shadow-brand-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
						>
							{item.label} mig
						</a>
					{:else}
						<a
							href={item.href}
							class="group relative rounded-full px-5 py-2.5 text-base font-semibold text-gray-600 transition-all duration-200 hover:bg-brand-50 hover:text-brand-600"
						>
							{item.label}
							<span
								class="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-4/5"
							></span>
						</a>
					{/if}
				{/each}
			</nav>

			<button
				onclick={() => (isMenuOpen = !isMenuOpen)}
				class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-brand-100 hover:text-brand-600 focus:outline-none md:hidden"
				aria-label="Menu"
				aria-expanded={isMenuOpen}
			>
				{#if isMenuOpen}
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<nav
			class="absolute top-full left-0 z-50 w-full border-t border-gray-100 bg-white/98 shadow-lg backdrop-blur-md md:hidden"
		>
			<div class="mx-auto max-w-7xl px-4 py-3">
				{#each navLinks as item (item.href)}
					{#if item.href === '/kontakt'}
						<div class="mt-3 border-t border-gray-100 pt-3">
							<a
								href={item.href}
								onclick={() => (isMenuOpen = false)}
								class="block w-full rounded-full bg-brand-500 py-3 text-center font-semibold text-white transition hover:bg-brand-400"
							>
								{item.label} mig
							</a>
						</div>
					{:else}
						<a
							href={item.href}
							onclick={() => (isMenuOpen = false)}
							class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-gray-700 transition hover:bg-brand-50 hover:text-brand-600"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-brand-400"></span>
							{item.label}
						</a>
					{/if}
				{/each}
			</div>
		</nav>
	{/if}
</header>
