"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function DestinationVideo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOnClose = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group relative max-h-[560px] max-w-[1000px] cursor-pointer rounded-[20px] shadow-lg"
      >
        <Image
          src="/image-4.jpg"
          alt="destination"
          width={1000}
          height={600}
          className="aspect-video rounded-[20px] border-[5px] border-primary/20 object-cover object-top"
        />
        <Image
          src={"/playvideo.svg"}
          alt="playvideo"
          width={100}
          height={100}
          className="absolute inset-0 m-auto transition-all duration-300 ease-in-out group-hover:scale-110"
        />
        <div
          className={cn(
            "fixed inset-0 z-[1000] flex h-full w-full items-center justify-center bg-black/80",
            isOpen ? "flex" : "hidden",
          )}
        >
          <div
            onClick={handleOnClose}
            className="absolute right-5 top-5 rounded-full bg-white p-3"
          >
            <X className="text-primary" />
          </div>
          <video
            ref={videoRef}
            src="/destination-video.mp4"
            controls
            width={1200}
            height={1000}
            className="aspect-video rounded-[20px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
