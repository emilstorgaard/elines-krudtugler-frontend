<script lang="ts">
    import { scheduleItems } from '$lib/data/site';
</script>

<section id="praktisk" class="relative overflow-hidden bg-brand-50 px-4 py-24">
    <!-- Decorative blobs -->
    <div class="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"></div>
    <div class="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/60 blur-3xl"></div>

    <div class="relative mx-auto max-w-5xl">
        <!-- Header -->
        <div class="mb-5 flex justify-center">
            <span
                class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold tracking-[0.22em] text-brand-700 uppercase shadow-sm ring-1 ring-brand-200/60"
            >
                <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                Hverdagen
            </span>
        </div>

        <p class="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
            En dag her hos Krudtuglerne kan se sådan ud:
        </p>

        <!-- Timeline -->
        <div class="relative">
            <!-- Vertical line -->
            <div class="absolute top-0 bottom-0 left-4.5 w-px bg-linear-to-b from-brand-200 via-brand-200 to-brand-100 md:left-1/2 md:-translate-x-1/2"></div>

            <div class="space-y-6 md:space-y-8">
                {#each scheduleItems as item, i}
                    <div
                        class={`relative flex items-start gap-4 md:items-center md:gap-0 ${
                            i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}
                    >
                        <!-- Card -->
                        <div
                            class={`ml-12 flex-1 md:ml-0 ${
                                i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                            }`}
                        >
                            <div
                                class="group rounded-3xl border border-white/70 bg-white/95 p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.28)] md:p-6"
                            >
                                <p class="mb-1 text-sm font-bold tracking-wide text-brand-600">
                                    {item.time}
                                </p>
                                <p class="whitespace-pre-line font-semibold leading-relaxed text-gray-800">
                                    {item.activity}
                                </p>
                            </div>
                        </div>

                        <!-- Center dot -->
                        <div
                            class="absolute left-0 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-brand-50 bg-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.35)] ring-1 ring-brand-100 md:left-1/2 md:-translate-x-1/2"
                        >
                            <span class="h-2.5 w-2.5 rounded-full bg-brand-500"></span>
                        </div>

                        <!-- Spacer for alternating desktop layout -->
                        <div class="hidden flex-1 md:block"></div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Footer note -->
        <div class="mt-12 rounded-3xl bg-white/95 px-6 py-5 text-center shadow-sm ring-1 ring-black/5">
            <p class="text-gray-600">
                Dagen tilrettelages altid efter børnegruppen, børnenes alder, udvikling og interesser.
            </p>
        </div>

        <!-- Activities card -->
        <div class="mt-6 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm ring-1 ring-black/5">
            <div class="border-b border-brand-100/70 bg-linear-to-r from-brand-50 to-white px-6 py-5">
                <h3 class="text-center text-lg font-bold tracking-tight text-gray-800 md:text-xl">
                    Eksempler på aktiviteter hos Krudtuglerne
                </h3>
            </div>

            <div class="space-y-6 px-6 py-6 text-gray-700 md:px-8">
                <ul class="list-disc space-y-2 pl-5 leading-relaxed marker:text-brand-500">
                    <li>Leg på vores dejlige legeplads i haven</li>
                    <li>
                        Skovtur, hvor vi:
                        <ul class="mt-2 list-disc space-y-1 pl-6 text-gray-600 marker:text-brand-300">
                            <li>Tumper i skovbunden</li>
                            <li>Triller ned ad bakken og kæmper os op igen</li>
                            <li>Krible-krabler</li>
                            <li>Samler blade og andre naturmaterialer</li>
                        </ul>
                    </li>
                    <li>Besøg på bondegården</li>
                    <li>
                        Tur til søen, hvor vi:
                        <ul class="mt-2 list-disc space-y-1 pl-6 text-gray-600 marker:text-brand-300">
                            <li>Fodrer ænder</li>
                            <li>Kaster sten i vandet</li>
                            <li>Fanger haletudser</li>
                        </ul>
                    </li>
                    <li>Vores ugentlige tur til fiskemanden</li>
                    <li>Ud i naturen med madpakker</li>
                    <li>Besøg i Hermans Hule</li>
                    <li>Udflugter til områdets legepladser</li>
                    <li>Aktiviteter tilpasset årstiderne</li>
                    <li>Vi hjælper med at passe og fodre kaninerne på vores legeplads</li>
                    <li>Aktiviteter tilpasset traditioner som fastelavn, påske, halloween og jul</li>
                    <li>Kreative aktiviteter (Krea)</li>
                    <li>Biblioteksbesøg</li>
                    <li>
                        Når vi er indendørs nyder vi:
                        <ul class="mt-2 list-disc space-y-1 pl-6 text-gray-600 marker:text-brand-300">
                            <li>Sang og musik</li>
                            <li>Tummel og motorikbaner</li>
                            <li>FriS leg</li>
                        </ul>
                    </li>
                </ul>

                <div class="rounded-2xl bg-brand-50/70 p-4 ring-1 ring-brand-100/70">
                    <p class="font-semibold text-gray-800">Fokusområder:</p>
                    <p class="text-gray-600">Udelivet · Sang &amp; Musik · Motorik</p>
                </div>
            </div>
        </div>
    </div>
</section>