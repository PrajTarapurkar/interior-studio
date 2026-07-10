import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./project";
import { categoryType } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    categoryType,
  ],
};