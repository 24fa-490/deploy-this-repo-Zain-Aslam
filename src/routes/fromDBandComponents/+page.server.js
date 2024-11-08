
import sql from '$lib/server/database';

export async function load() {
    const rows = sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        container;

    console.log({rows});

    return { containers: rows };
}
