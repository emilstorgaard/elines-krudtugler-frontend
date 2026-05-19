<script lang="ts">
    import type { PracticalPage } from '$lib/types/practicalPage';

    let { page }: { page: PracticalPage } = $props();

    const p = $derived(page.properties);

    const hasContent = $derived(
        !!(
            p.parentCoopLabel ||
            p.parentCoopMainText ||
            p.parentCoopHighlight ||
            p.parentCoopClosingNote
        )
    );
</script>

{#if hasContent}
    <section id="foraeldresamarbejde" class="relative overflow-hidden px-4 py-6 sm:py-8">
        <div class="relative mx-auto max-w-3xl">
            <div
                class="relative overflow-hidden rounded-2xl border border-brand-200/60 bg-white/90 p-5 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-12"
            >
                {#if p.parentCoopLabel}
                    <div class="mb-6 flex justify-center sm:mb-8">
                        <span
                            class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-brand-700 uppercase shadow-sm sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
                        >
                            <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                            {p.parentCoopLabel}
                        </span>
                    </div>
                {/if}

                <div class="relative space-y-4 text-center leading-relaxed text-gray-700 sm:space-y-6">
                    {#if p.parentCoopMainText}
                        <p class="text-base whitespace-pre-line sm:text-lg">{p.parentCoopMainText}</p>
                    {/if}

                    {#if p.parentCoopHighlight}
                        <div
                            class="relative overflow-hidden rounded-xl bg-linear-to-br from-brand-50 to-brand-100/50 px-4 py-4 shadow-inner sm:rounded-2xl sm:px-6 sm:py-6"
                        >
                            <p class="text-sm whitespace-pre-line text-gray-700 sm:text-base">
                                {p.parentCoopHighlight}
                            </p>
                        </div>
                    {/if}

                    {#if p.parentCoopClosingNote}
                        <p class="text-sm whitespace-pre-line text-gray-600 italic sm:text-base">
                            {p.parentCoopClosingNote}
                        </p>
                    {/if}
                </div>
            </div>
        </div>
    </section>
{/if}