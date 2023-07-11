import { PostFeedProps } from "./PostFeed";
import likeIcon from '../assets/like.svg'
import commentIcon from '../assets/comment.svg'
import statsIcon from '../assets/chart.svg'


export const Article = ({ author, content, title, date, coverPhoto }: PostFeedProps) => {

  return (
    <>
      <div className="my-2 border shadow-md p-5">
        <div className="flex gap-3 items-center">
          {<img
            src={author.profilePhoto}
            alt="profile photo"
            className="w-[60px] h-[60px] border rounded-full"
          />}
          <div className="">
            <h3 className="font-semibold text-lg">{author.name}</h3>
            <h6 className="text-gray-700 text-xs">Software Developer</h6>
          </div>
        </div>
        <div className="md:w-[90%] mt-3 mx-auto">

        
        <div className="mt-2 md:mt-4">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <span className="text-gray-700 text-xs">{date}</span>
        </div>
        <div
          className="my-2 w-fulltext-sm prose prose-headings:font-normal prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <img src={coverPhoto} alt="" className={["w-[100%]  ", [coverPhoto.length > 0 ? "min-h-[200px]" : null ]].join()} />
        </div>
        <ul className="mt-4 flex items-center justify-between md:justify-around px-6 py-4">
        <li><img src={commentIcon} alt='comment icon' className="w-[30px] h-[30px] "/></li>
        <li><img src={likeIcon} alt='like icon' className="w-[25px] h-[25px] "/></li>
        <li><img src={statsIcon} alt='analytics icon' className="w-[30px] h-[30px] "/></li>

        </ul>
      </div>
    </>
  );
};
