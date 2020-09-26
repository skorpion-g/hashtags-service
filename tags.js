const masterHashTags1 = ["ableton", "afrohouse", "beats", "beatport", "breakbeats", "dance", "dancehallmusic", "dancemusic", "deephouse", "dj", "djlife", "djlive", "dubstep", "edm", "edmdance", "edmdrops", "edmfamily", "edmgirls", "edmlife", "edmlifestyle", "edmmusic", "edmnation", "electro", "electrohouse", "electronic", "electronica", "electronicbeats", "electronicdance", "electronicdancemusic", "electronicdrums", "electronicmusic", "electronicmusicfestival", "electronicmusician", "festival", "flstudio", "funkyhouse", "futuremusic", "house", "housedance", "housemusic", "inthemix", "logicprox", "maschinestudio", "mixcloud", "musicproducer", "musicproduction", "nightlife", "partymusic", "pioneerdj", "producer", "progressivehouse", "rave", "soulfulhouse", "techhouse", "techno", "tomorrowland", "traktordj", "traktorpro", "trapmusic", "ukgarage"];
const masterHashTags2 = ["ableton", "beat", "beats", "boombapmusic", "dj", "freeverse", "flgang", "flstudio", "hiphop", "hiphopartist", "hiphopbeats", "hiphopculture", "hiphopdaily", "hiphopdance", "hiphophead", "hiphopheads", "hiphopinstrumentals", "hiphopinternational", "hiphopislife", "hiphopjunkie", "hiphoplife", "hiphoplyrics", "hiphopmusic", "hiphopnation", "hiphopnews", "hiphopparty", "hiphopproducer", "hiphopunderground", "lofihiphop", "logicprox", "lookingforbeats", "makingabeat", "mixtape", "mpc", "mpcstudio", "musicproducer", "newhiphop", "nomumblerap", "producer", "rap", "rapinstrumentals", "rapmusic", "rapper", "rappers", "rapradar", "realrap", "rhymes", "rnb", "rnbbeats", "rnbhiphop", "rnbmusic", "rnbsinger", "soundcloudrapper", "studio", "trap", "trapbeats", "trapbeatsforsale", "trapmusic", "unsignedrapper", "upcomingrapper", "westcoasthiphop"];
const masterHashTags3 = ["albumoftheday", "ampeg", "artist", "band", "bandmembers", "bandmerch", "bandshirt", "bassist", "blues", "bluesmusic", "concert", "cover", "deathmetal", "drums", "emo", "epiphone", "ernieball", "fender", "gibson", "gothicrock", "grungemusic", "guitar", "guitaristsofinstagram", "guitarmusic", "hardrockband", "heavymetal", "horrorpunk", "ibanezguitars", "indiepop", "indierock", "instaband", "lickwars", "live", "livemusic", "marshallamps", "metal", "metalhead", "music", "musician", "pop", "postgrunge", "poppunk", "postpunk", "powermetal", "prog", "progressiverock", "progrock", "punk", "punkrock", "punks", "riffwars", "rock", "rockband", "rockmusic", "rocknroll", "rockshow", "softgrunge", "stonerrock", "stratocaster", "telecaster", "thrashmetal"];

let masterHashTags = masterashTags1.concat(masterHashTags2.concat(masterHashTags3));

const dedupe = (arr) => arr.filter((v,i) => arr.indexOf(v) === i);
masterHashTags = dedupe(masterHashTags);

module.exports.masterHashTags = masterHashTags;