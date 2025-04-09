<script lang="ts">
	export let data;
	const games = data.games;
</script>

<!-- <form method="POST" action="?/addFriend" class="bg-blue-300 flex flex-col gap-4 p-4">
	<input name="name" required />
	<input name="age" type="number" required />
	<select name="type" required>
		<option value="">Select interest</option>
		<option value="sport">sport</option>
		<option value="adventure">adventure</option>
		<option value="shooter">shooter</option>
		<option value="racing">racing</option>CCCC
	</select>
	<button type="submit">Dodaj prijatelja</button>
</form> -->

<h1 class="text-3xl font-bold underline">MOJE IGRE</h1>

<div class="grid grid-cold-3 p-4 bg-slate-300 gap-4">
	{#each games as f}
		<div class=" bg-stone-400 rounded-sm">
			<div class="text-lg font-bold">#{f.id}{f.name}</div>
			<div>({f.type})</div>
			<div class="text-sm text-gray-600">rating: {f.rating}</div>
			<a class="bg-red-900 p-2 text-white rounded-sm" href={games.id}>Edit</a>
		</div>
	{/each}
</div>
