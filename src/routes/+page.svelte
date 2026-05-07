<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero2 from '$lib/components/Hero2.svelte';
	import Hero3 from '$lib/components/Hero3.svelte';
	import Directions from '$lib/components/Directions.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
</script>

<svelte:head>
	<title>Børnepasning – Eline Storgaard Andersen</title>
	<meta
		name="description"
		content="Professionel børnepasning i Viborg. Et trygt og kærligt hjem for dit barn."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Nunito:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- <Hero3 /> -->
<!-- <Hero2 /> -->
<Hero />
<About />
<Activities />
<Schedule />
<Testimonials />
<Pricing />
<Directions />
<Contact />