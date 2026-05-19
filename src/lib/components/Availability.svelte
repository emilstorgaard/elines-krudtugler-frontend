<script lang="ts">
    import type { AvailabilityPage } from '$lib/types/availabilityPage';

    let { page }: { page: AvailabilityPage } = $props();

    const p = $derived(page.properties);
</script>

<div class="px-4 sm:px-6">
    <div class="text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {p.mainHeading}
            <span class="text-brand-600">{p.mainHeadingHighlight}</span>
        </h1>
    </div>
    <p
        class="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg"
    >
        {p.introText}
    </p>

    <div
        class="my-8 overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] ring-1 ring-black/5 sm:my-14 sm:rounded-4xl"
    >
        <div class="relative p-5 sm:p-8 md:p-12">
            <div
                class="absolute inset-0 bg-linear-to-br from-brand-50/70 via-transparent to-transparent"
            ></div>
            <div class="relative mx-auto max-w-2xl space-y-5 sm:space-y-6">
                <div
                    class="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm ring-1 ring-brand-100 sm:px-4 sm:py-1.5 sm:text-sm"
                >
                    {p.statusBadge}
                </div>
                <div class="space-y-2 sm:space-y-3">
                    <h3 class="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl md:text-3xl">
                        {p.sectionHeading}
                    </h3>
                    <div class="h-1 w-12 rounded-full bg-linear-to-r from-brand-400 to-brand-600 sm:w-16"></div>
                </div>
                <p class="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                    {p.descriptionParagraph1}
                </p>
                <p class="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                    {p.descriptionParagraph2}
                </p>
                <a
                    href={p.buttonLink}
                    class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-600 bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-400 hover:shadow-lg sm:mt-6 sm:text-base"
                >
                    {p.buttonText}
                </a>
            </div>
        </div>
    </div>
</div>