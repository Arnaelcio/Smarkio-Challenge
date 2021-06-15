const express = require("express");
const fs = require("fs");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
const{ StatusCodes } = require('http-status-codes');


const router = express.Router();

router.use(express.json());

router.post("/watson", (req, res) => {
  const { index, comment } = req.body;
  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: "woSY-xz7DmBZ_4MMvyN328o0pmKgG_lq71miaj4PDd7O",
    }),
    serviceUrl: "https://api.us-south.text-to-speech.watson.cloud.ibm.com",
    headers: {
      "Access-Control-Allow-Origin":
        "https://api.us-south.text-to-speech.watson.cloud.ibm.com",
      "Access-Control-Allow-Headers": `'Origin', 'X-Requested-With','Content-Type' ,'Accept'`,
    },
  });

  const params = {
    text: comment,
    voice: "pt-BR_IsabelaV3Voice", // Optional voice
    accept: "audio/wav",
  };

  textToSpeech
    .synthesize(params)
    .then((response) => {
      const audio = response.result;
      return textToSpeech.repairWavHeaderStream(audio);
    })
    .then((repairedFile) => {
      fs.writeFileSync(`./../frontend/src/audios/audio.wav`, repairedFile);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(StatusCodes.OK).send(comment);
});

module.exports = router;
