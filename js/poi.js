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

function poiWindowToggle(id) {
  var poiWindow = document.getElementById(id);
  var poiWindowContent = document.getElementById(id + 'content');
  var poiWindowHeight = poiWindow.style.minHeight;
  console.log(poiWindowHeight);

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

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('loading').style.display = 'none';
});
