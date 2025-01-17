desktop.mtv = {};
desktop.mtv.label = "Music Television";

desktop.mtv.player = null;
desktop.mtv.load = function (params, next) {

  desktop.loadRemoteAssets([
    'data/mtv.js',
    'mtv' // this loads the sibling desktop.mtv.html file into <div id="window_mtv"></div>
  ], function (err) {

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* 
      we could do this, but currently it will block entire page on youtube embed load
      this can be fixed in the future by having a pending / appLoading state on Apps
      so that next() can be fired even if the app isnt fully ready
      this will result in cases where user double clicks desktop icon and sees hourglass cursor spin...
      ... until app is ready and then window opens and hourglass cursor goes away
  
      tag.onload = function () {
        next();
      }

    */

    $('.ponderMTV').on('click', function(){
      desktop.playRandomVideo(desktop.mtv.player, desktop.ytPlaylist);
    });

    $('#window_mtv').css('width', 644);
    $('#window_mtv').css('height', 590);
    next();
  });
};

desktop.mtv.closeWindow = function () {
  if (desktop.mtv.player && desktop.mtv.player.pauseVideo) {
    desktop.mtv.player.pauseVideo();
  }
}