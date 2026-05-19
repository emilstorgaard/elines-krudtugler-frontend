<script lang="ts">
    import type { ContactPage } from '$lib/types/contactPage';
    import type { Settings } from '$lib/types/settings';

    let {
        page,
        settings
    }: {
        page: ContactPage;
        settings: Settings;
    } = $props();

    const p = $derived(page.properties);
    const s = $derived(settings.properties);

    const showAvailability = $derived(p.availabilityEnabled === true);

    const phoneHref = $derived(`tel:${s.phone?.replace(/\s/g, '') ?? ''}`);
    const emailHref = $derived(`mailto:${s.email ?? ''}`);

    type ContactItem = {
        emoji: string;
        label: string;
        lines: string[];
        href?: string;
    };

    const contactItems = $derived<ContactItem[]>(
        [
            s.phone && {
                emoji: '📞',
                label: 'Telefon',
                lines: [s.phone],
                href: phoneHref
            },
            s.email && {
                emoji: '✉️',
                label: 'Email',
                lines: [s.email],
                href: emailHref
            },
            s.address && {
                emoji: '📍',
                label: 'Adresse',
                lines: s.address.split('\n').filter((line) => line.trim() !== '')
            }
        ].filter((item): item is ContactItem => Boolean(item))
    );
</script>

<div class="px-4 sm:px-6">
    <div class="text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {p.pageTitle}
        </h1>
    </div>

    {#if p.pageIntro}
        <p
            class="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg"
        >
            {p.pageIntro}
        </p>
    {/if}

    <div
        class="my-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl sm:my-14 sm:rounded-3xl"
    >
        <div class="grid" class:md:grid-cols-2={showAvailability}>
            <div class="space-y-4 p-5 sm:space-y-6 sm:p-8 md:p-10">
                {#if p.contactSectionTitle}
                    <h3 class="text-lg font-bold text-gray-800 sm:text-xl">{p.contactSectionTitle}</h3>
                {/if}

                {#each contactItems as item}
                    <svelte:element
                        this={item.href ? 'a' : 'div'}
                        href={item.href}
                        class="group flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition-all duration-200 sm:gap-4 sm:rounded-2xl sm:p-4 {item.href
                            ? 'hover:border-brand-200 hover:bg-brand-50 hover:shadow-sm'
                            : ''}"
                    >
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-xl sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl {item.href
                                ? 'transition-transform duration-200 group-hover:scale-110'
                                : ''}"
                        >
                            {item.emoji}
                        </div>
                        <div class="min-w-0 flex-1">
                            <p class="text-[10px] font-semibold tracking-wide text-gray-400 uppercase sm:text-xs">
                                {item.label}
                            </p>
                            {#each item.lines as line}
                                <p
                                    class="text-sm font-semibold break-words sm:text-base {item.href
                                        ? 'text-brand-600'
                                        : 'text-gray-700'}"
                                >
                                    {line}
                                </p>
                            {/each}
                        </div>
                    </svelte:element>
                {/each}
            </div>

            {#if showAvailability}
                <div
                    class="flex flex-col justify-between bg-linear-to-br from-brand-500 to-brand-600 p-5 text-white sm:p-8 md:p-10"
                >
                    <div>
                        {#if p.availabilityBadge}
                            <div
                                class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5"
                            >
                                <span class="h-2 w-2 animate-pulse rounded-full bg-brand-300"></span>
                                <span class="text-xs font-semibold sm:text-sm">{p.availabilityBadge}</span>
                            </div>
                        {/if}

                        {#if p.availabilityTitle}
                            <h3 class="mb-3 text-xl font-bold whitespace-pre-line sm:mb-4 sm:text-2xl">
                                {p.availabilityTitle}
                            </h3>
                        {/if}

                        {#if p.availabilityDescription}
                            <p
                                class="mb-6 text-sm leading-relaxed whitespace-pre-line text-white/85 sm:mb-8 sm:text-base"
                            >
                                {p.availabilityDescription}
                            </p>
                        {/if}
                    </div>

                    <div class="mt-4 flex flex-col gap-2.5 sm:mt-8 sm:gap-3">
                        {#if p.availabilityCallButton && s.phone}
                            <a
                                href={phoneHref}
                                class="flex items-center justify-center gap-2 rounded-full bg-white py-2.5 text-center text-sm font-bold text-brand-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:py-3 sm:text-base"
                            >
                                {p.availabilityCallButton}
                            </a>
                        {/if}

                        {#if p.availabilityEmailButton && s.email}
                            <a
                                href={emailHref}
                                class="flex items-center justify-center gap-2 rounded-full border-2 border-white/50 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-white/10 sm:py-3 sm:text-base"
                            >
                                {p.availabilityEmailButton}
                            </a>
                        {/if}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>