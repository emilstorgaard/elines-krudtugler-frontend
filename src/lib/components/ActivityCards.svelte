<script lang="ts">
	interface Activity {
		icon: string;
		title: string;
		description: string;
	}

	let { activities }: { activities: Activity[] } = $props();
</script>

<div
	class="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
	style="-webkit-overflow-scrolling: touch; scrollbar-width: none;"
>
	{#each activities as activity}
		<div
			class="group flex w-64 flex-shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:w-auto"
		>
			<div
				class="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-2xl transition-transform duration-300 group-hover:scale-110"
			>
				{activity.icon}
			</div>
			<h3 class="mb-1 text-base font-bold text-gray-800">{activity.title}</h3>
			<p class="text-sm leading-relaxed text-gray-500">{activity.description}</p>
		</div>
	{/each}
</div>
