const fs = require("fs"); 
const Peer = require("peerjs");

let peerIdOfInitiatorWithCallId = JSON.parse(fs.readFileSync("CallInitiatorIds.json"));

exports.setCallId = (req, res, next) => {
    const callId = req.params.id;
    const peerId = req.body.peerId;

    if(peerId && callId){
        peerIdOfInitiatorWithCallId = {...peerIdOfInitiatorWithCallId, [callId]: peerId};
        if(!peerIdOfInitiatorWithCallId)
            return res.status(500).send({status: 0, message: "Server error"});

        fs.writeFileSync("CallInitiatorIds.json",
            JSON.stringify(peerIdOfInitiatorWithCallId,null,2),
            err => {
                console.log(err);
                return res.status(500).send({status: 0, message: "Server error"});
            });

        return res.status(200).send({status: 1, message: "CallId saved successfully!"});
    }

    res.status(200).send({status: 0, message: "No valid peerId or callId provided"});
}

exports.getCallId = (req, res, next) => {
    const callId = req.params.id;
    const peerId = peerIdOfInitiatorWithCallId[callId];
    
    if(peerId)
        return res.status(200).send({status: 1, message: "Success!", data: {[callId]: peerId}});

    res.status(404).send({status: 0, message: "CallID not found!"});
}