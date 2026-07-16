interface CategoryHeroProps {
  title: string;
  subtitle: string;
  description: string;
  totalProperties?: number;
}

export default function CategoryHero({
  title,
  subtitle,
  description,
  totalProperties,
}: CategoryHeroProps) {
  return (
    <section className="border-b border-white/10 bg-[#111315]">

      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Subtitle */}

        <p className="mb-6 uppercase tracking-[0.35em] text-lime-400">

          {subtitle}

        </p>

        {/* Title */}

        <h1
          className="
            max-w-4xl
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-6xl
          "
        >

          {title}

        </h1>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-gray-400
          "
        >

          {description}

        </p>

        {/* Property Counter */}

        {totalProperties !== undefined && (

          <div
            className="
              mt-10
              inline-flex
              items-center
              rounded-full
              border
              border-lime-400/20
              bg-[#111315]
              px-6
              py-3
              font-semibold
              text-lime-400
            "
          >

            {totalProperties} Properties Available

          </div>

        )}

      </div>

    </section>
  );
}