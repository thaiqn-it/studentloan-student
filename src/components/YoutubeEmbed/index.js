import React from 'react'

export default function YoutubeEmbed({ embedId, height }) {
    return (
        <>
            <div className="video-responsive">
                <iframe
                    width="100%"
                    height={height || "360"}
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </>
    )
}
