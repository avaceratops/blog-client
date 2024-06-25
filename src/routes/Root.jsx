import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="mb-4 text-xl font-semibold">
            ava.dev <span className="text-gray-500">/</span> blog
          </h1>
        </Link>
      </header>
      <main className="mx-auto my-12 max-w-screen-md">
        <Outlet />
      </main>
    </>
  );
}
