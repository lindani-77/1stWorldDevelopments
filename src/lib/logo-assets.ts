export type LogoAsset = {
  name: string;
  src: string;
  filename: string;
};

export function extensionScore(filename: string) {
  const extension = filename.split(".").pop()?.toLowerCase() ?? "";
  if (extension === "png") return 4;
  if (extension === "webp") return 3;
  if (extension === "svg") return 2;
  if (extension === "jpg" || extension === "jpeg") return 1;
  return 0;
}

export function cleanAssetName(filename: string) {
  const withoutExt = filename.replace(/\.[^/.]+$/, "");
  const clean = withoutExt
    .replace(/[-_.()[\]{}]/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/\b(?:logo|vector|png|svg|jpg|jpeg|ai|eps|photoroom|edited|preview|removebg|new|black|corporate|at your side|wine|com|co|za|electric|blue|keyline|idnr|idnr75xc51|0|1|2|3|4|5|6|7|8|9|whitr|1200x130|52da4c4)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/['']/g, "")
    .trim();
  return clean.length > 0 ? clean : withoutExt;
}

export function assetKey(filename: string) {
  return cleanAssetName(filename)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

function assetDisplayName(filename: string, overrides: Record<string, string>) {
  const key = assetKey(filename);
  return overrides[key] ?? cleanAssetName(filename);
}

export function buildUniqueLogoAssets(modules: Record<string, string>, overrides: Record<string, string> = {}) {
  const uniqueAssets = new Map<string, LogoAsset>();
  const seenDisplayNames = new Set<string>();

  // First pass: collect all assets with their dedup keys
  const allAssets: Array<{ key: string; asset: LogoAsset; score: number }> = [];
  
  for (const [path, src] of Object.entries(modules)) {
    const filename = path.split("/").pop() ?? "";
    const key = assetKey(filename);
    const name = assetDisplayName(filename, overrides);
    
    const penalty = /(photoroom|edited|preview)/i.test(filename) ? 1 : 0;
    const score = extensionScore(filename) - penalty;
    
    allAssets.push({
      key,
      asset: { name, src, filename },
      score,
    });
  }

  // Second pass: keep best version of each asset by key
  const bestByKey = new Map<string, { asset: LogoAsset; score: number }>();
  for (const { key, asset, score } of allAssets) {
    const existing = bestByKey.get(key);
    if (!existing || score > existing.score) {
      bestByKey.set(key, { asset, score });
    }
  }

  // Third pass: ensure no duplicate display names
  const result: LogoAsset[] = [];
  for (const { asset } of bestByKey.values()) {
    const displayName = asset.name.trim().toLowerCase();
    if (!seenDisplayNames.has(displayName)) {
      result.push(asset);
      seenDisplayNames.add(displayName);
    }
  }

  return result.sort((left, right) => left.name.localeCompare(right.name));
}