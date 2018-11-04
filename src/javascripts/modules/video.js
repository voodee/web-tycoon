import YouTubePlayer from 'youtube-player'


export default class Scene {
    constructor(el) {
        const player = YouTubePlayer('video', {
            videoId: '4tzC-ysPftw',
            startSeconds: 70,
            playerVars: {
                autoplay: 0,
                controls: 0
            }
        });
    
        player.mute();
        player.playVideo()
            .then(function () {
                console.log('Starting to play player1. It will take some time to buffer video before it starts playing.');
            });
    }
}
