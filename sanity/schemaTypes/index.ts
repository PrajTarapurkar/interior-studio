import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./project";
import { categoryType } from "./category";
import { serviceType } from "./service";
import { homeServicesSectionType } from "./homeServicesSection";
import { homeHeroType } from "./homeHero";
import homeHowItWorks from "./homeHowItWorks";
import homeVideoSection from "./homeVideoSection";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    categoryType,
    serviceType,
    homeServicesSectionType,
    homeHeroType,
    homeHowItWorks,
    homeVideoSection,
  ],
};