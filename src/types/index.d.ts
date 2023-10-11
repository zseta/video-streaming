export interface Video {
    video_id: string,
    thumbnail: string,
    title: string,
    content_type: string,
    url: string,
    progress: ?number
}

export interface WatchHistory {
    user_id: userId,
    video_id: videoId,
    progress: progress,
    watched_at: watchedAt
}