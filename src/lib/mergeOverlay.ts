/**
 * Merge an optional overlay record into a base record. Used to layer
 * "deep data" overlays onto base species/area/industry/comparison
 * records without losing fields set on the base.
 *
 * Rules:
 * - For scalar fields the BASE value wins when defined.
 * - For listed `arrayFields`, the base array wins if present, else the
 *   overlay array fills in. (No element-by-element merge.)
 *
 * If overlay is undefined or null, base is returned unchanged.
 */
export function mergeOverlay<T extends object>(
  base: T,
  overlay: Partial<T> | undefined,
  arrayFields: (keyof T)[] = [],
): T {
  if (!overlay) return base;
  const merged = { ...overlay, ...base } as T;
  for (const k of arrayFields) {
    const baseVal = base[k];
    const overlayVal = overlay[k];
    if (baseVal === undefined && overlayVal !== undefined) {
      merged[k] = overlayVal as T[typeof k];
    }
  }
  return merged;
}
