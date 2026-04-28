<script lang="ts">
	import Carousel from './Carousel.svelte';
	import ActivityCards from './ActivityCards.svelte';
	import { activities, activitySlides } from '../data/site';
</script>

<section id="aktiviteter" class="relative overflow-hidden bg-white px-4 py-24">
	<!-- Decorative blob -->
	<div class="absolute top-0 right-0 h-80 w-80 rounded-full bg-green-50/80 blur-3xl"></div>

	<div class="relative mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-4 flex justify-center">
			<span
				class="rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-green-700 uppercase"
			>
				Hverdagen
			</span>
		</div>
		<h2 class="mb-16 text-center text-4xl font-bold text-gray-800 md:text-5xl">Hvad laver vi?</h2>

		<!-- Carousel -->
		<Carousel slides={activitySlides} />

		<!-- Activity cards -->
		<ActivityCards {activities} />

		<!-- Scroll hint (kun mobil) -->
		<p class="mt-2 text-center text-xs text-gray-400 sm:hidden">Swipe for at se mere →</p>
	</div>
</section>
