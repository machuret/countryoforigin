/**
 * Server component that emits a single Schema.org JSON-LD <script>.
 * Pass any object from src/lib/jsonld.ts; this component handles the
 * stringify + escape + dangerouslySetInnerHTML safely.
 */
export function JsonLd({ data }: { data: unknown }) {
  // JSON.stringify already escapes most things; replace `</` to defuse
  // any rare in-string </script> attempt.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
