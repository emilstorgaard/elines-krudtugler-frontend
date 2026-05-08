<script lang="ts">
  import { scrollTo } from '$lib/utils/scroll';
  import { onMount } from 'svelte';

  let videoEl: HTMLVideoElement;

  onMount(() => {
    videoEl.playbackRate = 0.5;
  });
</script>

<section class="relative flex h-170 items-center justify-center overflow-hidden">
  <video
  autoplay muted loop playsinline
  class="absolute inset-0 h-full w-full object-cover scale-105 grayscale"
  bind:this={videoEl}
  >
    <source src="/test.mp4" type="video/mp4" />
  </video>

  <!-- Layered gradient for depth -->
  <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10"></div>
  <div class="absolute inset-0 bg-linear-to-r from-black/30 to-transparent"></div>

  <div class="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
    <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
      <span class="text-lg">
        <img src="/logo.png" alt="Logo" class="h-10 w-10 object-contain" />
      </span>
      <span class="text-sm font-medium tracking-widest uppercase">Eline Storgaard Andersen</span>
    </div>

    <h1 class="mb-6 text-5xl leading-tight font-bold drop-shadow-lg md:text-7xl">
      Velkommen til<br />
      <span class="text-brand-300">Eline´s Krudtugler</span>
    </h1>

    <p class="mx-auto mb-10 max-w-xl text-xl text-white/90 md:text-2xl">
      Et trygt og kærligt hjem for dit barn
    </p>

    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        onclick={() => scrollTo('#kontakt')}
        class="rounded-full bg-brand-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/30"
      >
        Kontakt mig
      </button>

      
        <a href="#om-mig"
        class="rounded-full border border-white/50 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
      >
        Læs mere
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</section>