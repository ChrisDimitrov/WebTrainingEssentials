﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebTechnologies.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult JavaScript()
        {
            return View();
        }

        public ActionResult FileSystem()
        {
            return View();
        }

        public ActionResult Geolocation()
        {
            return View();
        }

        public ActionResult JavaScriptObjects()
        {
            return View();
        }
    }
}