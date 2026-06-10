import { createServerFn } from "@tanstack/react-start";

const PLACE_ID = "ChIJQ77GRF3nj4ARMlebbenDPJo";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

export type GoogleReview = {
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
  publishTime: string;
  uri?: string;
};

export type ReviewsPayload = {
  rating: number;
  total: number;
  mapsUri: string;
  fetchedAt: string;
  reviews: GoogleReview[];
};

export const getReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReviewsPayload> => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!lovableKey || !mapsKey) {
      return {
        rating: 0,
        total: 0,
        mapsUri: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
        fetchedAt: new Date().toISOString(),
        reviews: [],
      };
    }

    const res = await fetch(`${GATEWAY_URL}/places/v1/places/${PLACE_ID}`, {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": mapsKey,
        "X-Goog-FieldMask":
          "id,displayName,rating,userRatingCount,reviews,googleMapsUri",
      },
    });

    if (!res.ok) {
      console.error("Google Places error", res.status, await res.text());
      return {
        rating: 0,
        total: 0,
        mapsUri: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
        fetchedAt: new Date().toISOString(),
        reviews: [],
      };
    }

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: Array<{
        rating: number;
        relativePublishTimeDescription: string;
        text?: { text: string };
        originalText?: { text: string };
        publishTime: string;
        googleMapsUri?: string;
        authorAttribution?: { displayName: string; photoUri?: string };
      }>;
    };

    return {
      rating: data.rating ?? 0,
      total: data.userRatingCount ?? 0,
      mapsUri:
        data.googleMapsUri ??
        `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
      fetchedAt: new Date().toISOString(),
      reviews: (data.reviews ?? []).map((r) => ({
        authorName: r.authorAttribution?.displayName ?? "Google reviewer",
        authorPhoto: r.authorAttribution?.photoUri,
        rating: r.rating,
        relativeTime: r.relativePublishTimeDescription,
        text: r.text?.text ?? r.originalText?.text ?? "",
        publishTime: r.publishTime,
        uri: r.googleMapsUri,
      })),
    };
  },
);
