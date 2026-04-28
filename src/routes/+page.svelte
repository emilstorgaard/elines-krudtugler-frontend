<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Børnepasning – Eline Storgaard Andersen</title>
	<meta name="description" content="Professionel børnepasning i Viborg. Et trygt og kærligt hjem for dit barn." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen font-nunito">
	<main>
		<Hero />
		<About />
		<Activities />
		<Schedule />
		<Testimonials />
		<Contact />
	</main>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		font-family: 'Nunito', sans-serif;
	}

	:global(h1, h2, h3) {
		font-family: 'Playfair Display', serif;
	}
</style>