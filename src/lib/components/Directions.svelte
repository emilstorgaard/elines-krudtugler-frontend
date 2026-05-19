<script lang="ts">
    import type { ContactPage } from '$lib/types/contactPage';

    let { page }: { page: ContactPage } = $props();

    const p = $derived(page.properties);

    const transportOptions = $derived(
        p.transportOptions?.items?.map((item) => item.content.properties) ?? []
    );
</script>

<div class="px-4 sm:px-6">
    <div class="text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {p.directionsTitle}
        </h1>
    </div>

    {#if p.directionsIntro}
        <p
            class="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg"
        >
            {p.directionsIntro}
        </p>
    {/if}

    <div class="my-8 grid items-stretch gap-5 sm:my-14 sm:gap-8 lg:grid-cols-5">
        {#if p.mapsEmbedUrl}
            <div class="overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl lg:col-span-3">
                <iframe
                    title="Krudtuglernes placering på kort"
                    src={p.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    class="block h-72 w-full border-0 sm:h-96 lg:h-full lg:min-h-105"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        {/if}

        <div class="flex flex-col gap-3 sm:gap-5 lg:col-span-2" class:lg:col-span-5={!p.mapsEmbedUrl}>
            {#if p.addressCardLabel || p.directionsButtonText}
                <div class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6">
                    {#if p.addressCardLabel}
                        <div class="mb-3 flex items-center gap-3 sm:mb-4">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg sm:h-11 sm:w-11 sm:rounded-2xl sm:text-xl"
                            >
                                📍
                            </div>
                            <div class="min-w-0 flex-1">
                                <p
                                    class="text-[10px] font-semibold tracking-wide text-gray-400 uppercase sm:text-xs"
                                >
                                    {p.addressCardLabel}
                                </p>
                            </div>
                        </div>
                    {/if}

                    {#if p.directionsButtonText && p.directionsButtonUrl}
                        <a
                            href={p.directionsButtonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg sm:py-3"
                        >
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            {p.directionsButtonText}
                        </a>
                    {/if}
                </div>
            {/if}

            {#each transportOptions as option}
                <div
                    class="group flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:border-brand-200 hover:bg-brand-50 hover:shadow-md sm:gap-4 sm:rounded-2xl sm:p-5"
                >
                    {#if option.icon}
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg transition-transform duration-200 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-xl"
                        >
                            {option.icon}
                        </div>
                    {/if}
                    <div class="min-w-0 flex-1">
                        <p class="mb-0.5 text-sm font-bold text-gray-800 sm:text-base">{option.title}</p>
                        <p class="text-xs leading-relaxed whitespace-pre-line text-gray-500 sm:text-sm">
                            {option.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>