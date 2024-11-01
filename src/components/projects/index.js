import React from "react";

const posts = [
  {
    id: 1,
    title: "Mindmap Builder",
    description:
      "A project planning tool that allows users to create, visualize, and manage mindmaps with ease. Features real time synchronization by saving and fetching all your projects and changes instantly. Auth0 is used ensuring secure login, efficient user management.",
    link: "https://mindmapbuilder.vercel.app/",
    tech: "ReactJS, FastAPI, MongoDB",
  },
  {
    id: 2,
    title: "Secure EHR 2.0",
    description:
      "A blockchain-powered tamper-proof application designed to help medical professionals securely store and share patients’ electronic health records with decentralized storage using IPFS for enhanced security and privacy.",
    link: "https://ehr-2.netlify.app/",
    tech: "Angular, Django, Blockchain, SQLite",
  },
  {
    id: 3,
    title: "BookMySlot",
    description:
      "An intuitive real-time slot booking platform enabling users to seamlessly book classes, join waitlists, and manage cancellations. Implemented session handling with cookies to manage user bookings without the need for login or authentication",
    link: "https://bookslots.vercel.app/",
    tech: "ReactJS, FastAPI, MongoDB",
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Checkout all the projects I built from scratch
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Personal projects I built end-to-end
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:mt-16 lg:grid lg:grid-cols-3 lg:grid-rows-2">
          {posts.map((post) => (
            <div className="relative max-lg:row-start-1" key={post.id}>
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {post.title}{" "}
                    <a
                      href={post.link}
                      className="mx-2 relative z-10 rounded-full bg-black py-1 font-small text-sm text-white p-2 hover:bg-gray-100 hover:text-gray-950"
                      target="_blank"
                    >
                      live-link
                    </a>
                  </p>
                  <div className="flex items-center gap-x-4 text-xs mt-2">
                    <p className="text-gray-500">{post.tech}</p>
                  </div>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {post.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
