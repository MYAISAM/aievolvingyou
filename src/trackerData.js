export const SUPABASE_URL = 'https://fdwldyhzoojeoapmqwxv.supabase.co'
export const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkd2xkeWh6b29qZW9hcG1xd3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3ODcwMjAsImV4cCI6MjA1OTM2MzAyMH0.PRL7W4jzMS9l-B4xJI4NYRp12sVR0ylfc2xWN_E2qL4'

export const supabaseHeaders = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
}

export const TRACKER_SELECT = [
  'id',
  'jobs_cut',
  'headcount_pending',
  'ai_attribution',
  'published',
].join(',')

export function isCountedTrackerRow(row) {
  return (
    row?.published === true &&
    ['confirmed', 'probable'].includes(row.ai_attribution) &&
    !row.headcount_pending &&
    typeof row.jobs_cut === 'number' &&
    Number.isFinite(row.jobs_cut)
  )
}

export function calcTrackerJobsTotal(rows) {
  return rows
    .filter(isCountedTrackerRow)
    .reduce((sum, row) => sum + row.jobs_cut, 0)
}

export async function fetchPublishedTrackerRows() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/ai_displacement_tracker?select=${TRACKER_SELECT}&published=eq.true`,
    { headers: supabaseHeaders }
  )

  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}
