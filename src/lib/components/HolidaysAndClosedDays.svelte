<script lang="ts">
    import type { PracticalPage } from '$lib/types/practicalPage';

    let { page }: { page: PracticalPage } = $props();

    const p = $derived(page.properties);

    const hasContent = $derived(
        !!(
            p.holidaysLabel ||
            p.holidaysIntro ||
            p.holidaysHighlight ||
            p.holidaysStatement ||
            p.holidaysClosingNote
        )
    );
</script>

{#if hasContent}
    <section id="ferie-og-lukkedage" class="relative overflow-hidden px-4 py-6 sm:py-8">
        <div class="relative mx-auto max-w-3xl">
            <div
                class="relative rounded-2xl border border-brand-200/60 bg-white/90 p-5 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-10"
            >
                {#if p.holidaysLabel}
                    <div class="mb-6 flex justify-center sm:mb-8">
                        <span
                            class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-brand-700 uppercase shadow-sm sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
                        >
                            <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                            {p.holidaysLabel}
                        </span>
                    </div>
                {/if}

                <div class="space-y-4 leading-relaxed text-gray-700 sm:space-y-5">
                    {#if p.holidaysIntro}
                        <p class="text-base whitespace-pre-line sm:text-lg">{p.holidaysIntro}</p>
                    {/if}

                    {#if p.holidaysHighlight || p.holidaysHighlightSub}
                        <div
                            class="relative overflow-hidden rounded-xl bg-linear-to-br from-brand-50 to-brand-100/50 p-4 sm:rounded-2xl sm:p-6"
                        >
                            <div class="absolute top-0 left-0 h-full w-1 bg-brand-500"></div>
                            {#if p.holidaysHighlight}
                                <p class="text-sm whitespace-pre-line sm:text-base">{p.holidaysHighlight}</p>
                            {/if}
                            {#if p.holidaysHighlightSub}
                                <p class="mt-2 text-sm whitespace-pre-line text-gray-600 sm:mt-3 sm:text-base">
                                    {p.holidaysHighlightSub}
                                </p>
                            {/if}
                        </div>
                    {/if}

                    {#if p.holidaysStatement}
                        <div
                            class="flex items-center justify-between rounded-xl border border-brand-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md sm:rounded-2xl sm:px-6 sm:py-4"
                        >
                            <span class="text-sm font-semibold text-gray-800 sm:text-base">
                                {p.holidaysStatement}
                            </span>
                        </div>
                    {/if}

                    {#if p.holidaysClosingNote}
                        <p class="text-sm whitespace-pre-line text-gray-600 italic sm:text-base">
                            {p.holidaysClosingNote}
                        </p>
                    {/if}
                </div>
            </div>
        </div>
    </section>
{/if}