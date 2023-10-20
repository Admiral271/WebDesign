using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.EntityFrameworkCore;
using WebDesign.Data;
using WebDesign.Services; 

var builder = WebApplication.CreateBuilder(args);

// Register confirmation
//builder.Services.AddTransient<IEmailSender, EmailSender>();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("������ ����������� � ���� ������ �������� ������");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();
builder.Services.AddControllersWithViews();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // �������� HSTS �� ��������� ���������� 30 ����. ��������, �� �������� �������� ��� ��� ���������������� ���������, ��. https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

RoleInitializer.InitializeAsync(app.Services.GetRequiredService<UserManager<IdentityUser>>(), app.Services.GetRequiredService<RoleManager<IdentityRole>>()).Wait();

app.Run();
