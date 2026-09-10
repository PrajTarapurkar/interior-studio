import React from "react";

export default function StructuredData() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "Kulal Interiors",
        description:
          "Kulal Interiors is a luxury interior design studio in Pune specializing in premium residential, commercial, villa, and office interiors.",
        url: siteUrl,
        telephone: "+91-7709943271",
        email: "kulalinteriors@gmail.com",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop 05, Mohite Farm, Life Republic, Punawale",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411033",
          addressCountry: "IN",
        },

        areaServed: {
          "@type": "City",
          name: "Pune",
        },

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "20:30",
          },
        ],
      },

      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Kulal Interiors",
        description:
          "Luxury interior design studio in Pune specializing in premium residential and commercial interiors.",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}