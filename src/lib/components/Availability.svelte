<script lang="ts">
    import type { AvailabilityPage } from '$lib/types/availabilityPage';

    let { page }: { page: AvailabilityPage } = $props();

    const p = $derived(page.properties);
</script>

<div class="text-center">
    <h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
        {p.mainHeading}
        <span class="text-brand-600">{p.mainHeadingHighlight}</span>
    </h1>
</div>
<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
    {p.introText}
</p>

<div
    class="my-14 overflow-hidden rounded-4xl bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
>
    <div class="relative p-8 md:p-12">
        <div
            class="absolute inset-0 bg-linear-to-br from-brand-50/70 via-transparent to-transparent"
        ></div>
        <div class="relative mx-auto max-w-2xl space-y-6">
            <div
                class="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600 shadow-sm ring-1 ring-brand-100"
            >
                {p.statusBadge}
            </div>
            <div class="space-y-3">
                <h3 class="text-2xl font-bold tracking-tight text-gray-800 md:text-3xl">
                    {p.sectionHeading}
                </h3>
                <div class="h-1 w-16 rounded-full bg-linear-to-r from-brand-400 to-brand-600"></div>
            </div>
            <p class="max-w-xl text-lg leading-relaxed text-gray-600">
                {p.descriptionParagraph1}
            </p>
            <p class="max-w-xl text-lg leading-relaxed text-gray-600">
                {p.descriptionParagraph2}
            </p>
            <a
                href={p.buttonLink}
                class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-600 bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-400 hover:shadow-lg sm:text-base"
            >
                {p.buttonText}
            </a>
        </div>
    </div>
</div>
