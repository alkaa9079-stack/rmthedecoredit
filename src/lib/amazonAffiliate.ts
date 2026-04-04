/**
 * Amazon Associate affiliate tag utility.
 * Automatically appends the Associate tag to any amazon.co.uk link.
 */

const ASSOCIATE_TAG = "rm8thedecored-21";

export const appendAffiliateTag = (url: string): string => {
  if (!url || url === "#") return url;

  try {
    const parsed = new URL(url);

    // Only apply to Amazon UK domains
    if (!parsed.hostname.includes("amazon.co.uk")) return url;

    // Replace or add the tag parameter
    parsed.searchParams.set("tag", ASSOCIATE_TAG);
    return parsed.toString();
  } catch {
    // If URL parsing fails, attempt simple append
    if (url.includes("amazon.co.uk")) {
      const separator = url.includes("?") ? "&" : "?";
      return `${url}${separator}tag=${ASSOCIATE_TAG}`;
    }
    return url;
  }
};
