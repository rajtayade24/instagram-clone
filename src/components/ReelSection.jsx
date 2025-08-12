import React, { useRef, useEffect, useState } from 'react';
import CommentSection from './CommentSection';
import video1 from '../videos/Sundar-pichai-motivation.mp4';
import video2 from '../videos/sandeep-maheshwari-motivation.mp4';
import video3 from '../videos/harshvardhan-Jain-motivation.mp4';
import commentIcon from '../svgs/ig-comment.svg';
import saveIconDefault from '../svgs/ig-save.svg';
import saveIconActive from '../svgs/ig-save-active.svg';
import heartIconDefault from '../svgs/ig-heart.svg';
import heartIconActive from '../svgs/ig-heart-active.svg';
import shareIcon from '../svgs/ig-share.svg';
import emogi from '../svgs/ig-emogi.svg';
import sound from '../svgs/ig-sound.svg';
import soundMuted from '../svgs/ig-sound-muted.svg';
import profileImage from "../images/user-profile.jpg"
import image1 from "../images/arjit.jpg";

function ReelSection() {
  const videos = [
    {
      username: 'rajtayade18',
      name: 'Raj Tayade',
      video: video1,
      likes: 11204,
      caption: 'Sundar Pichai Motivational Video',
    },
    {
      username: 'rajtayade18',
      name: 'Raj Tayade',
      video: video2,
      likes: 45641,
      caption: 'Sandeep Maheshwari Motivational Video',
    },
    {
      username: 'rajtayade18',
      name: 'Raj Tayade',
      video: video3,
      likes: 10245,
      caption: 'Harshvardhan Jain Motivational Video',
    },
    // more obj
  ];


  const [saved, setSaved] = useState(Array(videos.length).fill(false));
  const toggleSave = (index) => {
    setSaved((prev) => {
      // write function definition in arrow function
      const newSaved = [...prev];
      newSaved[index] = !newSaved[index];
      return newSaved;
    });
  };

  const [hearted, setHeart] = useState(Array(videos.length).fill(false));
  const [likes, setLikes] = useState(videos.map(v => v.likes));
  const [animate, setAnimate] = useState(Array(videos.length).fill(false));
  const toggleHeart = (index) => {
    setHeart((prev) => {
      // write function definition in arrow function
      const newHeart = [...prev];
      newHeart[index] = !newHeart[index];
      return newHeart;
    });
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] += hearted[index] ? -1 : 1; // unlike or like
      return newLikes;
    });

    setAnimate((prev) => {
      const newAnim = [...prev];
      newAnim[index] = true;
      return newAnim;
    });

    // Reset animation after 200ms
    setTimeout(() => {
      setAnimate((prev) => {
        const newAnim = [...prev];
        newAnim[index] = false;
        return newAnim;
      });
    }, 200);
  };

  const [commented, setComment] = useState(Array(videos.length).fill(false));
  const handleComment = (index) => {
    setComment((prev) => {
      const newComment = [...prev];
      newComment[index] = !newComment[index];
      return newComment;
    })
  }

  const [sounded, setSound] = useState(false);

  const handleSound = (index) => {
    setSound(prev => !prev);
  };

  const [activeIndex, setActiveIndex] = useState(null); // currently active video index
  const videoRefs = useRef([]);
  // Intersection observer: sets activeIndex only
  useEffect(() => {
    if (!videoRefs.current.length) return;

    const observer = new IntersectionObserver((entries) => {
      let best = null;
      entries.forEach(e => {
        if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
      });

      if (best && best.intersectionRatio >= 0.5) {
        const idx = Number(best.target.dataset.index);
        setActiveIndex(idx);
      } else {
        setActiveIndex(null);
      }
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    videoRefs.current.forEach(v => v && observer.observe(v));

    return () => observer.disconnect();
  }, [videos.length]);

  // Play/pause & mute logic
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === activeIndex) {
        video.play().catch(() => { });
      } else {
        video.pause();
      }
      video.muted = !sounded; // all follow the same mute state
    });
  }, [activeIndex, sounded]);

  // Initial mute for first video on mount
  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].muted = true;
    }
  }, []);


  return (
    <>
      <div className="reel-section px-12 max-[600px]:p-0">
        <div className="cards-cont max-w-140 pb-3 mb-4 my-8 max-[600px]:m-0">

          {videos.map((item, index) => (
            <React.Fragment key={index}>
              <div className="card border-b-2 border-gray-300 pb-5 mb-5">
                {/* profile */}
                <div className="profiles flex justify-between items-center my-2">
                  <div className="flex gap-2">
                    <span className='cursor-pointer'>
                      <img className="h-[45px] w-[45px] rounded-full" alt="user profile" src={profileImage} />
                    </span>
                    <div className="flex flex-col">
                      <div className="username cursor-pointer">{item.username}</div>
                      <div className="name text-gray-500 cursor-pointer">{item.name}</div>
                    </div>
                  </div>
                  <button className='cursor-pointer'>. . .</button>
                </div>

                {/* video */}
                <div className="bg-black relative">
                  <video
                    ref={el => videoRefs.current[index] = el}
                    data-index={index}
                    className="max-h-170 mx-auto"
                    loop
                    playsInline
                    autoPlay={index === 0}
                    muted={!sounded}
                    src={item.video}
                  >
                  </video>
                  <span
                    className='absolute sound w-10 h-10 bottom-5 right-5 rounded-full bg-gray-700 flex justify-center items-center p-2.5'
                    onClick={() => handleSound(index)}
                  >
                    <img className='invert h-full' src={sounded ? sound : soundMuted} alt="" />
                  </span>
                </div>

                {/* action icons */}
                <div className="flex justify-between items-center my-2">
                  <div className="flex gap-6">
                    <div onClick={() => toggleHeart(index)}>
                      <img
                        className={`cursor-pointer transition-transform duration-200
                     ${animate[index] ? "scale-150" : "scale-100"}
                      hover:opacity-50`}
                        src={hearted[index] ? heartIconActive : heartIconDefault} alt="like"
                      />
                    </div>
                    <div onClick={() => handleComment(index)}>
                      <img className='cursor-pointer hover:opacity-50' src={commentIcon} alt="comment" />
                    </div>
                    <div>
                      <img className='cursor-pointer hover:opacity-50' src={shareIcon} alt="share" />
                    </div>
                  </div>
                  <div onClick={() => toggleSave(index)}>
                    <img className='cursor-pointer hover:opacity-50' src={saved[index] ? saveIconActive : saveIconDefault} alt="save" />
                  </div>
                </div>

                {/* likes and caption */}
                <div>
                  <div className='font-[500]'>{likes[index]} likes</div>
                  <p className="my-2">{item.caption}</p>
                  <div className="add-comments">view 1 comment</div>
                  <input className="w-[100%] outline-none" type="text" placeholder="Add a comment..." autoComplete="off" />
                </div>
              </div>

              {commented[index] && ( //In JavaScript, A && B means: If A is truthy → return B.
                <CommentSection video={item.video} emogi={emogi} username={videos[index].username} handleComment={handleComment} index={index} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div >

    </>
  );
}

export default ReelSection;