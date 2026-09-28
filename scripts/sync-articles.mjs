import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const sourcePath = resolve(process.cwd(), "..", "..", "Articles.md");
const outputPath = resolve(process.cwd(), "src", "lib", "articles-source.ts");
const source = readFileSync(sourcePath, "utf8").replaceAll("\r\n", "\n");
const matches = [...source.matchAll(/Title\s+(\d+)\.\s*\*\*([^*]+)\*\*:?\s*([\s\S]*?)(?=\n\s*Title\s+\d+\.|$)/gi)];

if (matches.length !== 8) {
  throw new Error(`Expected 8 articles in ${sourcePath}, found ${matches.length}`);
}

const articles = Object.fromEntries(
  matches.map(([, number, heading, body]) => [
    number,
    {
          heading: heading.trim().replaceAll("\\[MAIN HEADING]", "").replace(/\s*:\s*$/, ""),
      blocks: body
        .split(/\n\s*\n+/)
        .map((block) => block.replace(/^[\s\-_*\\]+|[\s\-_*\\]+$/g, "").replace(/\s+/g, " ").trim())
        .filter(Boolean),
    },
  ]),
);

writeFileSync(
  outputPath,
  `// Generated from Articles.md. Run npm run sync:articles after editing the source document.\nexport const fullArticleSource = ${JSON.stringify(articles, null, 2)} as const;\n`,
);