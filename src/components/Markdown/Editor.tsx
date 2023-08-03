

;

interface EditorProps {
  markdownText: string
  setMarkdownText: (markdownText: string) => void
}

export const Editor = ({markdownText, setMarkdownText}: EditorProps)=>{
     


  return (
    <div className=" lg:h-full h-[350px] bg-gray-950 w-full relative  ">

       <textarea className="overflow-box w-full h-[100%] resize-none outline-none p-3 bg-gray-950 text-gray-200 overscroll-y-auto overflow-y-scroll" name="" id="" value={markdownText} placeholder="# enter markdown to create post......." onChange={(e)=> setMarkdownText(e.target.value)}/>


    </div>
  )
}