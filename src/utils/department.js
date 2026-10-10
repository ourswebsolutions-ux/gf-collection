// Department accents shared by server and client components (Women = rose, Girls / Kids = lilac).
// Any other department (or none) falls back to the brand champagne.

/** Text colour class for a department label. */
export const departmentText = (slug) => (slug === "girls" ? "text-girls" : slug === "women" ? "text-women" : "text-gold-deep");
