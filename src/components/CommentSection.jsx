import React, { useState } from 'react'
import image1 from "../images/arjit.jpg";

export default function CommentSection(props) {
  return (
    <div className='comment-section fixed w-[100vw] h-[100vh] top-0 right-0 z-50 flex flex-wrap justify-center items-center bg-black/50'>
      <div className='comments-container w-auto h-[calc(100%-40px)] max-w-[calc(100% - 120px)] flex justify-center items-center opacity-100 '>

        <div className='relative left flex-1 h-[100%] w-[fit-content] min-w-0 bg-black flex items-center max-[660px]:hidden'>
          <video
            className="w-full h-auto max-w-[450px] max-h-[100%] mx-auto my-auto"
            loop autoPlay
            muted
            src={props.video}>
          </video>
          <span
            className='absolute sound w-10 h-10 bottom-5 right-5 rounded-full bg-gray-700 flex justify-center items-center p-2.5'
            onClick={() => props.handleSound(props.index)}
          >
            <img className='invert h-full' src={props.sound} alt="" />
          </span>
        </div>

        <div className="right bg-white h-[100%] w-96 border-0 rounded-2xl max-[450px]:w-[95%]">
          <div className="comments-cont overflow-y-scroll scrollbar-hide border-b-2 border-gray-400 h-[calc(100%-48px)]">
            <div className="comments px-4 py-4">
              <div className='flex gap-4'>
                <span className="rounded-full">
                  <img
                    className="rounded-full h-12 w-12 outline-4 outline-amber-700 outline-offset-3"
                    src={image1}
                    alt="story"
                  />
                </span>
                <div>{props.username}fdlskfdskldlwf</div>
              </div>
            </div>
            <div className="comments px-4 py-4">
              <div className='flex gap-4'>
                <span className="rounded-full">
                  <img
                    className="rounded-full h-12 w-12 outline-4 outline-amber-700 outline-offset-3"
                    src={image1}
                    alt="story"
                  />
                </span>
                <div>{props.username}fdlskfdskldlwf</div>
              </div>
            </div>
            <div className="comments px-4 py-4">
              <div className='flex gap-4'>
                <span className="rounded-full">
                  <img
                    className="rounded-full h-12 w-12 outline-4 outline-amber-700 outline-offset-3"
                    src={image1}
                    alt="story"
                  />
                </span>
                <div>{props.username}fdlskfdskldlwf</div>
              </div>
            </div>

          </div>
          <div className='h-12 flex justify-between items-center gap-4'>
            <span className='p-4'>
              <img className="flex justify-center items-center" src={props.emogi} alt="" />
            </span>
            <div className='w-[100%]'>
              <input className='' type="text" placeholder='Add a comment' />
            </div>
            <div className='post p-4 text-blue-500 disabled:text-blue-400 opacity-50'>Post</div>
          </div>
        </div>

      </div>
      <div
        className='absolute top-6 right-6 text-5xl cursor-pointer '
        onClick={() => props.handleComment(props.index)}>
        <span>&times;</span>
      </div>

    </div>

  )
}