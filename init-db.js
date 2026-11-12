import fs from 'node:fs';import {pool} from './db.js';
try{await pool.query(fs.readFileSync(new URL('./schema.sql',import.meta.url),'utf8'));console.log('SCAG database initialized.')}finally{await pool.end()}
