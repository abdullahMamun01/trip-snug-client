"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { useState } from "react";

import { Link, LinkIcon, Share2, ShareIcon } from "lucide-react";
import { usePathname } from "next/navigation";
interface IProps{
  title: string
}
const ShareButton = ({title} : IProps)  => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
 
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
 

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <button className="flex items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300 md:p-3 ">
          <Share2 className="h-4 w-4 text-blue-500" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="flex w-full max-w-md flex-col gap-2 px-5 py-7">
        <div className="flex items-center justify-between border-b p-4 w-full">
          <h2 className="text-lg font-semibold">Share this hotel</h2>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <FacebookShareButton
              url={currentUrl}
              title={title}
              hashtag="#nextui"
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </div>
          <div>
            <TwitterShareButton
              url={currentUrl}
              title={title}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </div>
          <div>
            <LinkedinShareButton
              url={currentUrl}
              title={title}

            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </div>
        </div>

        <div className="block">
          <div className="mt-4">
            <div className="mb-2 text-sm font-medium text-gray-700">
              Or copy link
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentUrl}
                readOnly
                className="flex-1 rounded-lg border bg-gray-50 px-3 py-2 text-sm text-gray-600"
              />
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200"
              >
                <LinkIcon className="h-4 w-4" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
