using System.Web;
using System.Web.Mvc;

namespace TVProgramGuideAdmin
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
