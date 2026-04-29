import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areaBySlug, regionsByState, statesOnly } from "@/data/areas";
import { AreaDetailPage } from "@/components/area";

type Params = { state: string };

export async function generateStaticParams(): Promise<Params[]> {
  return statesOnly().map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { state } = await params;
  const a = areaBySlug(state);
  if (!a || a.type !== "state") return {};
  return {
    title: a.meta?.title ?? `${a.name} — Australian Seafood Guide`,
    description: a.meta?.description ?? a.summary,
  };
}

export default async function StateDetail({ params }: { params: Promise<Params> }) {
  const { state } = await params;
  const a = areaBySlug(state);
  if (!a || a.type !== "state") notFound();

  return (
    <AreaDetailPage
      area={a}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/areas", label: "States & regions" },
        { label: a.name },
      ]}
      hero={{
        eyebrow: `Australian State · ${a.state ?? ""}`,
        back: { href: "/areas", label: "All states & regions" },
      }}
      childRegions={regionsByState(a.slug)}
    />
  );
}
