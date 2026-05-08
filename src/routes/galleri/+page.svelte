<script lang="ts">
	import Schedule from '$lib/components/Schedule.svelte';

	    const gallery = [
        {
            src: '/frontImg1.jpg',
            alt: 'Børn der leger i haven',
            class: 'md:col-span-2 md:row-span-2'
        },
        {
            src: '/frontImg2.jpg',
            alt: 'Legetøj og hyggelige omgivelser',
            class: ''
        },
        {
            src: '/frontImg3.jpg',
            alt: 'Udeleg og natur',
            class: ''
        },
        {
            src: '/frontImg4.jpg',
            alt: 'Tegne- og kreativitetsstund',
            class: 'md:col-span-2'
        },
        {
            src: '/frontImg5.jpg',
            alt: 'Et smilende barn i trygge rammer',
            class: ''
        },
        {
            src: '/frontImg1.jpg',
            alt: 'Frokost og samvær',
            class: ''
        }
    ];
</script>

<svelte:head>
	<title>Børnepasning – Eline Storgaard Andersen</title>
	<meta
		name="description"
		content="Professionel børnepasning i Viborg. Et trygt og kærligt hjem for dit barn."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Nunito:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section id="galleri" class="relative overflow-hidden bg-brand-50 px-4 py-24">
    <!-- Decorative background blobs -->
    <div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"></div>
    <div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"></div>

    <div class="relative mx-auto max-w-6xl">
        <!-- Section label -->
        <div class="mb-4 flex justify-center">
            <span
                class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
            >
                <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                Galleri
            </span>
        </div>

        <h2 class="text-center text-4xl font-bold text-gray-800 md:text-5xl">
            Et lille glimt af
            <span class="text-brand-600">hverdagen hos Eline</span>
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
            Her kan du se et udvalg af billeder fra en tryg, nærværende og hyggelig hverdag med leg,
            læring, udeliv og omsorg.
        </p>

        <!-- Gallery grid -->
        <div class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[220px]">
            {#each gallery as item}
                <div
                    class={`group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 ${item.class}`}
                >
                    <img
                        src={item.src}
                        alt={item.alt}
                        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <!-- Gradient overlay -->
                    <div class="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

                    <!-- Caption -->
                    <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div class="rounded-2xl bg-white/90 px-4 py-3 backdrop-blur-sm">
                            <p class="text-sm font-semibold text-gray-800">{item.alt}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Bottom text -->
        <div class="mx-auto mt-16 max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-10">
            <h3 class="text-2xl font-bold text-gray-800">Tryghed, nærvær og glade børn</h3>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
                For mig handler god børnepasning om at skabe en hverdag, hvor børnene trives, udvikler sig
                og føler sig set, hørt og elsket.
            </p>
        </div>
    </div>
</section>