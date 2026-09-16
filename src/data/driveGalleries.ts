// Gallery photographs imported from the project folders in Google Drive.
// Files live in src/assets/drive and are named "<project-id>-<n>.webp".

const modules = import.meta.glob("../assets/drive/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const grouped: Record<string, { index: number; src: string }[]> = {};

// These Drive files repeat a project's lead image or another photograph already
// retained in its curated gallery. Keep the earliest curated occurrence only.
const duplicateDriveImages = new Set([
  "fika-1.webp",
  "fika-4.webp",
  "gloom-1.webp",
  "imburte-union-2.webp",
  "just-like-old-days-1.webp",
  "liminal-phantoms-2.webp",
  "noise-without-silence-1.webp",
  "noise-without-silence-2.webp",
  "noise-without-silence-3.webp",
  "rorschach-1.webp",
  "rorschach-2.webp",
  "stor-fagel-1.webp",
  "stor-fagel-2.webp",
  "strangers-in-the-night-2.webp",
  "the-body-as-border-1.webp",
  "the-body-as-border-2.webp",
  "the-body-as-border-3.webp",
  "through-the-looking-glass-2.webp",
  "through-the-looking-glass-9.webp",
  "vicious-cycle-1.webp",
  "vicious-cycle-5.webp",
  "vicious-cycle-6.webp",
  "vicious-cycle-7.webp",
  "vicious-cycle-8.webp",
  "what-falls-doesnt-always-land-1.webp",
  "what-falls-doesnt-always-land-2.webp",
  "what-falls-doesnt-always-land-3.webp",
]);

for (const [path, src] of Object.entries(modules)) {
  const file = path.split("/").pop() ?? "";
  if (duplicateDriveImages.has(file)) continue;
  const match = file.match(/^(.*)-(\d+)\.webp$/);
  if (!match) continue;
  const [, slug, index] = match;
  (grouped[slug] ??= []).push({ index: Number(index), src });
}

export const driveGalleries: Record<string, string[]> = Object.fromEntries(
  Object.entries(grouped).map(([slug, items]) => [
    slug,
    items.sort((a, b) => a.index - b.index).map((item) => item.src),
  ])
);
