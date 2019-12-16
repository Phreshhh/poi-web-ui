function samaritanWrite(bannerid, i, text, cbfunc, cbfuncparam) {
  var textwords = text.split(' ');
  if (i < textwords.length) {
    document.getElementById(bannerid).innerHTML = textwords[i];
    i++;
    setTimeout( ()=> {
      samaritanWrite(bannerid, i, text, cbfunc, cbfuncparam);
    }, 500);
  } else {
    if (cbfunc !== undefined && cbfunc !== '') {
      setTimeout( ()=> {
        window[cbfunc](cbfuncparam);
      }, 1000);
    }
  }
}

function poiWindowMinimize(id) {
  var poiWindow = document.getElementById(id);
  var poiWindowContent = document.getElementById(id + 'content');
  var poiWindowHeight = poiWindow.style.minHeight;

  if (poiWindowHeight === '15px') {
    // window is minimized
    poiWindowContent.style.display='block';
    poiWindow.style.minHeight ='400px';
  } else {
    // window is normal size
    poiWindowContent.style.display='none';
    poiWindow.style.minHeight ='15px';
  }

}
function poiWindowMaximize(id) {
  var poiWindow = document.getElementById(id);
  var poiWindowWidth = poiWindow.style.width;

  if (poiWindowWidth === '100%') {
    // window is maximized
    poiWindow.style.width ='80%';
  } else {
    // window is normal size
    poiWindow.style.width ='100%';
  }

}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('loading').style.display = 'none';
});
