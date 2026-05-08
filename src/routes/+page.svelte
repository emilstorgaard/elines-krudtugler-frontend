<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
    <title>Børnepasning – Eline Storgaard Andersen</title>
    <meta
        name="description"
        content="Professionel børnepasning i Viborg. Et trygt og kærligt hjem for dit barn."
    />
    <meta property="og:title" content="Eline´s Krudtugler – Privat Pasningsordning" />
    <meta
        property="og:description"
        content="Et trygt og kærligt hjem for dit barn i Viborg."
    />
    <meta property="og:type" content="website" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Nunito:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />

    <!-- Preload hero image for LCP optimization -->
    <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1774641374101-0c5a243b7e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZyUyMGRheWNhcmV8ZW58MXx8fHwxNzc2NzkwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1920"
        fetchpriority="high"
    />
</svelte:head>

<Hero />