<script lang="ts">
	const values = [
		'En hverdag med trivsel og udvikling',
		'Omsorg, nærvær og tryghed',
		'Tid til det enkelte barn i trygge, rolige og hjemlige omgivelser',
		'En hverdag med leg, glæde og en masse kram',
		'En god og tryg relation mellem mig og barnet',
		'Et tæt og godt samarbejde med jer forældre',
		'Struktur og genkendelighed i hverdagen',
		'Alle børn skal føle sig set, hørt og forstået',
		'Leg, sprog og motorisk udvikling',
		'Udeliv som en vigtig del af hverdagen',
		'Børnefællesskaber og relationer'
	];

	import { getMediaUrl } from '$lib/api/umbraco';
    import type { AboutPage } from '$lib/types/aboutPage';

    let { page }: { page: AboutPage } = $props();

    const p = $derived(page.properties);

    const aboutImage = $derived(p.aboutImage?.[0]);
    const familyImage = $derived(p.familyImage?.[0]);
    const animalsImage = $derived(p.animalsImage?.[0]);
</script>

<div class="relative mx-auto max-w-6xl">
    <h2 class="mb-6 text-center text-4xl font-bold text-gray-800 md:text-5xl">
        {p.pageTitle} <br /><strong class="text-brand-600">{p.pageTitleHighlight}</strong>
    </h2>
    <p class="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
        {p.pageIntro}
    </p>

	<!-- Intro: Content (venstre) + Image (højre) -->
    <div class="mb-24 grid items-center gap-12 md:grid-cols-2">
        <!-- Content -->
        <div class="order-2 space-y-6 md:order-1">
            <div>
                <span
                    class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
                >
                    {p.aboutLabel}
                </span>
				                <h3 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                    {p.aboutHeading}
                    {#if p.aboutHeadingHighlight}
                        <span class="text-brand-600">{p.aboutHeadingHighlight}</span>
                    {/if}
                </h3>
                <div class="prose text-lg leading-relaxed text-gray-600">
                    {@html p.aboutText?.markup ?? ''}
                </div>
            </div>
        </div>

		<!-- Image -->
        <div class="relative order-1 md:order-2">
            <div
                class="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-brand-300"
            ></div>
            {#if aboutImage}
                <img
                    src={getMediaUrl(aboutImage.url)}
                    alt={aboutImage.name}
                    class="relative h-122 w-full rounded-2xl object-cover shadow-xl"
                />
            {/if}
			<!-- Floating badge -->
            <div
                class="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-gray-100"
            >
                <img src="/logo.png" alt="" class="h-10 w-10 object-contain" />
                <div>
                    <p class="text-xs font-medium text-gray-500">{p.experienceLabel}</p>
                    <p class="text-lg font-bold text-gray-800">{p.experienceValue}</p>
                </div>
            </div>
        </div>
    </div>

	<!-- Family: Image (venstre) + Content (højre) -->
    <div class="mb-20 grid items-center gap-12 md:grid-cols-2">
        <!-- Image -->
        <div class="relative">
            <div
                class="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-brand-300"
            ></div>
            {#if familyImage}
                <img
                    src={getMediaUrl(familyImage.url)}
                    alt={familyImage.name}
                    class="relative h-112 w-full rounded-2xl object-cover shadow-xl"
                />
            {/if}
        </div>

		<!-- Content -->
        <div class="space-y-6">
            <div>
                <span
                    class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
                >
                    {p.familyLabel}
                </span>
                <div class="prose text-lg leading-relaxed text-gray-600">
                    {@html p.familyText?.markup ?? ''}
                </div>
            </div>
        </div>
    </div>

	 <!-- Animals: Content (venstre) + Image (højre) -->
    <div class="mb-20 grid items-center gap-12 md:grid-cols-2">
        <!-- Content -->
        <div class="order-2 space-y-6 md:order-1">
            <div>
                <span
                    class="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600"
                >
                    {p.animalsLabel}
                </span>
                <div class="prose text-lg leading-relaxed text-gray-600">
                    {@html p.animalsText?.markup ?? ''}
                </div>
            </div>
        </div>

		<!-- Image -->
        <div class="relative order-1 md:order-2">
            <div
                class="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-brand-300"
            ></div>
            {#if animalsImage}
                <img
                    src={getMediaUrl(animalsImage.url)}
                    alt={animalsImage.name}
                    class="relative h-122 w-full rounded-2xl object-cover shadow-xl"
                />
            {/if}
        </div>
    </div>

	<!-- Values Section -->
    <div class="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <div class="mb-10 text-center">
            <h3 class="text-3xl font-bold text-gray-800 md:text-4xl">{p.valuesHeading}</h3>
            <p class="mx-auto mt-3 max-w-2xl text-gray-600">
                {p.valuesIntro}
            </p>
        </div>
        <ul class="grid gap-3 sm:grid-cols-2">
            {#each p.valuesList ?? [] as value}
                <li class="flex items-start gap-3 rounded-xl bg-brand-50 p-4">
                    <span class="text-gray-700">{value}</span>
                </li>
            {/each}
        </ul>
        <p class="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-gray-600 italic">
            "{p.valuesQuote}"
        </p>
    </div>
</div>