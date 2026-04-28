<script lang="ts">
	import StarRating from './StarRating.svelte';
	import { testimonials } from '../data/site';

	const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
	const averageDisplay = averageRating.toFixed(1);

	const perPage = 3;
	let page = $state(0);
	const totalPages = Math.ceil(testimonials.length / perPage);

	function prev() {
		page = (page - 1 + totalPages) % totalPages;
	}
	function next() {
		page = (page + 1) % totalPages;
	}

	const visible = $derived(testimonials.slice(page * perPage, page * perPage + perPage));
</script>

<section id="anmeldelser" class="relative overflow-hidden bg-white px-4 py-24">
	<div class="absolute -top-24 right-0 h-96 w-96 rounded-full bg-green-50/80 blur-3xl"></div>
	<div class="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-green-50/60 blur-3xl"></div>

	<div class="relative mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-4 flex justify-center">
			<span
				class="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-green-700 uppercase"
			>
				Anmeldelser
			</span>
		</div>
		<h2 class="mb-4 text-center text-4xl font-bold text-gray-800 md:text-5xl">
			Hvad siger forældrene?
		</h2>
		<p class="mb-16 text-center text-lg text-gray-500">
			Tillid og tryghed er alt — se hvad andre familier siger
		</p>

		<!-- Mobil: horisontal swipe -->
		<div
			class="flex gap-4 overflow-x-auto pb-4 md:hidden"
			style="-webkit-overflow-scrolling: touch; scrollbar-width: none;"
		>
			{#each testimonials as testimonial (testimonial.name)}
				<div
					class="relative flex w-[85vw] flex-shrink-0 flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
				>
					<div
						class="absolute top-5 right-6 font-serif text-6xl leading-none text-green-100 select-none"
					>
						"
					</div>
					<div class="mb-4 flex gap-1">
						<StarRating count={testimonial.rating} size="sm" />
					</div>
					<p class="mb-6 flex-1 leading-relaxed text-gray-600 italic">"{testimonial.text}"</p>
					<div class="flex items-center gap-3 border-t border-gray-100 pt-4">
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700"
						>
							{testimonial.initials}
						</div>
						<div>
							<p class="font-bold text-gray-800">{testimonial.name}</p>
							<p class="text-xs text-gray-500">Forældre til {testimonial.child}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<p class="mt-2 mb-12 text-center text-xs text-gray-400 md:hidden">Swipe for at se mere →</p>

		<!-- Desktop: pagineret grid -->
		<div class="hidden gap-8 md:grid md:grid-cols-3">
			{#each visible as testimonial (testimonial.name)}
				<div
					class="group relative flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
				>
					<div
						class="absolute top-6 right-8 font-serif text-6xl leading-none text-green-100 select-none"
					>
						"
					</div>
					<div class="mb-5 flex gap-1">
						<StarRating count={testimonial.rating} />
					</div>
					<p class="mb-8 flex-1 leading-relaxed text-gray-600 italic">"{testimonial.text}"</p>
					<div class="flex items-center gap-4 border-t border-gray-100 pt-6">
						<div
							class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700"
						>
							{testimonial.initials}
						</div>
						<div>
							<p class="font-bold text-gray-800">{testimonial.name}</p>
							<p class="text-sm text-gray-500">Forældre til {testimonial.child}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if totalPages > 1}
			<div class="mt-10 hidden items-center justify-center gap-4 md:flex">
				<button
					onclick={prev}
					class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-green-300 hover:bg-green-50"
					aria-label="Forrige"
				>
					<svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<div class="flex gap-2">
					{#each Array(totalPages) as _, i}
						<button
							onclick={() => (page = i)}
							class="h-2 rounded-full transition-all duration-300 {i === page
								? 'w-8 bg-green-500'
								: 'w-2 bg-gray-300 hover:bg-gray-400'}"
							aria-label="Side {i + 1}"
						></button>
					{/each}
				</div>
				<button
					onclick={next}
					class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-green-300 hover:bg-green-50"
					aria-label="Næste"
				>
					<svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		{/if}

		<!-- Summary bar -->
		<div
			class="mt-16 flex flex-col items-center justify-center gap-6 rounded-3xl bg-green-50 px-8 py-8 sm:flex-row"
		>
			<div class="text-center">
				<p class="text-4xl font-bold text-gray-800">{averageDisplay}</p>
				<div class="mt-1 flex justify-center gap-0.5">
					<StarRating count={averageRating} size="sm" />
				</div>
				<p class="mt-1 text-sm text-gray-500">Gennemsnitlig bedømmelse</p>
			</div>
			<div class="hidden h-12 w-px bg-green-200 sm:block"></div>
			<div class="text-center">
				<p class="text-4xl font-bold text-gray-800">{testimonials.length}</p>
				<p class="mt-1 text-sm text-gray-500">Glade familier</p>
			</div>
			<div class="hidden h-12 w-px bg-green-200 sm:block"></div>
			<div class="text-center">
				<p class="text-4xl font-bold text-gray-800">10+</p>
				<p class="mt-1 text-sm text-gray-500">Års erfaring</p>
			</div>
		</div>
	</div>
</section>
