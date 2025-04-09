import db from '$lib/db';

export async function load({ params }) {
	const id = parseInt(params.id);
	const games = await db.game.findFirst({ where: { id } });
	return { games };
}
