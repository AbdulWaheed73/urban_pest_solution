type JsonLdData = Record<string, unknown>;

/**
 * Renders a JSON-LD <script> tag. Safe to use in Server Components.
 * Pass a single schema object or an array of them.
 */
export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
