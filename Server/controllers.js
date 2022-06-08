const fs = require("fs");   
let callIds = JSON.parse(fs.readFileSync("CallIds.json"));

exports.setCallId = (req, res, next) => {
    const callId = req.params.id;
    // const peerId = req.body.peerId;
    const peerId = "tempPeerID";
    callIds = {...callIds, [callId]: peerId};
    fs.writeFileSync("CallIds.json",JSON.stringify(callIds,null,2),err => {
        console.log(err);
        return res.status(500).send({message:"Server error"});
    });
    res.status(200).send({message:"CallId saved successfully!"});
}

exports.getCallId = (req, res, next) => {
    const callId = req.params.id;
    const peerId = callIds[callId];
    if(peerId)
        return res.status(200).json({[callId]: peerId});
    res.status(404).send({message:"CallID not found!"});
}