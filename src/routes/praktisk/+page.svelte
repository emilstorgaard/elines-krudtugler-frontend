<script lang="ts">
	import ApprovalAndSupervision from '$lib/components/ApprovalAndSupervision.svelte';
	import Diet from '$lib/components/Diet.svelte';
	import HolidaysAndClosedDays from '$lib/components/HolidaysAndClosedDays.svelte';
	import OpeningHours from '$lib/components/OpeningHours.svelte';
	import ParentCooperation from '$lib/components/ParentCooperation.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import WhatToBring from '$lib/components/WhatToBring.svelte';
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

<section class="relative overflow-hidden bg-brand-50 px-4 py-12">
	<div class="relative mx-auto max-w-6xl">
        <div class=" text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
                Praktisk information
            </h1>
        </div>

		<OpeningHours />
		<HolidaysAndClosedDays />
		<WhatToBring />
		<Pricing />
		<ParentCooperation />
		<ApprovalAndSupervision />
		<Diet />
	</div>
</section>
