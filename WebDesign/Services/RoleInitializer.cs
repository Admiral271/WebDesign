using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace WebDesign.Services
{
    public class RoleInitializer
    {
        public static async Task InitializeAsync(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            string adminEmail = "test@mail.ru";
            string password = "QAZwsx123!";
            if (await roleManager.FindByNameAsync("Admin") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("Administrator"));
            }
            if (await userManager.FindByNameAsync("Admin") == null)
            {
                IdentityUser admin = new IdentityUser { Email = adminEmail, UserName = "Admin" };
                IdentityResult result = await userManager.CreateAsync(admin, password);
                if (result.Succeeded)
                {
                    // Установите EmailConfirmed в true
                    admin.EmailConfirmed = true;
                    await userManager.UpdateAsync(admin);

                    await userManager.AddToRoleAsync(admin, "Administrator");
                }
            }
        }
    }
}
