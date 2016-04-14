using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebTechnologies.Startup))]
namespace WebTechnologies
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
