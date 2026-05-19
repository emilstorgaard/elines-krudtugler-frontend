<script lang="ts">
    import type { Settings } from '$lib/types/settings';

    let { settings }: { settings: Settings } = $props();

    const s = $derived(settings.properties);
    const isEnabled = $derived(s.announcementEnabled === true);
</script>

{#if isEnabled && s.announcementText}
    <div class="bg-brand-500 px-4 py-2 text-xs font-semibold text-white sm:text-sm">
        <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
            <span
                class="inline-block h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-brand-200"
                aria-hidden="true"
            ></span>
            <span>{s.announcementText}</span>
            {#if s.announcementLinkText && s.announcementLinkUrl}
                <span class="mx-1">—</span>
				<a
                    href={s.announcementLinkUrl}
                    class="underline underline-offset-2 transition hover:text-brand-100"
                >
                    {s.announcementLinkText}
                </a>
            {/if}
        </div>
    </div>
{/if}