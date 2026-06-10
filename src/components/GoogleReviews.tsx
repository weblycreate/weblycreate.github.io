import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Star, ExternalLink, RefreshCw } from "lucide-react";
import { getReviews, type ReviewsPayload } from "@/lib/reviews.functions";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? "fill-[oklch(0.78_0.16_85)] text-[oklch(0.78_0.16_85)]" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const fetchReviews = useServerFn(getReviews);
  const { data, isLoading, isFetching } = useQuery<ReviewsPayload>({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    refetchInterval: 15_000,
    refetchIntervalInBackground: false,
    staleTime: 10_000,
  });

  return (
    <section className="container-page py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> What people are saying</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Real reviews, refreshed every 15 seconds
          </h2>
          <p className="mt-3 text-muted-foreground">
            Live from Google Maps — updated automatically while you browse.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="card-soft flex items-center gap-3 px-5 py-3">
            <div className="text-3xl font-display font-bold text-primary">
              {data?.rating?.toFixed(1) ?? "—"}
            </div>
            <div>
              <Stars rating={data?.rating ?? 0} />
              <div className="text-xs text-muted-foreground mt-0.5">
                {data?.total ?? 0} Google reviews
              </div>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-primary ${isFetching ? "opacity-100" : "opacity-60"}`}
            title={data?.fetchedAt ? `Last refreshed ${new Date(data.fetchedAt).toLocaleTimeString()}` : "Live"}
          >
            <RefreshCw className={`h-3 w-3 ${isFetching ? "animate-spin" : ""}`} />
            Live
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && !data
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card-soft h-56 animate-pulse" />
            ))
          : data?.reviews.slice(0, 6).map((r, idx) => (
              <a
                key={idx}
                href={r.uri ?? data.mapsUri}
                target="_blank"
                rel="noreferrer"
                className="card-soft group flex flex-col p-6 transition hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  {r.authorPhoto ? (
                    <img
                      src={r.authorPhoto}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-secondary grid place-items-center font-display font-bold text-primary">
                      {r.authorName.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-semibold text-sm truncate">{r.authorName}</div>
                    <div className="text-xs text-muted-foreground">{r.relativeTime}</div>
                  </div>
                  <Stars rating={r.rating} />
                </div>
                <p className="mt-4 text-sm text-foreground/80 line-clamp-5">{r.text}</p>
                <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs text-primary opacity-0 group-hover:opacity-100 transition">
                  Read on Google <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
      </div>

      <div className="mt-8 text-center">
        <a href={data?.mapsUri} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
          See all reviews on Google <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
