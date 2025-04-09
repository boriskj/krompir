import db from '$lib/db';

export async function load() {
	// SELECT * FROM friend
	const games = await db.game.findMany();

	return {
		games
	};
}
