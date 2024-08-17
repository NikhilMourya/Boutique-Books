import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { blogs } from '../assets/data/blogs';

export default function BlogDetailsPage() {
  const { blogSlug } = useParams();
  const blog = blogs.filter((obj) => obj.title.includes(blogSlug))[0];

  if (!blog) {
    return <Navigate to={'/404'} replace />;
  }

  return (
    <main className="flex flex-col gap-y-24 py-24 pt-36">
      <section className="my-5 container mx-auto grid gap-y-10 md:gap-x-20 lg:px-16 items-center">
        <div className="flex flex-col text-left mb-16 rounded-md overflow-hidden">
          <img src={blog.image} alt={blog.title} className="" />
          <div className="px-5 py-5 flex flex-col gap-y-5">
            <h2 className="text-2xl line-clamp-2">{blog.title}</h2>
            <p className="line-clamp-3">{blog.introduction}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
