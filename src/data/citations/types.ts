export type CitationTier = "primary" | "secondary" | "estimate" | "editorial";

export type CitationDomain =
  | "stock-status"
  | "production"
  | "trade"
  | "nutrition"
  | "mercury"
  | "labour"
  | "environment"
  | "regulatory"
  | "labelling"
  | "indigenous"
  | "operators"
  | "journalism";

export type Citation = {
  id: string;
  label: string;
  title: string;
  publisher: string;
  year?: number;
  url: string;
  tier: CitationTier;
  accessedDate?: string;
  notes?: string;
  domain: CitationDomain;
};
