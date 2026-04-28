<script lang="ts">
	import {qualifications} from '../data/site';
</script>

<div class="rounded-2xl bg-white p-6 shadow-md">
	<h4 class="mb-4 text-lg font-bold text-gray-800">Mine kvalifikationer</h4>
	<ul class="space-y-3">
		{#each qualifications as qualification}
			<li class="flex items-center gap-3 text-gray-700">
				<span
					class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600"
				>
					✓
				</span>
				{qualification}
			</li>
		{/each}
	</ul>
</div>
