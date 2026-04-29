import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CampaignPageTemplate } from "@/components/CampaignPageTemplate";
import { whyPillarBySlug, allWhyPillarSlugs } from "@/data/campaigns";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allWhyPillarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = whyPillarBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Why Australian Seafood`,
    description: p.summary,
  };
}

export default async function WhyAustralianPillar({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = whyPillarBySlug(slug);
  if (!p) notFound();

  return (
    <CampaignPageTemplate
      page={p}
      hubLabel="Why Australian"
      back={{ href: "/why-australian", label: "All pillars" }}
    />
  );
}
