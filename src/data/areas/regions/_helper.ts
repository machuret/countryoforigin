import type { Slug } from "../../types";
import type { Area, StateCode } from "../types";

/** Tiny factory that wraps the verbose Area-record creation for fishing regions. */
export const region = (
  partial: Omit<Area, "type"> & { parentState: Slug; state: StateCode },
): Area => ({ ...partial, type: "region" });
