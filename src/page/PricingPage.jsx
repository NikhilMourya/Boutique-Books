const pricingCarts = [
  {
    title: 'Essential Plan',
    desc: 'For startups in the pre-revenue stage, just starting out.',
    montlyRate: '$39,600',
    yearlyRate: '$499',
  },
  {
    title: 'Premium Plan',
    desc: 'For companies with refined needs, reflecting their high value.',
    montlyRate: '$39,600',
    yearlyRate: '$499',
  },
  {
    title: 'Elite Plan',
    desc: 'Craft a plan precisely suited to your business needs.',
    customPricing: 'Custom Pricing',
  },
];
export default function PricingPage() {
  return (
    <main className="flex flex-col gap-y-16 py-16">
      <section className="flex flex-col items-center">
        <h2 className="text-5xl text-center">
          Transparent Pricing for Hassle-Free Accounting Solutions
        </h2>
      </section>

      <section className="px-16 sm:min-h-[400px] grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 justify-evenly">
        {pricingCarts.map(
          ({ title, desc, montlyRate, yearlyRate, customPricing }, idx) => (
            <div
              className="card grid items-center text-left gap-y-0 shadow-lg shadow-primary rounded-3xl"
              key={title}
            >
              <h3 className="font-semibold text-2xl">{title}</h3>
              <p className={idx == 2 && 'self-start'}>{desc}</p>

              {montlyRate && (
                <p>
                  <span className="font-bold">{montlyRate}</span> in monthly
                  expenses
                </p>
              )}

              {yearlyRate && (
                <p>
                  <span className="text-4xl font-bold">{yearlyRate}</span>/mo
                  billed annually
                </p>
              )}

              {customPricing && (
                <p className="self-end">
                  <span className="text-2xl font-bold">{customPricing}</span>
                </p>
              )}
              <button className="bg-primary w-full self-end text-2xl py-2 rounded-lg">
                Contact Us
              </button>
            </div>
          )
        )}
      </section>
    </main>
  );
}
