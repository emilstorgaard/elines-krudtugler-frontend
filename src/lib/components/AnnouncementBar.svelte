<script lang="ts">
    import type { Settings } from '$lib/types/settings';

    let { settings }: { settings: Settings } = $props();

    const s = $derived(settings.properties);
    const isEnabled = $derived(s.announcementEnabled === true);
</script>

{#if isEnabled && s.announcementText}
    <div class="bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white">
        <span class="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-brand-200 align-middle"
        ></span>
        {s.announcementText}
        {#if s.announcementLinkText && s.announcementLinkUrl}
			<span class="mx-1">—</span>
            <a
                href={s.announcementLinkUrl}
                class="ml-1 underline underline-offset-2 transition hover:text-brand-100"
            >
                {s.announcementLinkText}
            </a>
        {/if}
    </div>
{/if}