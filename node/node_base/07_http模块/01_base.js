const http = require("http");

const app = function (req, res, next) {
  console.log(1, req.url);
  app.handle(req, res, next);
};

app.handle = function (req, res, next) {
  console.log("next: ", next);
  console.log(2, req.url);
  const done = function (req, res) {
    console.log(3, req.url);
  };

  done(req, res);
};

app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

app.listen(8000, () => {
  console.log("server listen");
});

// 启动服务器，指定端口号和主机
// server.listen(8888, 'localhost', () =>{
//   console.log('server listen')
// })
