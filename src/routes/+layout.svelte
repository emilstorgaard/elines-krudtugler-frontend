<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';

	let { children } = $props();
</script>

<div class="sticky top-0 z-50">
	<AnnouncementBar />
	<Header />
</div>

{@render children()}
<Footer />