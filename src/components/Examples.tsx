"use client";
import { useState } from "react";
import ChatComponent from "./ChatComponent";
import Image from "next/image";
const examples = [
  {
    name: "Q&A on documents",
    title: "Ask questions about an a16z blog",
    imageUrl:
      "https://a16z.com/wp-content/uploads/2021/02/Default-Website-FeatureImage.jpg",
  },
];

export default function Examples() {
  const [QAModalOpen, setQAModalOpen] = useState(false);
  const [TextToImageModalOpen, setTextToImageModalOpen] = useState(false);
  return (
    <div>
      <ChatComponent open={true} setOpen={setQAModalOpen} />
      <ul
        role="list"
        className="mt-14 m-auto max-w-3xl grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {/* {examples.map((example, i) => (
          <li
            key={example.name}
            onClick={() => setQAModalOpen(true)}
            className="col-span-1 flex flex-col rounded-lg bg-slate-800  text-center shadow relative ring-1 ring-white/10 cursor-pointer hover:ring-sky-300/70 transition"
          >
            <div className="absolute -bottom-px left-10 right-10 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0"></div>
            <div className="flex flex-1 flex-col p-8">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="flex-shrink-0 object-cover w-32 h-32 mx-auto rounded-full"
                src={example.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-white">
                {example.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only"></dt>
                <dd className="text-sm text-slate-400">{example.title}</dd>
              </dl>
            </div>
          </li>
        ))} */}
      </ul>
    </div>
  );
}