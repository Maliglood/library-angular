using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace library_angular
{
	using Microsoft.AspNetCore.Routing;
	using System.IO;
	using System.Reflection.Metadata;

	public class Startup
	{
		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddRouting();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			app.UseStaticFiles();
			app.UseDefaultFiles();

			// определяем обработчик маршрута
			var myRouteHandler = new RouteHandler(Handle);
			// создаем маршрут, используя обработчик
			var routeBuilder = new RouteBuilder(app, myRouteHandler);
			// само определение маршрута - он должен соответствовать запросу {controller}/{action}
			routeBuilder.MapRoute("default", "{controller}/{action}");
			// строим маршрут
			app.UseRouter(routeBuilder.Build());

			//app.Run(async (context) =>
			//{
			//	await context.Response.WriteAsync("Page Not Found");
			//});

			app.Use(
				async (context, next) =>
				{
					await next();
					if (context.Response.StatusCode == 404 &&/* !Path.HasExtension(context.Request.Path.Value) &&*/ !context.Request.Path.Value.StartsWith("/api/"))
					{
						context.Request.Path = "/index.html";
						await next();
					}
				});
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		private async Task Handle(HttpContext context)
		{
			await context.Response.WriteAsync("Hello ASP.NET Core!");
		}
	}
}
