import postgres from 'postgres';
import {PGCONNECT} from '$env/static/private';

const sql = postgres(process.env.PGCONNECT, {});
export default sql;
