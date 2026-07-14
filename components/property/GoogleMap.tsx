interface GoogleMapProps {
  latitude: number;
  longitude: number;
  title: string;
}

export default function GoogleMap({
  latitude,
  longitude,
  title,
}: GoogleMapProps) {
  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">

      <div className="mb-8">

        <p className="uppercase tracking-[0.3em] text-lime-400">
          Property Location
        </p>

        <h2 className="mt-3 text-3xl font-black">
          Google Map
        </h2>

      </div>

      <div className="overflow-hidden rounded-2xl border border-lime-400/20">

        <iframe
          title={title}
          width="100%"
          height="500"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
          className="w-full"
        />

      </div>

      <div className="mt-6 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">

        <p className="text-gray-300">
          The map pin represents the approximate location of the property.
          An exact site location will be provided during a scheduled site viewing.
        </p>

      </div>

    </section>
  );
}