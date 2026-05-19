<script lang="ts">
    import type { WeekdayPage } from '$lib/types/weekdayPage';

    let { page }: { page: WeekdayPage } = $props();

    const p = $derived(page.properties);

    const scheduleItems = $derived(
        p.scheduleItems?.items?.map((item) => item.content.properties) ?? []
    );
</script>

<div class="px-4 sm:px-6">
    <div class="text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {p.pageTitle}
        </h1>
    </div>

    <p
        class="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg"
    >
        {p.pageIntro}
    </p>

    <div class="relative my-8 sm:my-14">
        <div
            class="absolute top-0 bottom-0 left-4 w-px bg-linear-to-b from-brand-200 via-brand-200 to-brand-100 sm:left-4.5 md:left-1/2 md:-translate-x-1/2"
        ></div>

        <div class="space-y-4 sm:space-y-6 md:space-y-8">
            {#each scheduleItems as item, i}
                <div
                    class={`relative flex items-start gap-3 md:items-center md:gap-0 ${
                        i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                    <div
                        class={`ml-10 flex-1 sm:ml-12 md:ml-0 ${
                            i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                        }`}
                    >
                        <div
                            class="group rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-all duration-300 sm:rounded-3xl sm:p-5 md:p-6"
                        >
                            <p class="mb-1 text-xs font-bold tracking-wide text-brand-600 sm:text-sm">
                                {item.time}
                            </p>
                            <p
                                class="text-sm leading-relaxed font-semibold whitespace-pre-line text-gray-800 sm:text-base"
                            >
                                {item.activity}
                            </p>
                        </div>
                    </div>

                    <div
                        class="absolute left-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[3px] border-brand-50 bg-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.35)] ring-1 ring-brand-100 sm:h-9 sm:w-9 sm:border-4 md:left-1/2 md:-translate-x-1/2"
                    >
                        <span class="h-2 w-2 rounded-full bg-brand-500 sm:h-2.5 sm:w-2.5"></span>
                    </div>

                    <div class="hidden flex-1 md:block"></div>
                </div>
            {/each}
        </div>
    </div>

    {#if p.footerNote}
        <div
            class="mt-8 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-sm ring-1 ring-black/5 sm:mt-12 sm:rounded-3xl sm:px-6 sm:py-5"
        >
            <p class="text-sm text-gray-600 sm:text-base">
                {p.footerNote}
            </p>
        </div>
    {/if}

    {#if p.activitiesHeading || p.activitiesContent}
        <div
            class="mt-5 overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm ring-1 ring-black/5 sm:mt-6 sm:rounded-3xl"
        >
            {#if p.activitiesHeading}
                <div class="border-b border-brand-100/70 bg-linear-to-r from-brand-50 to-white px-5 py-4 sm:px-6 sm:py-5">
                    <h3 class="text-center text-base font-bold tracking-tight text-gray-800 sm:text-lg md:text-xl">
                        {p.activitiesHeading}
                    </h3>
                </div>
            {/if}

            <div class="space-y-5 px-5 py-5 text-gray-700 sm:space-y-6 sm:px-6 sm:py-6 md:px-8">
                {#if p.activitiesContent?.markup}
                    <div
                        class="prose prose-sm sm:prose-base max-w-none leading-relaxed
                            [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:marker:text-brand-500 sm:[&_ul]:space-y-2
                            [&_ul_ul]:mt-2 [&_ul_ul]:space-y-1 [&_ul_ul]:pl-6 [&_ul_ul]:text-gray-600 [&_ul_ul]:marker:text-brand-300"
                    >
                        {@html p.activitiesContent.markup}
                    </div>
                {/if}

                {#if p.focusHeading || p.focusAreas}
                    <div class="rounded-xl bg-brand-50/70 p-3.5 ring-1 ring-brand-100/70 sm:rounded-2xl sm:p-4">
                        {#if p.focusHeading}
                            <p class="text-sm font-semibold text-gray-800 sm:text-base">{p.focusHeading}</p>
                        {/if}
                        {#if p.focusAreas}
                            <p class="text-sm text-gray-600 sm:text-base">{p.focusAreas}</p>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>