
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');
;

const port = 3001
const app = express()

app.use(cors())
app.use(bodyParser.json())


app.post('/refresh', (res,req) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId: '49fb612d070040f9a34236837ab79ad3',
        clientSecret: '4a45e17ddf794a1a89a32dd345095f01',
        refreshToken      
    })
    spotifyApi
      .refreshAccessToken().then((data) => {
        res.json({
            accessToken:data.body.accessToken,
            expiresIn:data.body.expiresIn,
        } )
      }).catch(() => {
        //res.sendStatus(400)
      })
      }
    
)



app.post('/login', (req,res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId: '49fb612d070040f9a34236837ab79ad3',
        clientSecret: '4a45e17ddf794a1a89a32dd345095f01',
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
            console.log('this is from the data')
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
        })
        })
        .catch(err => {
            console.log('this is from the error')
            //res.sendStatus(400)
        })

    })




app.listen(3001, () => {
    console.log(`express app listening on port ${port}`)
})