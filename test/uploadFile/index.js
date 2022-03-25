app.post('/upload', (req, res) => {
  // 创建formidable表单解析对象
  const form = new formidable.IncomingForm()
  // 上传文件的路径
  form.uploadDir = path.join(__dirname, 'public', 'uploads')
  // 上传文件的后缀名保留
  form.keepExtensions = true
  // 解析客户端传递过来的FormData对象
  form.parse(req, (err, fileds, files) => {
    // 将文件的地址扒出来以json对象的形式返回给客户端
    res.send({
      path: files.attrName.path.split('public')[1]
    })
  })
})
