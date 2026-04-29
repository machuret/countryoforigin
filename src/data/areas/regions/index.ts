import type { Area } from "../types";
import { nswRegions } from "./nsw";
import { vicRegions } from "./vic";
import { qldRegions } from "./qld";
import { saRegions } from "./sa";
import { waRegions } from "./wa";
import { tasRegions } from "./tas";
import { ntRegions } from "./nt";
import { crossStateRegions } from "./cross-state";

export const regions: Area[] = [
  ...nswRegions,
  ...vicRegions,
  ...qldRegions,
  ...saRegions,
  ...waRegions,
  ...tasRegions,
  ...ntRegions,
  ...crossStateRegions,
];
