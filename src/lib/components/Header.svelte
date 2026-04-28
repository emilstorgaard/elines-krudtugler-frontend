<script lang="ts">
	import { navLinks } from '$lib/data/site';
	import { scrollTo } from '$lib/utils/scroll';

	let { class: className = '' } = $props();

	let isMenuOpen: boolean = $state(false);

	function handleNavClick(href: string): void {
		isMenuOpen = false;
		scrollTo(href);
	}
</script>

<header class="z-50 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-md transition-all">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<button
				onclick={() => handleNavClick('#')}
				class="group flex items-center gap-3 transition-opacity hover:opacity-80"
			>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl transition-transform group-hover:scale-110"
				>
					<img src="/logo.png" alt="Logo" />
				</div>
				<div class="text-left">
					<span class="block text-lg leading-tight font-bold text-gray-800">Elines Krudtugler</span>
					<span class="block text-xs font-medium tracking-wide text-green-600"
						>Eline Storgaard Andersen</span
					>
				</div>
			</button>

			<!-- Desktop Menu -->
			<nav class="hidden items-center gap-1 md:flex">
				{#each navLinks as item (item.href)}
					{#if item.href === '#kontakt'}
						<button
							onclick={() => handleNavClick(item.href)}
							class="ml-4 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30"
						>
							{item.label} mig
						</button>
					{:else}
						<button
							onclick={() => handleNavClick(item.href)}
							class="group relative rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
						>
							{item.label}
							<span
								class="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-green-500 transition-all duration-300 group-hover:w-4/5"
							></span>
						</button>
					{/if}
				{/each}
			</nav>

			<!-- Mobile Menu Button -->
			<button
				onclick={() => (isMenuOpen = !isMenuOpen)}
				class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-green-100 hover:text-green-600 focus:outline-none md:hidden"
				aria-label="Menu"
			>
				{#if isMenuOpen}
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
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

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<nav class="border-t border-gray-100 bg-white/98 backdrop-blur-md md:hidden">
			<div class="mx-auto max-w-7xl px-4 py-3">
				{#each navLinks as item (item.href)}
					{#if item.href === '#kontakt'}
						<div class="mt-3 border-t border-gray-100 pt-3">
							<button
								onclick={() => handleNavClick(item.href)}
								class="w-full rounded-full bg-green-500 py-3 text-center font-semibold text-white transition hover:bg-green-400"
							>
								{item.label} mig
							</button>
						</div>
					{:else}
						<button
							onclick={() => handleNavClick(item.href)}
							class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-600"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
							{item.label}
						</button>
					{/if}
				{/each}
			</div>
		</nav>
	{/if}
</header>
