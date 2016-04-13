using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestMVC.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: Hello
        public ActionResult Index()
        {
            return View();
        }
    }
}