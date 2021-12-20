using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodOrd_Backend.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string storeName { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string description { get; set; }
        public string price { get; set; }
        [Required]
        public string image { get; set; }



    }
}
