'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var animeSchema = Schema({
    MAL_ID: Number,
    Name: String,
    Score: Mixed,
    Genres: String,
    English: String,
    Japanese: String,
    Type: String,
    Episodes: Mixed,
    Aired: Mixed,
    Producers: String,
    Licensors: String,
    Studios: String,
    Source: String,
    Duration: Mixed,
    Rating: String,
    Ranked: Mixed,
    Popularity: Number,
    Members: Number,
    Favorites: Number,
    Watching: Number,
    Completed: Number,
    OnHold: Number,
    Dropped: Number,
    PlantoWatch: Number,
    Score10: Number,
    Score9: Number,
    Score8: Number,
    Score7: Number,
    Score6: Number,
    Score5: Number,
    Score4: Number,
    Score3: Number,
    Score2: Number,
    Score1: Number
});

module.exports = mongoose.model('Anime', animeSchema);