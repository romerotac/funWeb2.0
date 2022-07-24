
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

const app = express()

const PORT = process.env.PORT || 3001

app.use(bodyParser.json())


//added for heroku
const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://myfunweb.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(helmet())

app.use(cors(corsOptions))


app.post('/refresh', (res,req) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'https://myfunweb.herokuapp.com',
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
        redirectUri:'https://myfunweb.herokuapp.com',
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


 // added for heorku
    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, 'client/build')));
      // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
          res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        });
      }




app.listen(PORT, (req,res) => {
    console.log(`express app listening on port ${PORT}`)
})