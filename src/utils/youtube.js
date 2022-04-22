export function getYoutubeId(url) {
    var id = false
    if (url) {
        var regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
        var match = url.match(regExp)
        id = match && match[7].length == 11 ? match[7] : false
    }

    return id
}

export function getThumbnail(url) {
    var imageUrl = `https://www.solve-ideas.com/wp-content/uploads/BVP_HEADER_play_600px.png`
    if (url) {
        // var id = getYoutubeId(url)
        imageUrl = `https://img.youtube.com/vi/${url}/maxresdefault.jpg`
    }

    return imageUrl
}

export const validVideoId = async (url) => {
    var valid = false
    if (url) {
        var id = getYoutubeId(url)
        var img = new Image()
        img.src = 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg'
        // return (img.onload = await function () {
        //     if (this.width === 120) {
        //         valid = false
        //     } else {
        //         console.log('true1')
        //         valid = true
        //     }
        // })
        await img.decode();
        valid = img.width == 120
    }

    return valid
}
