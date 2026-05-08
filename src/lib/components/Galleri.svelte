<script lang="ts">
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

<div class=" text-center">
	<h1 class="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
		Et lille glimt af
		<span class="text-brand-600">hverdagen hos Eline</span>
	</h1>
</div>

<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
	Her kan du se et udvalg af billeder fra en tryg, nærværende og hyggelig hverdag med leg, læring,
	udeliv og omsorg.
</p>

<!-- Gallery grid -->
<div class="my-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-3">
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
			<div
				class="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
			></div>

			<!-- Caption -->
			<div
				class="absolute inset-x-0 bottom-0 p-4 opacity-0 transition duration-300 group-hover:opacity-100"
			>
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
		For mig handler god børnepasning om at skabe en hverdag, hvor børnene trives, udvikler sig og
		føler sig set, hørt og elsket.
	</p>
</div>
