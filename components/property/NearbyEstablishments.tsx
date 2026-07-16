interface NearbyEstablishmentsProps {
  establishments?: string[];
}

export default function NearbyEstablishments({
  establishments = [],
}: NearbyEstablishmentsProps) {
  const defaultPlaces = [
    "Public Market",
    "Municipal Hall",
    "Hospital",
    "Elementary School",
    "High School",
    "Church",
    "Gas Station",
    "Beach Resort",
  ];

  const places =
    establishments.length > 0
      ? establishments
      : defaultPlaces;

  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">

      <div className="mb-8">

        <p className="uppercase tracking-[0.3em] text-lime-400">
          Nearby Places
        </p>

        <h2 className="mt-3 text-3xl font-black">
          Nearby Establishments
        </h2>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {places.map((place, index) => (

          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-lime-400/40"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400/20 text-lime-400">

              📍

            </div>

            <span className="text-base">

              {place}

            </span>

          </div>

        ))}

      </div>

    </section>
  );
}