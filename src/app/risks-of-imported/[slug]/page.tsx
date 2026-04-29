import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CampaignPageTemplate } from "@/components/CampaignPageTemplate";
import { riskPageBySlug, allRiskPageSlugs } from "@/data/campaigns";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allRiskPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = riskPageBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Risks of Imported Seafood`,
    description: p.summary,
  };
}

export default async function RiskDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = riskPageBySlug(slug);
  if (!p) notFound();

  return (
    <CampaignPageTemplate
      page={p}
      hubLabel="Risks of Imported"
      back={{ href: "/risks-of-imported", label: "All risks" }}
    />
  );
}
