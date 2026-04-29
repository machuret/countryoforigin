import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areaBySlug, regionsOnly, areaUrl } from "@/data/areas";
import { AreaDetailPage } from "@/components/area";

type Params = { state: string; region: string };

export async function generateStaticParams(): Promise<Params[]> {
  return regionsOnly().map((r) => ({
    state: r.parentState ?? "",
    region: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { region } = await params;
  const a = areaBySlug(region);
  if (!a || a.type !== "region") return {};
  return {
    title: a.meta?.title ?? `${a.name} — Australian Seafood Guide`,
    description: a.meta?.description ?? a.summary,
  };
}

export default async function RegionDetail({ params }: { params: Promise<Params> }) {
  const { state, region } = await params;
  const a = areaBySlug(region);
  if (!a || a.type !== "region" || a.parentState !== state) notFound();

  const parent = areaBySlug(state);

  return (
    <AreaDetailPage
      area={a}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/areas", label: "States & regions" },
        ...(parent ? [{ href: areaUrl(parent), label: parent.name }] : []),
        { label: a.name },
      ]}
      hero={{
        eyebrow: `Region · ${a.state ?? ""}`,
        back: parent
          ? { href: areaUrl(parent), label: `Back to ${parent.name}` }
          : { href: "/areas", label: "All areas" },
        extra: parent && (
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-mid)" }}>
            Part of{" "}
            <Link href={areaUrl(parent)} style={{ color: "var(--teal)", fontWeight: 600 }}>
              {parent.name}
            </Link>
          </div>
        ),
      }}
    />
  );
}
