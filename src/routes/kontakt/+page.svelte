<script lang="ts">
    import Contact from '$lib/components/Contact.svelte';
    import Directions from '$lib/components/Directions.svelte';
    import SeoHead from '$lib/components/SeoHead.svelte';
    let { data } = $props();
</script>

<SeoHead seo={data.page.properties} />

<section class="relative overflow-hidden bg-brand-50 px-4 py-12">
    <div class="relative mx-auto max-w-6xl">
        <Contact page={data.page} settings={data.settings} />
        <Directions page={data.page} />
    </div>
</section>