const fs = require("fs");   
let callIds = JSON.parse(fs.readFileSync("CallIds.json"));

exports.setCallId = (req, res, next) => {
    const callId = req.params.id;
    const peerId = req.body.peerId;
    // const peerId = "peer Id";
    // console.log(req.body);
    callIds = {...callIds, [callId]: peerId};
    // console.log("setCallID Called!");
    fs.writeFileSync("CallIds.json",JSON.stringify(callIds,null,2),err => {
        console.log(err);
        return res.status(500).send({message:"Server error"});
    });
    res.status(200).send({message:"CallId saved successfully!"});
}

exports.getCallId = (req, res, next) => {
    const callId = req.params.id;
    const peerId = callIds[callId];
    console.log("getCallID Called! with callId: "+callId+" has PeerId: "+peerId);
    if(peerId)
        return res.status(200).json({[callId]: peerId});
    res.status(404).send({message:"CallID not found!"});
}