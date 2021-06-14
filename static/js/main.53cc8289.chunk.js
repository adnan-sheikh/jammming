(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n,s=a(1),c=a.n(s),i=a(8),r=a.n(i),o=(a(13),a(3)),l=a(4),h=a(2),u=a(6),d=a(5),p=(a(14),a(15),a(0)),m=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={term:""},n.search=n.search.bind(Object(h.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(t){this.setState({term:t.target.value})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchBar",children:[Object(p.jsx)("input",{type:"text",placeholder:"Enter a Song, Album, or Artist",onChange:this.handleTermChange}),Object(p.jsx)("button",{className:"SearchButton",onClick:this.search,children:"SEARCH"})]})}}]),a}(c.a.Component),j=(a(17),a(18),a(19),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?Object(p.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(p.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Track",children:[Object(p.jsxs)("div",{className:"Track-information",children:[Object(p.jsx)("h3",{children:this.props.track.name}),Object(p.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(c.a.Component)),b=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(p.jsx)(j,{track:e,onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval},e.id)}))})}}]),a}(c.a.Component),v=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchResults",children:[Object(p.jsx)("h2",{children:"Results"}),Object(p.jsx)(b,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(c.a.Component),f=(a(20),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(t){var e=t.target.value;this.props.onNameChange(e)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Playlist",children:[Object(p.jsx)("input",{type:"text",defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(p.jsx)(b,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(p.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(c.a.Component)),k={getAccessToken:function(){if(n)return n;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);if(t&&e){n=t[1];var a=Number(e[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("e23329647c984a2f89eaf00d52c673ee","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://adnan-sheikh.github.io/jammming/");window.location=s},search:function(t){var e=k.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).then((function(t){return t.tracks?t.tracks.items.map((function(t){return{id:t.id,name:t.name,artist:t.artists[0].name,album:t.album.name,uri:t.uri}})):[]}))},savePlaylist:function(t,e){if(t&&e.length){var a,n=k.getAccessToken(),s={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(t){return t.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:s,method:"POST",body:JSON.stringify({name:t})}).then((function(t){return t.json()})).then((function(t){var n=t.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:s,method:"POST",body:JSON.stringify({uris:e})})}))}))}}},y=k,O=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"Playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(h.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(h.a)(n)),n.search=n.search.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(t){var e=this.state.playlistTracks;e.find((function(e){return e.id===t.id}))||(e.push(t),this.setState({playlistTracks:e}))}},{key:"removeTrack",value:function(t){var e=this.state.playlistTracks.filter((function(e){return e.id!==t.id}));this.setState({playlistTracks:e})}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"savePlaylist",value:function(){var t=this;if(this.state.playlistTracks.length){var e=this.state.playlistTracks.map((function(t){return t.uri}));y.savePlaylist(this.state.playlistName,e).then((function(){t.setState({playlistName:"New Playlist",playlistTracks:[]})}))}}},{key:"search",value:function(t){var e=this;t&&y.search(t).then((function(t){e.setState({searchResults:t})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:["Ja",Object(p.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{onSearch:this.search}),Object(p.jsxs)("div",{className:"App-playlist",children:[Object(p.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(p.jsx)(f,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(c.a.Component),T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.53cc8289.chunk.js.map