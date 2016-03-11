_loadAppStyles();
_loadLibScripts();
_loadAppConfig();
_loadAppScripts();

function _loadAppStyles() {
	console.log('_loadAppStyles');
	var files = ['styles/html5reset.css', 
	             'styles/common.css', 
				 'styles/grid.css'];
	var head = document.getElementsByTagName("head")[0];
	var i = 0;
	var len = files.length;
	for (i = 0; i < len; i++) { 
		head.appendChild(_createElementLink(files[i]));
	}
}

function _loadAppConfig() {
	console.log('_loadAppConfig');
}

function _loadLibScripts() {
	console.log('_loadLibScripts');
	var urls = ['scripts/jquery.js', 
				 'scripts/skylib.js'];
	var i = 0;
	var len = urls.length;
	for (i = 0; i < len; i++) { 
		_loadScript(urls[i]);
	}
}

function _loadAppScripts() {
	console.log('_loadAppScripts');
	var urls = ['scripts/tablefixheader.js'];
	var head = document.getElementsByTagName("head")[0];
	var i = 0;
	var len = urls.length;
	for (i = 0; i < len; i++) { 
		//head.appendChild(_createElementScript(urls[i]));
	}
}

function _createElementScript(filename) {
	var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
	return fileref;
}

function _loadScript(url, callback){
	console.log('_loadScript ' + url);
	if (_checkExistScript(url)) {
		return;
	}
    var script = document.createElement("script")
    script.type = "text/javascript";
	script.src = url;
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
				if (callback) {
					callback();
				}
            }
        };
    } else {  //Others
        script.onload = function(){
			if (callback) {
				callback();
			}
        };
    }
    
    document.body.appendChild(script);
}

function _checkExistScript(url) {
	var childNodes = document.head.childNodes;
	var i = 0;
	var len = childNodes.length;
	for (i = 0; i < len; i++) { 
		console.log(childNodes[i].tagName);
		if (childNodes[i].tagName == 'script' || childNodes[i].tagName == 'SCRIPT') {
			console.log('childNodes[i].src = ' + childNodes[i].src + "  " + url + "  " + (new String(childNodes[i].src)).indexOf(url));
			if ((new String(childNodes[i].src)).indexOf(url) > 0) {
				console.log('Exist ' + url);
				return true;
			}
		}
	}
	return false;
}

function _createElementLink(filename) {
	var fileref=document.createElement('link');
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
	return fileref;
}

