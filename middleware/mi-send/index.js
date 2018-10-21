module.exports = async (ctx, next) => {
    // ctx.set("Content-Type", "application/json")
    ctx.state = {
      go: 'futian'
    }
    await next()
  }