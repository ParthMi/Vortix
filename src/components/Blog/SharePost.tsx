'use client'
import { useEffect } from "react";
import { RiShare2Line } from "react-icons/ri";
import { RWebShare } from "react-web-share";

const SharePost = ({ postTitle, postText }) => {
  const postUrl = window.location.href; // Automatically get the current page URL

  return (
    <div>
     <RWebShare
        data={{
         text: `${postText}`,
         url: `${postUrl}`,
        title: `${postTitle}`,
        }}
      >
        <button className="ease-in-up shadow-btn hover:shadow-btn-hover  rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90  md:px-9 lg:px-6 xl:px-9 !flex gap-2 items-center">Share <RiShare2Line size={25}/></button>
      </RWebShare>
    </div>
  );
};

export default SharePost;
