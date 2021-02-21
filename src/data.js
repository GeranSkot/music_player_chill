import { v4 as uuidv4} from 'uuid';

function chillHop() {
    return [
        {
            name: "She Won't Say",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-300x300.jpg",
            artist: "Psalm Trees, Guillaume Muschalle",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10536",
            color: ["#FEFBF2", "#F5D861"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Toofpick",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-300x300.jpg",
            artist: "Blue Wednesday, Shopan",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11227",
            color: ["#B7756C", "#FADCC9"],
            id: uuidv4(),
            active: false
        },
        {
            name: "What Was Before",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Philanthrope, Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9923",
            color: ["#FBEAD6", "#32264C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Loving Someone You Lost",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Tapes, tender spring, Nuum",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11247",
            color: ["#728B8F", "#5E362E"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Wildlife",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, chromonicci",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
            color: ["#C87761", "#DA6233"],
            id: uuidv4(),
            active: false
        },

    ]
}

export default chillHop;