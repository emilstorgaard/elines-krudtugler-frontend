<script lang="ts">
    import { getMediaUrl } from '$lib/api/umbraco';
    import type { AboutPage } from '$lib/types/aboutPage';

    let { page }: { page: AboutPage } = $props();

    const p = $derived(page.properties);

    const aboutImages = $derived(p.aboutImage ?? []);
    const familyImages = $derived(p.familyImage ?? []);
    const locationImages = $derived(p.locationImage ?? []);
    const animalsImages = $derived(p.animalsImage ?? []);
    const educationalImages = $derived(p.educationalImages ?? []);

    let lightboxImages = $state<Array<{ url: string; name: string }>>([]);
    let lightboxIndex = $state<number | null>(null);

    function openLightbox(images: Array<{ url: string; name: string }>, index: number) {
        lightboxImages = images;
        lightboxIndex = index;
    }

    function closeLightbox() {
        lightboxIndex = null;
        lightboxImages = [];
    }

    function nextImage() {
        if (lightboxIndex !== null) {
            lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
        }
    }

    function prevImage() {
        if (lightboxIndex !== null) {
            lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (lightboxIndex === null) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
</script>

<svelte:window onkeydown={handleKeydown} />

{#snippet imageGallery(images: typeof aboutImages, borderSide: 'left' | 'right')}
    <div class="relative">
        <div
            class="absolute -top-3 h-full w-full rounded-2xl border-2 border-brand-300 sm:-top-4"
            class:-left-3={borderSide === 'left'}
            class:sm:-left-4={borderSide === 'left'}
            class:-right-3={borderSide === 'right'}
            class:sm:-right-4={borderSide === 'right'}
        ></div>

        {#if images.length === 0}
            <!-- Nothing to render -->
        {:else if images.length === 1}
            <img
                src={getMediaUrl(images[0].url)}
                alt={images[0].name}
                class="relative h-80 w-full rounded-2xl object-cover shadow-xl sm:h-96 md:h-122"
            />
        {:else if images.length === 2}
            <div class="relative grid h-72 grid-cols-2 gap-2 sm:h-96 md:h-112">
                {#each images as img}
                    <img
                        src={getMediaUrl(img.url)}
                        alt={img.name}
                        class="h-full w-full rounded-2xl object-cover shadow-xl"
                    />
                {/each}
            </div>
        {:else}
            <div class="relative grid grid-cols-2 gap-2">
                <img
                    src={getMediaUrl(images[0].url)}
                    alt={images[0].name}
                    class="row-span-2 h-full min-h-60 w-full rounded-2xl object-cover shadow-xl sm:min-h-80"
                    style="max-height: 30rem;"
                />
                <div class="grid gap-2" style="grid-template-rows: repeat({images.length - 1}, 1fr);">
                    {#each images.slice(1) as img}
                        <img
                            src={getMediaUrl(img.url)}
                            alt={img.name}
                            class="h-full w-full rounded-2xl object-cover shadow-xl"
                            style="max-height: {Math.round(480 / (images.length - 1))}px;"
                        />
                    {/each}
                </div>
            </div>
        {/if}
    </div>
{/snippet}

<div class="relative mx-auto max-w-6xl px-4 sm:px-6">
    <h2 class="mb-4 text-center text-3xl font-bold text-gray-800 sm:mb-6 sm:text-4xl md:text-5xl">
        {p.pageTitle} <br /><strong class="text-brand-600">{p.pageTitleHighlight}</strong>
    </h2>
    <p
        class="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:mb-16 sm:text-lg"
    >
        {p.pageIntro}
    </p>

    <!-- About -->
    <div class="mb-16 grid items-center gap-8 sm:gap-12 md:mb-24 md:grid-cols-2">
        <div class="order-2 space-y-6 md:order-1">
            <div>
                <span
                    class="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm"
                >
                    {p.aboutLabel}
                </span>
                <h3 class="mb-3 text-2xl font-bold text-gray-800 sm:mb-4 sm:text-3xl md:text-4xl">
                    {p.aboutHeading}
                    {#if p.aboutHeadingHighlight}
                        <span class="text-brand-600">{p.aboutHeadingHighlight}</span>
                    {/if}
                </h3>
                <div class="prose text-base leading-relaxed text-gray-600 sm:text-lg">
                    {@html p.aboutText?.markup ?? ''}
                </div>
            </div>
        </div>

        <div class="relative order-1 md:order-2">
            {@render imageGallery(aboutImages, 'right')}
            <div
                class="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg ring-1 ring-gray-100 sm:-bottom-5 sm:-left-5 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4"
            >
                <div>
                    <p class="text-[10px] font-medium text-gray-500 sm:text-xs">{p.experienceLabel}</p>
                    <p class="text-sm font-bold text-gray-800 sm:text-lg">{p.experienceValue}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Family -->
    <div class="mb-16 grid items-center gap-8 sm:gap-12 md:mb-20 md:grid-cols-2">
        <div class="relative">
            {@render imageGallery(familyImages, 'left')}
        </div>

        <div class="space-y-6">
            <div>
                <span
                    class="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm"
                >
                    {p.familyLabel}
                </span>
                <div class="prose text-base leading-relaxed text-gray-600 sm:text-lg">
                    {@html p.familyText?.markup ?? ''}
                </div>
            </div>
        </div>
    </div>

    <!-- Location -->
    <div class="mb-16 grid items-center gap-8 sm:gap-12 md:mb-20 md:grid-cols-2">
        <div class="order-2 space-y-6 md:order-1">
            <div>
                <span
                    class="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm"
                >
                    {p.locationLabel}
                </span>
                <div class="prose text-base leading-relaxed text-gray-600 sm:text-lg">
                    {@html p.locationText?.markup ?? ''}
                </div>
            </div>
        </div>

        <div class="relative order-1 md:order-2">
            {@render imageGallery(locationImages, 'right')}
        </div>
    </div>

    <!-- Animals -->
    <div class="mb-16 grid items-center gap-8 sm:gap-12 md:mb-20 md:grid-cols-2">
        <div class="order-2 space-y-6 md:order-2">
            <div>
                <span
                    class="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm"
                >
                    {p.animalsLabel}
                </span>
                <div class="prose text-base leading-relaxed text-gray-600 sm:text-lg">
                    {@html p.animalsText?.markup ?? ''}
                </div>
            </div>
        </div>

        <div class="relative order-1 md:order-1">
            {@render imageGallery(animalsImages, 'right')}
        </div>
    </div>

    <!-- Values -->
    <div class="mb-12 rounded-2xl bg-white p-5 shadow-sm sm:mb-20 sm:rounded-3xl sm:p-8 md:p-12">
        <div class="mb-6 text-center sm:mb-10">
            <h3 class="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                {p.valuesHeading}
            </h3>
            <p class="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                {p.valuesIntro}
            </p>
        </div>

        <ul class="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
            {#each p.valuesList ?? [] as value}
                <li class="flex items-start gap-3 rounded-xl bg-brand-50 p-3 sm:p-4">
                    <span class="text-sm text-gray-700 sm:text-base">{value}</span>
                </li>
            {/each}
        </ul>

        {#if (p.primaryValuesList ?? []).length > 0}
            <div class="mt-6 border-t border-gray-100 pt-6 sm:mt-10 sm:pt-10">
                <ul class="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                    {#each p.primaryValuesList ?? [] as value}
                        <li
                            class="flex items-center justify-center gap-3 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-center ring-1 ring-brand-100 sm:px-5 sm:py-4"
                        >
                            <span class="text-sm font-semibold text-brand-700 sm:text-base">{value}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>

    <!-- Educational -->
    <div class="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 md:p-12">
        <div class="mb-6 text-center sm:mb-10">
            <p class="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                {p.educationalIntro}
            </p>
        </div>

        <div
            class="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
            {#each educationalImages as image, i}
                <button
                    type="button"
                    onclick={() => openLightbox(educationalImages, i)}
                    class="aspect-210/297 w-[75%] shrink-0 cursor-pointer snap-center overflow-hidden rounded-xl transition hover:opacity-90 sm:mx-auto sm:w-full sm:max-w-xs sm:shrink"
                >
                    <img src={getMediaUrl(image.url)} alt={image.name} class="h-full w-full object-cover" />
                </button>
            {/each}
        </div>

        <p class="mt-3 text-center text-xs text-gray-400 sm:hidden">← Swipe for flere billeder →</p>

        <p
            class="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-gray-600 italic sm:mt-10 sm:text-lg"
        >
            "{p.educationalQuote}"
        </p>
    </div>
</div>

{#if lightboxIndex !== null && lightboxImages.length > 0}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Billedfremviser"
        tabindex="-1"
    >
        <button
            type="button"
            onclick={closeLightbox}
            class="absolute inset-0 cursor-default"
            aria-label="Luk billedfremviser"
        ></button>

        <button
            type="button"
            onclick={closeLightbox}
            class="absolute top-4 right-4 z-10 cursor-pointer text-4xl text-white transition hover:text-gray-300"
            aria-label="Luk"
        >
            &times;
        </button>

        {#if lightboxImages.length > 1}
            <button
                type="button"
                onclick={prevImage}
                class="absolute left-2 z-10 cursor-pointer px-4 text-5xl text-white transition hover:text-gray-300 md:left-6"
                aria-label="Forrige billede"
            >
                &#8249;
            </button>
        {/if}

        <img
            src={getMediaUrl(lightboxImages[lightboxIndex].url)}
            alt={lightboxImages[lightboxIndex].name}
            class="pointer-events-none relative max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        />

        {#if lightboxImages.length > 1}
            <button
                type="button"
                onclick={nextImage}
                class="absolute right-2 z-10 cursor-pointer px-4 text-5xl text-white transition hover:text-gray-300 md:right-6"
                aria-label="Næste billede"
            >
                &#8250;
            </button>
        {/if}

        {#if lightboxImages.length > 1}
            <div class="absolute bottom-4 text-sm text-white">
                {lightboxIndex + 1} / {lightboxImages.length}
            </div>
        {/if}
    </div>
{/if}