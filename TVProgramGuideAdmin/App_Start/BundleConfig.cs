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

           // bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //           "~/Scripts/modernizr-*"));

          //  bundles.Add(new ScriptBundle("~/bundles/respond").Include(
            //                             "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(

                 "~/Scripts/bootstrap/js/bootstrap.min.js",

                 "~/Scripts/js/chosen.jquery.min.js",

                 "~/Scripts/js/jquery.maskedinput.min.js",

                 "~/Scripts/js/bootstrap-slider.min.js",

                 "~/Scripts/js/jquery.tagsinput.min.js",

                 "~/Scripts/js/wysihtml5-0.3.0.min.js",

                 "~/Scripts/js/uncompressed/bootstrap-wysihtml5.js",

                 "~/Scripts/js/dropzone.min.js",

                 "~/Scripts/js/modernizr.min.js",
                 
                 "~/Scripts/js/pace.min.js",
                 
                 "~/Scripts/js/jquery.popupoverlay.min.js",
                 
                 "~/Scripts/js/jquery.slimscroll.min.js",
                 
                "~/Scripts/js/jquery.cookie.min.js",
                                             
                 "~/Scripts/js/endless/endless.js"
));

            bundles.Add(new StyleBundle("~/Scripts/css").Include(
                "~/Scripts/bootstrap/css/bootstrap.min.css",
                "~/Scripts/css/font-awesome.min.css",
                "~/Scripts/css/pace.css",
                "~/Scripts/css/chosen/chosen.min.css",
                "~/Scripts/css/datepicker.css",
                "~/Scripts/css/bootstrap-timepicker.css",
                "~/Scripts/css/slider.css",
                "~/Scripts/css/jquery.tagsinput.css",
                "~/Scripts/css/bootstrap-wysihtml5.css",
                 "~/Scripts/css/colorbox/colorbox.css",
                 "~/Scripts/css/dropzone/dropzone.css",
                "~/Scripts/css/morris.css",
                "~/Scripts/css/endless.min.css",
                "~/Scripts/css/endless-skin.css"

                ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                    "~/Scripts/angular/angular.js",
                    "~/Scripts/angular/angular-route.js"
                     ));
            bundles.Add(new ScriptBundle("~/bundles/angularcostom").Include(
                "~/Application/Directives/main.js",
                "~/Application/Controllers/ChannelModule.js",
                "~/Application/Directives/fileUploader.js",
                "~/Application/Services/entity.js"
                ));

        }
    }
}
