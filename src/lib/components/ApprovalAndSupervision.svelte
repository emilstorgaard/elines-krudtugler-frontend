<script lang="ts">
    import type { PracticalPage } from '$lib/types/practicalPage';

    let { page }: { page: PracticalPage } = $props();

    const p = $derived(page.properties);

    const cards = $derived(p.approvalCards?.items?.map((item) => item.content.properties) ?? []);

    const hasBanner = $derived(
        !!(p.approvalBannerTitle || p.approvalBannerSubtitle || p.approvalBannerIcon)
    );

    const hasContent = $derived(hasBanner || cards.length > 0);
</script>

{#if hasContent}
    <section id="godkendelse-og-tilsyn" class="relative overflow-hidden px-4 py-6 sm:py-8">
        <div class="relative mx-auto max-w-4xl">
            <div
                class="relative rounded-2xl border border-brand-200/60 bg-white/90 p-5 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-12"
            >
                <div
                    class="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-brand-50/40 via-transparent to-transparent sm:rounded-3xl"
                ></div>

                <div class="relative">
                    {#if p.approvalLabel}
                        <div class="mb-6 flex justify-center sm:mb-8">
                            <span
                                class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-brand-700 uppercase shadow-sm sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
                            >
                                <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                                {p.approvalLabel}
                            </span>
                        </div>
                    {/if}

                    {#if hasBanner}
                        <div
                            class="group relative mb-4 flex items-center gap-3 overflow-hidden rounded-2xl border border-brand-200/60 bg-linear-to-r from-white via-white to-brand-50/50 px-4 py-4 shadow-lg shadow-brand-900/5 sm:mb-6 sm:gap-5 sm:rounded-3xl sm:px-6 sm:py-6 md:px-8"
                        >
                            <div
                                class="absolute top-0 left-0 h-full w-1 bg-linear-to-b from-brand-400 to-brand-600 sm:w-1.5"
                            ></div>
                            {#if p.approvalBannerIcon}
                                <div
                                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-100 to-brand-200 text-xl shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl"
                                >
                                    {p.approvalBannerIcon}
                                </div>
                            {/if}
                            <div class="min-w-0 flex-1">
                                {#if p.approvalBannerTitle}
                                    <p class="text-base font-bold text-gray-800 sm:text-lg">
                                        {p.approvalBannerTitle}
                                    </p>
                                {/if}
                                {#if p.approvalBannerSubtitle}
                                    <p class="text-xs text-gray-500 sm:text-sm">
                                        {p.approvalBannerSubtitle}
                                    </p>
                                {/if}
                            </div>
                        </div>
                    {/if}

                    {#if cards.length > 0}
                        <div class="grid gap-3 sm:gap-4 md:grid-cols-3">
                            {#each cards as card}
                                <div
                                    class="group relative overflow-hidden rounded-xl border border-brand-200/60 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl sm:rounded-2xl sm:p-6"
                                >
                                    {#if card.icon}
                                        <div
                                            class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-100 to-brand-200 text-lg shadow-sm transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl"
                                        >
                                            {card.icon}
                                        </div>
                                    {/if}
                                    <p class="mb-1.5 text-sm font-bold text-gray-800 sm:mb-2 sm:text-base">
                                        {card.title}
                                    </p>
                                    <p class="text-xs leading-relaxed whitespace-pre-line text-gray-500 sm:text-sm">
                                        {card.description}
                                    </p>
                                </div>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>
{/if}