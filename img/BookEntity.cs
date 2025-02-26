namespace LeiaJa.Domain.Entities;
public sealed class BookEntity : EntityBase, IAgregateRoot
{
    public string Title { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string Document { get; set; } = null!;
    public string Edition { get; set; } = null!;
    public DateTime DataCreateBook { get; set; }

    [JsonIgnore]
    public List<BookCategoryEntity> BookCategories { get; set; } = new();
    [JsonIgnore]
    public List<BookAthorEntity> BookAthors { get; set; } = new();

    [JsonIgnore]
    public List<FavoriteEntity> Favorites { get; set; } = new();
}
