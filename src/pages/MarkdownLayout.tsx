import { useEffect, useRef, useState } from "react";
import { useCreatePost } from "../hooks/useCreatePost";
import { Editor } from "../components/Markdown/Editor";
import Preview from "../components/Markdown/Preview";
import DOMPurify from "dompurify";
import { marked } from "marked";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

export const MarkdownLayout = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState<File | undefined>(undefined);
  const [previewCoverPhoto, setPreviewCoverPhoto] = useState("");
  const { createPost } = useCreatePost();
  const getStoredMarkdown = localStorage.getItem("New Post");
  const [markdownText, setMarkdownText] = useState(
    getStoredMarkdown ? getStoredMarkdown : ""
  );
  let temp: string
  const content = DOMPurify.sanitize(marked.parse(markdownText));
  const storeMarkdown = (markdownText: string) => {
    setMarkdownText(markdownText);
    setTitle(title);
    localStorage.setItem("New Title", title);
    localStorage.setItem("New Post", markdownText);
  };
  const publish = () => {
    createPost({ title, content, coverPhoto });
    setMarkdownText("# New post");
    setPreviewCoverPhoto("")
    setTitle("")
    localStorage.removeItem("New Title");
    localStorage.removeItem("New Post");
    localStorage.removeItem("preview-img")
    URL.revokeObjectURL(temp);
  };
  useEffect(()=>{
    localStorage.setItem("preview-img", previewCoverPhoto)
  }, [previewCoverPhoto])
  useEffect(() => {
    if (coverPhoto !== undefined) {
        // localStorage.setItem("coverPhoto", coverPhoto)
    temp = URL.createObjectURL(coverPhoto);
      setPreviewCoverPhoto(temp);
    }
  }, [coverPhoto]);

  return (
    <>
      <Header />
      <div className=" w-[90%] mx-auto">
        <div className="">
          <label htmlFor="title"></label>
          <textarea
            className="w-full overflow-box mt-8 block font-semibold border-b-2 border-gray-200 h-[30px] resize-none px-2 text-base outline-none mb-4 text-gray-700"
            name="title"
            id="title"
            placeholder="Enter Title here............."
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>
        <div className="flex h-[250px] justify-center items-center my-4 border-dashed border-2 border-gray-700 bg-[#e1e1e1]">
          {previewCoverPhoto ? (
            <div className="w-full h-full sticky overflow-scroll preview  ">
                <label htmlFor="previewImg" className="sticky z-50 left-[90%] top-[0%]  bg-white/30 text-white font-semibold mix-blend-lighten backdrop-blur-sm border-white/30 p-2">Change photo
                <input
                id="previewImg"
              type="file"
              accept="image/jpg, image/jpeg, imgae/png"
              onChange={(e) => setCoverPhoto(e.target.files?.[0])}
              style={{display: "none" }}
            />
                </label>
                <img src={previewCoverPhoto} alt="Preview" className="w-full absolute top-0" />
            </div>
          ) : (
            <label htmlFor="previewImg" className=" border bg-white border-white p-2">browse files
            <input
                id="previewImg"
              type="file"
              accept="image/jpg, image/jpeg, imgae/png"
              onChange={(e) => setCoverPhoto(e.target.files?.[0])}
              style={{display: "none" }}
            />
            </label>
          )}
        </div>
        <div className="w-full lg:h-[700px] grid grid-cols-1 lg:grid-cols-2 bg-gray-950">
          <div className="text-white text-sm p-2 shadow z-50 shadow-gray-900 flex gap-3">
            <button onClick={()=>navigate('edit-new-post')} className={[location.pathname === "/edit-new-post"? "text-base": " text-gray-600"].join() } >Edit</button>
            <button onClick={()=>navigate('preview-new-post')} className={[location.pathname === "/preview-new-post"? "text-base": " text-gray-600"].join() } >Preview</button>
          </div>
          { location.pathname === "/edit-new-post"?
          <Editor markdownText={markdownText} setMarkdownText={storeMarkdown} />
          :<Preview markdownText={markdownText} />}
        </div>

        <div className="flex mt-2 md:justify-end gap-4 py-4">
          <button
            onClick={() => storeMarkdown}
            className="w-1/2 md:w-[150px] font-semibold rounded-md relative p-2 border border-green-500 bg-green-500"
          >
            Save draft
          </button>
          <button
            onClick={publish}
            className="w-1/2 md:w-[150px] font-semibold rounded-md relative p-2 border border-green-500 bg-green-500"
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
};
