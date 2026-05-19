<script lang="ts">
    import type { PracticalPage } from '$lib/types/practicalPage';

    let { page }: { page: PracticalPage } = $props();

    const p = $derived(page.properties);

    const openingHours = $derived(
        p.openingHours?.items?.map((item) => item.content.properties) ?? []
    );
</script>

{#if openingHours.length > 0}
    <section class="relative overflow-hidden px-4 py-6 sm:py-8">
        <div class="relative mx-auto max-w-2xl">
            <div
                class="group relative rounded-2xl border border-brand-200/60 bg-white/90 p-5 shadow-xl shadow-brand-900/5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/10 sm:rounded-3xl sm:p-8 md:p-10"
            >
                <div
                    class="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-brand-50/40 via-transparent to-transparent sm:rounded-3xl"
                ></div>

                <div class="relative">
                    {#if p.openingHoursLabel}
                        <div class="mb-6 text-center sm:mb-8">
                            <span
                                class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-brand-700 uppercase shadow-sm sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
                            >
                                <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                                {p.openingHoursLabel}
                            </span>
                        </div>
                    {/if}

                    <div class="space-y-2 sm:space-y-2.5">
                        {#each openingHours as item}
                            <div
                                class="group/row flex items-center justify-between gap-3 rounded-xl border border-transparent bg-brand-50/70 px-4 py-3 transition-all duration-300 hover:border-brand-200 hover:bg-brand-50 hover:shadow-sm sm:rounded-2xl sm:px-5 sm:py-3.5"
                            >
                                <span class="text-sm font-semibold text-gray-800 sm:text-base">{item.day}</span>
                                <span class="text-sm font-medium text-gray-600 tabular-nums sm:text-base">
                                    {item.hours}
                                </span>
                            </div>
                        {/each}
                    </div>

                    {#if p.openingHoursNote}
                        <div
                            class="mt-6 flex items-start justify-center gap-2 rounded-xl border border-dashed border-brand-300 bg-brand-50/50 px-4 py-3 text-center sm:mt-8 sm:items-center sm:rounded-2xl sm:px-5 sm:py-4"
                        >
                            <svg
                                class="mt-0.5 h-4 w-4 shrink-0 text-brand-600 sm:mt-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p class="text-xs font-medium text-gray-700 sm:text-sm">{p.openingHoursNote}</p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>
{/if}