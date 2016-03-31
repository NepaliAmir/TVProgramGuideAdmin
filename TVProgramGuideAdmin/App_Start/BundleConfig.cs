using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace TVProgramGuideAdmin
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/js/jquery-1.10.2.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                       "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/respond").Include(
                                         "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
       "~/Scripts/bootstrap/js/bootstrap.js",
       "~/Scripts/js/jquery.flot.min.js",
       "~/Scripts/js/rapheal.min.js",
        "~/Scripts/js/morris.min.js",
       "~/Scripts/js/jquery.colorbox.min.js",
       "~/Scripts/js/jquery.sparkline.min.js",
       "~/Scripts/js/uncompressed/pace.js",
       "~/Scripts/js/jquery.popupoverlay.min.js",
       "~/Scripts/js/jquery.slimscroll.min.js",
       "~/Scripts/js/modernizr.min.js",
       "~/Scripts/js/jquery.cookie.min.js",
       "~/Scripts/js/endless/endless_dashboard.js",
       "~/Scripts/js/endless/endless.js"
));

            bundles.Add(new StyleBundle("~/Scripts/css").Include(
                 "~/Scripts/bootstrap/css/bootstrap.min.css",
                 "~/Scripts/css/font-awesome.min.css",
                 "~/Scripts/css/pace.css",
                 "~/Scripts/css/colorbox/colorbox.css",
                 "~/Scripts/css/morris.css",
                 "~/Scripts/css/endless.min.css",
                 "~/Scripts/css/endless-skin.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                    "~/Scripts/angular/angular.js",
                    "~/Scripts/angular/angular-route.js"
                     ));

        }
    }
}
