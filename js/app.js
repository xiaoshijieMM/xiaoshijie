window.onresize = function() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  if(width > 1000) {
    var el = document.getElementById('console-notify');
    if(height < 500 && !window.consoleNotifyShowed) {
      el.style.display = 'block';
      window.consoleNotifyShowing = true;
    } else if(window.consoleNotifyShowing) {
      window.consoleNotifyShowing = false;
      window.consoleNotifyShowed = true;
      el.style.display = 'none';
    }
  }
};
