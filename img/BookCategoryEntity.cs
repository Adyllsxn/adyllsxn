namespace LeiaJa.Domain.Entities;
public sealed class BookCategoryEntity: IAgregateRoot
{
    public int BookId { get; set; }
    public int CategoryId { get; set; }
    
    [JsonIgnore]
    public BookEntity Book { get; set; } = null!;
    [JsonIgnore]
    public CategoryEntity Category { get; set; } = null!;
}
