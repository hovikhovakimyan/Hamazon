using System.ComponentModel.DataAnnotations;
namespace FoodOrd_Backend.Models
{
    public class RegisterModel
    {

        [Required]
        public string Email { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
