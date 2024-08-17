import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../assets/data/blogs';
import H1 from '../components/H1';

export default function BlogPage() {
  return (
    <main className="flex flex-col gap-y-24 py-24 pt-36">
      <H1>Blogs</H1>

      <section className="my-5 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 md:gap-x-20 lg:px-16 items-center">
        {blogs.map((blog) => {
          return (
            <Link
              to={`/blogs/${blog.title}`}
              className="flex flex-col text-left mb-16 rounded-md overflow-hidden shadow-md border border-primary/40 shadow-primary min-h-[400px]"
            >
              <img src={blog.image} alt={blog.title} className="" />
              <div className="px-5 py-5 flex flex-col gap-y-5">
                <h2 className="text-2xl line-clamp-2">{blog.title}</h2>
                <p className="line-clamp-3">{blog.introduction}</p>

                <div className="grid place-items-end">
                  <Link
                    className="px-5 py-1 border-2 bg-primary hover:bg-primary/90 transition-all border-primary rounded-full"
                    to={`/blogs/${blog.title}`}
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
