const express = require('express');
const router = express.Router();
const Players = require('../models/Players');

//get back all Players data
router.get('/', async (req, res) => {
    try {
        const players = await Players.find();
        res.json(players)

    }catch(err){
        res.json({message:err})
    }
});

router.get('/:playerName',  async (req, res) => {
    try{
        console.log( req.params.playerName)
        const playerData =  await Players.find({"Player": req.params.playerName});
        console.log(playerData)
        res.json(playerData)
    }catch(err){
        res.json({message: err})
    }

});

router.delete('/:playerName', async (req, res) => {
    try {
        const playerRemoval = await Players.deleteOne({'Player':req.params.playerName});
        res.json(playerRemoval);
    }
    catch (err) {
        res.json({message: err});
    }
})

router.patch('/:playerName', async (req, res) => {
    try{
        const updatedPlayer = await Players.updateOne(
            {$set: {"Player": req.params.playerName}}

        );
    }
    catch(err){
        res.json({message: err});
    }
});

router.get('/year', (req, res) => {
    res.send('The best team is the Lakers')
});

router.post('/', async (req, res) => {
    
    const players = new Players({
        "Year": req.body['Year'],
        "Player": req.body['Player'],
        "Pos": req.body['Pos'],
        "Age": req.body['Age'], 
        "TM": req.body['TM'],
        "G" : req.body['G'],
        "GS" : req.body['GS'],
        "MP" : req.body['MP'],
        "PER" : req.body['PER'],
        "TS%" : req.body['TS%'],
        "3PAr" : req.body['3PAr'],
        "FTr" : req.body['FTr'],
        "ORB%" : req.body['ORB%'],
        "DRB%" : req.body['DRB%'],
        "TRB%" : req.body['TRB%'],
        "AST%" : req.body['AST%'],
        "STL%" : req.body['STL%'],
        "BLK%" : req.body['BLK%'],
        "TOV%" : req.body['TOV%'],
        "USG%" : req.body['USG%'],
        "blanl" : req.body['blanl'],
        "OWS" : req.body['OWS'],
        "DWS" : req.body['DWS'],
        "WS" : req.body['WS'],
        "WS/48" : req.body['WS/48'],
        "blank2" : req.body['blank2'],
        "OBPM" : req.body['OBPM'],
        "DBPM" : req.body['DBPM'],
        "BPM" : req.body['BPM'],
        "VORP" : req.body['VORP'],
        "FG" : req.body['FG'],
        "FGA" : req.body['FGA'],
        "FG%" : req.body['FG%'],
        "3P" : req.body['3P'],
        "3PA" : req.body['3PA'],
        "3P%" : req.body['3P%'],
        "2P" : req.body['2P'],
        "2PA" : req.body['2PA'],
        "2P%" : req.body['2P%'],
        "eFG%" : req.body['eFG%'],
        "FT" : req.body['FT'],
        "FTA" : req.body['FTA'],
        "FT%" : req.body['FT%'],
        "ORB" : req.body['ORB'],
        "DRB" : req.body['DRB'],
        "TRB" : req.body['TRB'],
        "AST" : req.body['AST'],
        "STL" : req.body['STL'],
        "BLK" : req.body['BLK'],
        "TOV" : req.body['TOV'],
        "PF" : req.body['PF'],
        "PTS" : req.body['PTS']
    });
    try {
    const savedPlayer = await players.save()
    res.json(savedPlayer);
    } catch(err){
        res.json({message: err});
    }

});

module.exports = router;