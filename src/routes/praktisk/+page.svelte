<script lang="ts">
    import OpeningHours from '$lib/components/OpeningHours.svelte';
    import HolidaysAndClosedDays from '$lib/components/HolidaysAndClosedDays.svelte';
    import ParentCooperation from '$lib/components/ParentCooperation.svelte';
    import WhatToBring from '$lib/components/WhatToBring.svelte';
    import ApprovalAndSupervision from '$lib/components/ApprovalAndSupervision.svelte';
    import Pricing from '$lib/components/Pricing.svelte';
    import SeoHead from '$lib/components/SeoHead.svelte';
	import Diet from '$lib/components/Diet.svelte';
    let { data } = $props();

    const p = $derived(data.page.properties);
</script>

<SeoHead seo={p} />

<section class="relative overflow-hidden bg-brand-50 px-4 py-12">
    <div class="relative mx-auto max-w-6xl">
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
                {p.pageTitle}
            </h1>
        </div>

        <OpeningHours page={data.page} />
        <HolidaysAndClosedDays page={data.page} />
        <WhatToBring page={data.page} />
        <Pricing page={data.page} />
        <ParentCooperation page={data.page} />
        <ApprovalAndSupervision page={data.page} />
        <Diet page={data.page} />
    </div>
</section>