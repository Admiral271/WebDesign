using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace WebDesign.Models
{
    public class ChangeRoleViewModel
    {
        public string UserId { get; set; }
        public string UserEmail { get; set; }
        public IList<string> UserRoles { get; set; }
        public IEnumerable<IdentityRole> AllRoles { get; set; }
    }
}
