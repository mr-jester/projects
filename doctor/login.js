'use strict';

const http = new XMLHttpRequest();

http.open('get','localhost:8080',true);
http.setRequestHeader('Content-Type', 'application/JSON');