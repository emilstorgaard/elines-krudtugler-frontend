<script lang="ts">
    import { onMount } from 'svelte';
    import { navLinks } from '$lib/data/site';

    const heroNavLinks = navLinks.filter((link) => link.href !== '/kontakt');

    // Carousel images – tilføj/fjern frit
    const heroImages = [
        '/frontImg1.jpg',
        '/frontImg2.jpg',
        '/frontImg3.jpg',
        '/frontImg4.jpg',
        '/frontImg5.jpg'
    ];

    const INTERVAL_MS = 5000;

    let currentIndex = $state(0);
    let isPaused = $state(false);

    // Preload alle billeder for at undgå flash ved skift
    onMount(() => {
        heroImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        // Pause når tab ikke er synligt (sparer CPU)
        const handleVisibility = () => {
            isPaused = document.hidden;
        };
        document.addEventListener('visibilitychange', handleVisibility);

        // Respect reduced motion
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (reducedMotion.matches) {
            isPaused = true;
        }

        return () => {
            document.removeEventListener('visibilitychange', handleVisibility);
        };
    });

    // Reaktivt interval – stopper automatisk hvis isPaused ændres
    $effect(() => {
        if (isPaused) return;

        const id = setInterval(() => {
            currentIndex = (currentIndex + 1) % heroImages.length;
        }, INTERVAL_MS);

        return () => clearInterval(id);
    });
</script>

<section
    class="relative flex min-h-[calc(100svh-var(--header-offset,0px))] items-center justify-center overflow-hidden py-20 sm:py-24"
    aria-label="Velkommen"
>
    <!-- Carousel: alle billeder lagt oven på hinanden, kun det aktive er synligt -->
    <div class="absolute inset-0" aria-hidden="true">
        {#each heroImages as src, i (src)}
            <img
                {src}
                alt=""
                fetchpriority={i === 0 ? 'high' : 'low'}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                class="hero-img absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
                class:is-active={i === currentIndex}
                style:opacity={i === currentIndex ? 1 : 0}
            />
        {/each}
    </div>

    <!-- Layered gradients for depth & legibility -->
    <div
        class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"
        aria-hidden="true"
    ></div>
    <div
        class="absolute inset-0 bg-gradient-to-tr from-brand-900/40 via-transparent to-transparent"
        aria-hidden="true"
    ></div>

    <!-- Decorative blurred orbs -->
    <div
        class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl"
        aria-hidden="true"
    ></div>
    <div
        class="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl"
        aria-hidden="true"
    ></div>

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
        <!-- Eyebrow -->
        <div
            class="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md"
        >
            <span class="relative flex h-2 w-2">
                <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75"
                ></span>
                <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-400"></span>
            </span>
            Privat pasningsordning i Viborg
        </div>

        <h1
            class="animate-fade-in-up mb-6 text-5xl leading-[1.05] font-bold tracking-tight drop-shadow-2xl md:text-7xl lg:text-8xl"
            style="animation-delay: 100ms"
        >
            Velkommen til<br />
            <span
                class="bg-gradient-to-r from-brand-200 via-brand-300 to-brand-400 bg-clip-text text-transparent"
            >
                Eline's Krudtugler
            </span>
        </h1>

        <p
            class="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-2xl"
            style="animation-delay: 200ms"
        >
            Et trygt og kærligt hjem, hvor dit barn kan lege, lære og udfolde sig.
        </p>

        <!-- Quick Nav Pills -->
        <nav
            aria-label="Genveje"
            class="animate-fade-in-up mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            style="animation-delay: 300ms"
        >
            {#each heroNavLinks as item (item.href)}
                <a
                    href={item.href}
                    class="group rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 hover:shadow-lg sm:text-base"
                >
                    {item.label}
                    <span
                        class="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true">→</span
                    >
                </a>
            {/each}
        </nav>

        <!-- CTA -->
        <div
            class="animate-fade-in-up flex flex-col items-center justify-center gap-4 sm:flex-row"
            style="animation-delay: 400ms"
        >
            <a
                href="/kontakt"
                class="group relative w-full overflow-hidden rounded-full bg-brand-500 px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-brand-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-2xl hover:shadow-brand-500/40 sm:w-auto"
            >
                <span class="relative z-10 flex items-center justify-center gap-2">
                    Kontakt mig
                    <svg
                        class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </span>
                <span
                    class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    aria-hidden="true"
                ></span>
            </a>
        </div>
    </div>

    <!-- Carousel indicators (valgfrit – men giver god UX) -->
    <div
        class="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Vælg billede"
    >
        {#each heroImages as _, i (i)}
            <button
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Vis billede ${i + 1}`}
                onclick={() => (currentIndex = i)}
                class="h-1.5 rounded-full bg-white/40 backdrop-blur-sm transition-all duration-500 hover:bg-white/70"
                class:w-8={i === currentIndex}
                class:bg-white={i === currentIndex}
                class:w-1.5={i !== currentIndex}
            ></button>
        {/each}
    </div>
</section>

<style>
    /* Ken Burns kun på det aktive billede */
    .hero-img.is-active {
        animation: ken-burns 6s ease-out forwards;
        transform-origin: center;
    }

    @keyframes ken-burns {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.08);
        }
    }

    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    :global(.animate-fade-in-up) {
        animation: fade-in-up 0.8s ease-out both;
    }

    @media (prefers-reduced-motion: reduce) {
        .hero-img.is-active,
        :global(.animate-fade-in-up) {
            animation: none !important;
        }
        .hero-img {
            transition: none !important;
        }
    }
</style>