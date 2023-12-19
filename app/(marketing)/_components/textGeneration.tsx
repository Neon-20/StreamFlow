"use client";
import { useEffect, useState } from "react";
import { animate, motion, stagger, useAnimate } from "framer-motion";

const words = `Meri Ek taang nakli hai, Mai hockey ka bohot bada khiladi tha. Ek din Uday bhai ko meri kisi baat pe gussa aagaya aur mere he hockey se meri taang ke do tukde kar diye..... Lekin dil ke bohot ache hai, Fauran mujhe hospital le gaye aur ye nakli taang lagwayi.

-- bas bas bas ballu
`;

const wordsArray = words.split(" ");

export const TextGenerateEffect = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word) => {
          return (
            <motion.span className="text-white opacity-0">{word} </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="my-4 p-4 h-[30rem] md:h-[20rem] overflow-y-auto w-full bg-black/[0.5] backdrop-blur-sm border border-neutral-800 max-w-2xl mx-auto rounded-md">
      <Icons />
      <div className="mt-6">
        <div
          className="text-white text-2xl leading-snug tracking-wide"
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

const Icons = () => {
  return (
    <div className="flex space-x-2 items-center">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-gray-300" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
};



