enum ErrorCode {
  Success = 200,
  NotFoundError = 404
}

function getList(type: string): ErrorCode {
  switch (type) {
    case 'success':
      return ErrorCode.Success
  }

  return ErrorCode.Success
}
