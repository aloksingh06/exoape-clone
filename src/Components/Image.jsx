import React from 'react'

function Image() {
  return (
    <div className='h-[150vh] w-full  flex justify-center items-center overflow-hidden  '>
         <div className='relative w-[40%] sm:w-[25%] sm:h-[90vh]'>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
            <div className='w-48 sm:w-[50vh] sm:top-64 aspect-video bg-red-300 absolute top-32 -left-2/3'>
            <video autoPlay loop muted  className='w-full h-full scale-[1.1] ' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video> </div>
            <div className='w-20 h-32 sm:w-[24vh] sm:h-[36vh] absolute bg-red-200 top-5 -right-24'>
                <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
            </div>
            <div className='w-48 aspect-video sm:w-[50vh] sm:-bottom-40 sm:-left-[48vh] bg-red-300 absolute -bottom-12  -left-48'>
                <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" className='w-full h-full object-cover' alt="" /> </div>

            <div className='w-40 h-40 sm:w-[25vw] sm:h-[25vh] sm:-right-[24vw] absolute bg-red-200 -bottom-32 -right-24'>
                <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
            </div>
         </div>
    </div>
  )
}

export default Image