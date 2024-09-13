import React from 'react'
import YouTube from 'react-youtube'
import ReactMarkdown from 'react-markdown';

const opts = {
    height: '315', // Decreased height for better mobile view
    width: '100%', // Responsive width
    playerVars: {
        autoplay: 0,
    },
};

function ChapterContent({ chapter, content }) {
    console.log(chapter);

    return (
        <div className='p-4 md:p-10'>
            <h2 className='font-medium text-xl md:text-2xl'>{chapter?.name}</h2>
            <p className='text-gray-500 text-sm md:text-base'>{chapter?.about}</p>
            
            {/* Video */}
            <div className='flex justify-center my-6'>
                <div className='w-full md:w-2/3'>
                    <YouTube
                        videoId={content?.videoId}
                        opts={opts}
                    />
                </div>
            </div>

            <div>
                {content?.content?.map((item, index) => (
                    <div key={index} className='p-4 md:p-5 bg-purple-50 shadow-sm mb-3 rounded-lg'>
                        <h2 className='font-medium text-lg md:text-2xl'>{item.title}</h2>
                        <ReactMarkdown className='text-sm md:text-lg text-black leading-7 md:leading-9'>
                            {item?.description}
                        </ReactMarkdown>
                        {item.codeExample && 
                            <div className='p-4 bg-black text-white rounded-md mt-3'>
                                <pre className="overflow-auto max-w-full whitespace-pre-wrap md:whitespace-pre">
                                    <code className="text-xs sm:text-sm md:text-base">
                                        {item.codeExample.replace('<precode>', '').replace('</precode>', '')}
                                    </code>
                                </pre>
                            </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChapterContent;
