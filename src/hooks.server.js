import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from '$env/static/private'

export async function handle({ event, resolve }) {
    event.locals.supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

    const response = await resolve(event)
    return response
}
