// Gallery photographs imported from the project folders in Google Drive.
// Files live in src/assets/drive and are named "<project-id>-<n>.webp".

const modules = import.meta.glob("../assets/drive/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const grouped: Record<string, { index: number; src: string }[]> = {};

for (const [path, src] of Object.entries(modules)) {
  const file = path.split("/").pop() ?? "";
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
