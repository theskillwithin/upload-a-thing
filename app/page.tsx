"use client";

import { UploadButton, UploadDropzone } from "@/src/utils/uploadthing";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}

      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // go to the page with the uploaded file
          router.push(`/file/${res[0].key}`);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      <a
        href="https://github.com/theskillwithin/upload-a-thing"
        className="mt-8 hover:text-blue-700 text-blue-500"
      >
        https://github.com/theskillwithin/upload-a-thing
      </a>
    </main>
  );
}
