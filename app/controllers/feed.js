module.exports = {
  getBBC:function(req, res){
  var FeedParser = require('feedparser')
    , request = require('request');
  //
  var feedReqFrontPage = request({url:'http://feeds.bbci.co.uk/news/rss.xml?edition=uk',method:'GET', headers: { 'user-Agent': 'request'}})
    , feedparser = new FeedParser()
    , meta = null
    , items = [];

    feedReqFrontPage.on('error', function (error) {
    console.error(error);
    res.status(404).end(JSON.stringify(error));
  });
    feedReqFrontPage.on('response', function (res) {
    var stream = this;
    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
    stream.pipe(feedparser);
  });

  feedparser.on('error', function (err) {
    console.error(err);
  });
  feedparser.on('readable', function () {
    var stream = this
      , item;
    meta = stream.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
    while (item = stream.read()) {
      items.push(item);
    }
  });
  feedparser.on('end', function () {
    res.send({
      data: {
        meta: meta,
        items: items
      },
      status: 200
    }).end();
  });

  },
  getMashable:function(req, res){
    var FeedParser = require('feedparser')
      , request = require('request');
    var htmlparser = require("htmlparser");
    //
    var handler = new htmlparser.DefaultHandler(
      function (error) {}
      , { verbose: false, ignoreWhitespace: true }
    );
    var feedReqFrontPage = request({url:'https://www.cnet.com/rss/news/',method:'GET', headers: { 'user-Agent': 'request'}})
      , feedparser = new FeedParser()
      , meta = null
      , items = [];

    feedReqFrontPage.on('error', function (error) {
      console.error(error);
      res.status(404).end(JSON.stringify(error));
    });
    feedReqFrontPage.on('response', function (res) {
      var stream = this;
      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
      stream.pipe(feedparser);
    });

    feedparser.on('error', function (err) {
      console.error(err);
    });
    feedparser.on('readable', function () {
      var stream = this
        , item;
      meta = stream.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
      while (item = stream.read()) {
        items.push(item);
      }
    });
    feedparser.on('end', function () {
      res.send({
        data: {
          meta: meta,
          items: items
        },
        status: 200
      }).end();
    });

  },
  getCNET:function(req, res){
    var FeedParser = require('feedparser')
      , request = require('request');
    //

    var feedReqFrontPage = request({url:'https://www.cnet.com/rss/news/',method:'GET', headers: { 'user-Agent': 'request'}})
      , feedparser = new FeedParser()
      , meta = null
      , items = [];

    feedReqFrontPage.on('error', function (error) {
      console.error(error);
      res.status(404).end(JSON.stringify(error));
    });
    feedReqFrontPage.on('response', function (res) {
      var stream = this;
      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
      stream.pipe(feedparser);
    });

    feedparser.on('error', function (err) {
      console.error(err);
    });
    feedparser.on('readable', function () {
      var stream = this
        , item;
      meta = stream.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
      while (item = stream.read()) {
        items.push(item);
      }
    });
    feedparser.on('end', function () {
      res.send({
        data: {
          meta: meta,
          items: items
        },
        status: 200
      }).end();
    });

  }
  }
