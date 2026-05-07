<section id="hvad-skal-medbringes" class="relative overflow-hidden px-4 py-16">
    <div class="relative mx-auto max-w-5xl">
        <!-- Header -->
        <div class="mb-4 flex justify-center">
            <span
                class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase shadow-sm"
            >
                <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                Hvad skal medbringes
            </span>
        </div>
        <p class="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-500">
            Her er en huskeliste til jer forældre – og en oversigt over hvad jeg sørger for.
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <!-- Forældrenes huskeliste -->
            <div
                class="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-200/60 bg-white/90 p-8 shadow-xl shadow-brand-900/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
            >
                <div
                    class="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                ></div>

                <div class="relative">
                    <div class="mb-6 flex items-center gap-3">
                        <h3 class="text-xl font-bold text-gray-800">Huskeliste til jer</h3>
                    </div>

                    <ul class="space-y-3.5 text-gray-700">
                        {#each [{ text: 'Skiftetøj' }, { text: 'Overtøj og fodtøj tilpasset årstiden' }, { text: 'Sutter', sub: '(selvfølgelig kun hvis dit barn bruger sut 😉)' }, { text: 'Nusseklud / bamse' }] as item}
                            <li class="flex items-start gap-3">
                                <span
                                    class="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-sm"
                                ></span>
                                <span>
                                    {item.text}
                                    {#if item.sub}
                                        <span class="text-gray-500">{item.sub}</span>
                                    {/if}
                                </span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>

            <!-- Jeg sørger for -->
            <div
                class="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-200/60 bg-white/90 p-8 shadow-xl shadow-brand-900/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
            >
                <div
                    class="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                ></div>

                <div class="relative">
                    <div class="mb-6 flex items-center gap-3">
                        <h3 class="text-xl font-bold text-gray-800">Jeg sørger for</h3>
                    </div>

                    <ul class="space-y-3.5 text-gray-700">
                        <li class="flex items-start gap-3">
                            <span
                                class="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-sm"
                            ></span>
                            <span>Barnevogn med godkendt sele, voksipose, dyne osv.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span
                                class="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-sm"
                            ></span>
                            <span>
                                Sund, nærende og varieret kost gennem hele dagen
                                <span class="mt-1 block text-sm text-gray-500">
                                    (Hvis dit barn har brug for modermælkserstatning eller specialkost,
                                    skal dette medbringes hjemmefra)
                                </span>
                            </span>
                        </li>
                        {#each [{ text: 'Bleer' }, { text: 'Creme til bleskift' }, { text: 'Vaskeklude og vådservietter' }, { text: 'Solcreme' }] as item}
                            <li class="flex items-start gap-3">
                                <span
                                    class="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-sm"
                                ></span>
                                <span>{item.text}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>