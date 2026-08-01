import { createClient } from '@supabase/supabase-js' // Librería para poder conectarse a supabase
import dotenv from "dotenv";

dotenv.config(); // carga la variables de entorno .env

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;