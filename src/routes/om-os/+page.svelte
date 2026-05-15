<script lang="ts">
    import About from '$lib/components/About.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
    let { data } = $props();
</script>

<SeoHead seo={data.page.properties} />

<section class="relative overflow-hidden bg-brand-50 px-4 py-12">
    <div class="relative mx-auto max-w-6xl">
        <About page={data.page} />
    </div>
</section>
