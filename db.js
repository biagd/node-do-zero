import 'dotenv/config'
import postgres from 'postgres'

//require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();


//const http = require("http");
import http from 'http';

//const { neon } = require("@neondatabase/serverless");
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);