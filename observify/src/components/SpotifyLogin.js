import React, { Component } from 'react'
import { CLIENT_ID, REDIRECT_URI, AUTH_URL, SCOPES } from '../settings';
import Button from 'react-bootstrap/Button';

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default class SpotifyLogin extends Component {
    state = {
        token: ""
    }
    componentDidMount() {
        let _token = hash.access_token;
        let _expires_in = hash.expires_in;
        console.log(hash)
        if (_token) {
            localStorage.setItem('token', _token);
            localStorage.setItem('expires_in', _expires_in);
        }
      }

    render() {
        return (
            <div>
            {!localStorage.getItem('token') ? (
                <a
                  href={`${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=token&show_dialog=true`}
                ><Button onClick={()=>{console.log("clicked")}} variant="primary">
                Login to Spotify
                </Button>
                </a>
              ):""}
            </div>
        )
    }
}
