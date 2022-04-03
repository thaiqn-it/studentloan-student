import React from 'react'
import { validVideoId, getYoutubeId } from 'utils/youtube'

export default function YoutubeEmbed({ url, height }) {
    return (
        <>
            <div className="video-responsive">
                <iframe
                    width="100%"
                    height={height || '360'}
                    src={`https://www.youtube.com/embed/${getYoutubeId(url)}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </>
    )
}
