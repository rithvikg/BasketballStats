const mongoose = require('mongoose');

const PlayersSchema = mongoose.Schema({
    "Year": {
        type: Number,
        require: true
    },

    "Player": {
        type: String,
        require: true
    },

    "Pos": {
        type: String,
        require: true
    },

    "Age": {
        type: Number,
        require: true
    },

    "Tm": {
        type: String,
        require: true
    },
    
    "G": {
        type: Number,
        require: true
    },

    "GS": Number,
    "MP": Number,
    "PER": Number,
    "TS": {
        type: Number,
        require: true
    },
    "3PAr": Number,
    "FTr": {
        type: Number,
        require: true
    },
    
    "ORB%": Number,
    "DRB%": Number,
    "TRB%": Number,
    "AST%": Number,
    "STL%": Number,
    "BLK%": Number,
    "TOV%": Number,
    "USG%": Number, 
    "blanl": Number,
    "OWS": Number,
    "DWS": Number,
    "WS": Number,
    "WS/48": Number,
    "blank2": Number,
    "OBPM": Number,
    "DBPM": Number,
    "BPM": Number,
    "VORP": Number,
    "FG": {
        type: Number,
        require: true
    },
    "FGA": {
        type: Number,
        require: true
    },
    "FG%": {
        type: Number,
        require: true
    },
    "3P": Number,
    "3PA": Number,
    "3P%": Number,
    "2P": {
        type: Number,
        require: true
    },
    "2PA": {
        type: Number,
        require: true
    },
    "2P%": {
        type: Number,
        require: true
    },
    "eFG%": {
        type: Number,
        require: true
    },
    "FT": {
        type: Number,
        require: true
    },
    "FTA": {
        type: Number,
        require: true
    },
    "FT%": {
        type: Number,
        require: true
    },
    "ORB": Number,
    "DRB": Number,
    "TRB": Number,
    "AST": {
        type: Number,
        require: true
    },
    "STL": Number,
    "BLK": Number,
    "TOV": Number,
    "PF": {
        type: Number,
        require: true
    },
    "PTS": {
        type: Number,
        require: true
    }

})

module.exports = mongoose.model('Players', PlayersSchema);