import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-32 sm:py-52 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-full bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-primary/90 transition-all"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
