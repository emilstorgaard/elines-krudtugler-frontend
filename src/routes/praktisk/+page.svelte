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

<section id="galleri" class="relative overflow-hidden bg-brand-50 px-4 py-12">
	<!-- Decorative background blobs -->
	<div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"></div>

	<div class="relative mx-auto max-w-6xl">
		<!-- Section label -->
		<div class="mb-4 flex justify-center">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
				Praktisk
			</span>
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
