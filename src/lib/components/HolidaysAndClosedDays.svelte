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
    <section id="ferie-og-lukkedage" class="relative overflow-hidden px-4 py-8">
        <div class="relative mx-auto max-w-3xl">
            <!-- Header -->
            {#if p.holidaysLabel}
                <div class="mb-8 flex justify-center">
                    <span
                        class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
                    >
                        <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                        {p.holidaysLabel}
                    </span>
                </div>
            {/if}

            <!-- Card -->
            <div
                class="relative rounded-3xl border border-brand-200/60 bg-white/90 p-8 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:p-10"
            >
                <div class="space-y-5 leading-relaxed text-gray-700">
                    {#if p.holidaysIntro}
                        <p class="text-lg whitespace-pre-line">{p.holidaysIntro}</p>
                    {/if}

                    {#if p.holidaysHighlight || p.holidaysHighlightSub}
                        <div
                            class="relative overflow-hidden rounded-2xl bg-linear-to-br from-brand-50 to-brand-100/50 p-6"
                        >
                            <div class="absolute top-0 left-0 h-full w-1 bg-brand-500"></div>
                            {#if p.holidaysHighlight}
                                <p class="whitespace-pre-line">{p.holidaysHighlight}</p>
                            {/if}
                            {#if p.holidaysHighlightSub}
                                <p class="mt-3 text-gray-600 whitespace-pre-line">{p.holidaysHighlightSub}</p>
                            {/if}
                        </div>
                    {/if}

                    {#if p.holidaysStatement}
                        <div
                            class="flex items-center justify-between rounded-2xl border border-brand-200 bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <span class="font-semibold text-gray-800">{p.holidaysStatement}</span>
                        </div>
                    {/if}

                    {#if p.holidaysClosingNote}
                        <p class="text-gray-600 italic whitespace-pre-line">
                            {p.holidaysClosingNote}
                        </p>
                    {/if}
                </div>
            </div>
        </div>
    </section>
{/if}
