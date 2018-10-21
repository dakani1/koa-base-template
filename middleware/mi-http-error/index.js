/**
 * 错误处理中间件
 */
module.exports = async (ctx, next) => {
	try {
		await next();
		/**
		 * 如果没有更改过 response 的 status，则 koa 默认的 status 是 404 
		 */
		if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404);
	} catch (e) {
		let fileName = 'other' 
		/*此处进行错误处理，下面会讲解具体实现*/
		const status = e.status;
		switch(status) {
			case 400:;
			case 404:;
			case 500: fileName = status; break;
			default: fileName = 'other'; break;
		}
		// 接下来针对各个不同的状态做出对应的处理
		// ctx.render('about', {
		// 	name: 'error'
		// })
	}
}