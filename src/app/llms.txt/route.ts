import { pestLibrary } from "@/data/pest-library";
import { trainingSessions } from "@/data/academy";
import { siteConfig } from "@/data/site-config";

// Serves /llms.txt — a plain-text map of the site for AI crawlers / chatbots.
// Follows the llms.txt convention (https://llmstxt.org). Generated from site
// data so it stays in sync as pests and training sessions are added.
export const dynamic = "force-static";

export function GET() {
  const baseUrl = "https://urbanpestsolution.com";

  const lines: string[] = [];

  lines.push(`# ${siteConfig.companyName}`);
  lines.push("");
  lines.push(
    "> Integrated pest management (IPM) for commercial and residential properties across Pakistan — science-driven, eco-friendly pest control, training, and a comprehensive pest identification library."
  );
  lines.push("");
  lines.push(
    `Contact: ${siteConfig.phone} · ${siteConfig.email} · ${siteConfig.address}`
  );
  lines.push("");

  lines.push("## Core Pages");
  lines.push(`- [Home](${baseUrl}/): Overview of Urban Pest Solution and IPM approach`);
  lines.push(`- [Services](${baseUrl}/services): Pest control services — general, termite, rodent, bed bug, fumigation, mosquito and commercial IPM`);
  lines.push(`- [Commercial Pest Control](${baseUrl}/commercial): Pest management for food & beverage, retail, hospitality, healthcare and more`);
  lines.push(`- [Residential Pest Control](${baseUrl}/residential): Home and family pest protection`);
  lines.push(`- [Shop](${baseUrl}/shop): Professional pest control products and supplies`);
  lines.push(`- [Contact](${baseUrl}/contact): Request a free consultation or inspection`);
  lines.push("");

  lines.push("## Pest Library");
  lines.push(
    `Identification and treatment guidance for ${pestLibrary.length} common pests.`
  );
  lines.push(`- [Pest Library index](${baseUrl}/library)`);
  for (const pest of pestLibrary) {
    lines.push(
      `- [${pest.name}](${baseUrl}/library/${pest.slug}): ${pest.tagline}`
    );
  }
  lines.push("");

  lines.push("## Urban Pest Academy");
  lines.push(
    `${trainingSessions.length} training sessions and workshops on Integrated Pest Management.`
  );
  lines.push(`- [Academy index](${baseUrl}/academy)`);
  for (const session of trainingSessions) {
    lines.push(
      `- [${session.title}](${baseUrl}/academy/${session.slug}): ${session.tagline}`
    );
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
