desktop.games = {};
desktop.games.label = "Games";
desktop.games.icon = 'folder';

desktop.games.load = function loadDesktopGames (params, next) {
  desktop.loadRemoteAppHtml('games', function (responseText, textStatus, jqXHR) {
    $('#window_games').css('width', 444);
    $('#window_games').css('height', 150);
    $('#window_games').css('left', 200);
    $('#window_games').css('top', 250);
    next();
  });
};