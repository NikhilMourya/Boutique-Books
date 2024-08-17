import React from 'react';
import { blogs } from '../assets/data/blogs';
import H1 from '../components/H1';

export default function BlogPage() {
  return (
    <main className="flex flex-col gap-y-24 py-24 pt-36">
      <H1>Blogs</H1>

      <section className="my-5 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 md:gap-x-24 lg:px-16 items-center">
        {blogs.map((blog) => {
          return (
            <div className="flex flex-col gap-5 mb-16">
              <img src={blog.image} alt={blog.title} className="rounded-md" />
              <h2 className="text-2xl line-clamp-2">{blog.title}</h2>
              <p className="line-clamp-3">{blog.introduction}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
