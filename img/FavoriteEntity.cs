namespace LeiaJa.Domain.Entities;
public sealed class FavoriteEntity : IAgregateRoot
{
    public int UserId { get; set; }
    public int BookId { get; set; }
    public DateTime DateFavorite { get; set; } = DateTime.UtcNow;

    [JsonIgnore]
    public UserEntity User { get; set; } = null!;

    [JsonIgnore]
    public BookEntity Book { get; set; } = null!;
}
