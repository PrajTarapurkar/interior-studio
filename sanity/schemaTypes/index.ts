import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./project";
import { categoryType } from "./category";
import { serviceType } from "./service";
import { homeServicesSectionType } from "./homeServicesSection";
import { homeHeroType } from "./homeHero";
import homeHowItWorks from "./homeHowItWorks";
import homeVideoSection from "./homeVideoSection";
import { reviewsHeroType } from "./reviewsHero";
import { reviewsVideoTestimonialsType } from "./reviewsVideoTestimonials";
import { reviewsGoogleRatingType } from "./reviewsGoogleRating";
import { reviewsSliderType } from "./reviewsSlider";
import { servicesHeroType } from "./servicesHero";
import { servicesGridType } from "./servicesGrid";
import { aboutHeroType } from "./aboutHero";
import { aboutStoryType } from "./aboutStory";
import { aboutCTAType } from "./aboutCTA";
import { contactHeroType } from "./contactHero";
import { contactInfoType } from "./contactInfo";
import { contactFormType } from "./contactForm";



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    categoryType,
    serviceType,
    homeServicesSectionType,
    homeHeroType,
    homeHowItWorks,
    homeVideoSection,
    reviewsHeroType,
    reviewsVideoTestimonialsType,
    reviewsGoogleRatingType,
    reviewsSliderType,
    servicesHeroType,
    servicesGridType,
    aboutHeroType,
    aboutStoryType,
    aboutCTAType,
    contactHeroType,
    contactInfoType,
    contactFormType,
  ],
};