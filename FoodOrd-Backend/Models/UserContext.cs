using Microsoft.EntityFrameworkCore;

namespace FoodOrd_Backend.Models
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
    }
}
