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
    <section className="relative overflow-hidden border-b border-lime-400/10 bg-gradient-to-b from-[#081300] via-[#050b00] to-black">


      <div className="mx-auto max-w-7xl px-6 py-24">


        <p className="mb-5 uppercase tracking-[0.35em] text-lime-400">

          {subtitle}

        </p>


        <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl">

          {title}

        </h1>


        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">

          {description}

        </p>


        {totalProperties !== undefined && (

          <div className="mt-10 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-6 py-3 text-lime-400">

            {totalProperties} Properties Available

          </div>

        )}


      </div>


    </section>
  );
}