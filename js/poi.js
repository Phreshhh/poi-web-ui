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


document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('loading').style.display = 'none';
});
