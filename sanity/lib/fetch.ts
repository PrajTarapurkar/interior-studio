import { client } from "./client";
import {
  HOME_HERO_QUERY,
  HOME_SERVICES_SECTION_QUERY,
  FEATURED_HOME_PROJECTS_QUERY,
  HOME_HOW_IT_WORKS_QUERY,
  HOME_VIDEO_SECTION_QUERY,
  REVIEWS_HERO_QUERY,
} from "./queries";

export async function getHomeHero() {
  return client.fetch(HOME_HERO_QUERY);
}

export async function getHomeServicesSection() {
  return client.fetch(HOME_SERVICES_SECTION_QUERY);
}

export async function getFeaturedHomeProjects() {
  return client.fetch(FEATURED_HOME_PROJECTS_QUERY);
}

export async function getHomeHowItWorks() {
  return client.fetch(HOME_HOW_IT_WORKS_QUERY);
}

export async function getHomeVideoSection() {
  return client.fetch(HOME_VIDEO_SECTION_QUERY);
}

export async function getReviewsHero() {
  return client.fetch(REVIEWS_HERO_QUERY);
}