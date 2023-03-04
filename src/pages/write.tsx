import { type NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useForm } from "react-hook-form";

const Write: NextPage = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const [description, setDescription] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
    watch,
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      data: "",
    });
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    const words = description.split(" ");

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [description]);

  const handleQuillChange = (value: string) => {
    setValue("content", value);
  };

  useEffect(() => {
    register("content", { required: true });
  }, [register]);

  const handleClick = (data: any) => {
    setDescription("");
    console.log(data);
  };

  const content = watch("content");

  return (
    <Layout>
      <Navbar />
      <form method="POST" onSubmit={handleSubmit(handleClick)}>
        <input
          type="text"
          className="w-full py-1 text-lg outline-none md:text-5xl"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors?.title && (
          <span className="text-red-500">This field is required</span>
        )}
        <div className="my-2 flex flex-col gap-4">
          <div>
            <label htmlFor="description" className="mr-2 text-2xl ">
              Description
            </label>
            <span>{`(Write at least 50 words)`}</span>
          </div>

          <textarea
            id="description"
            className="rounded border px-2 py-2 focus:outline-none"
            {...register("description", {
              required: true,
              validate: {
                minLength: (value) => {
                  const words = value.split(" ");
                  let wordCount = 0;
                  words.forEach((word) => {
                    if (word.trim() !== "") {
                      wordCount++;
                    }
                  });
                  return wordCount >= 50;
                },
              },
            })}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors?.description?.type === "required" && (
            <span className="text-red-500">This field is required</span>
          )}
          {errors?.description?.type === "minLength" && (
            <span className="text-red-500">
              Description must be at least 50 words
            </span>
          )}

          <div className="text-right">
            <span>{`Words: `}</span>
            <span>{wordCount}</span>
            <span>{`/50`}</span>
          </div>
        </div>

        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          className="mb-12 h-[calc(100vh-36rem)] "
          onChange={handleQuillChange}
          value={content}
        />
        {errors?.content && (
          <p className="text-red-500">This field is required</p>
        )}
        <button
          className="mt-4 rounded bg-button py-2 px-4 font-bold text-white hover:bg-buttonHover"
          type="submit"
        >
          Publish
        </button>
      </form>
    </Layout>
  );
};
export default Write;
