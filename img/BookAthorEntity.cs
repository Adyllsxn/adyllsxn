namespace LeiaJa.Domain.Entities;
public sealed class BookAthorEntity: IAgregateRoot
{
    public int BookId { get; set; }
    public int AthorId { get; set; }
    
    [JsonIgnore]
    public BookAthorEntity Book { get; set; } = null!;
    
    [JsonIgnore]
    public AthorEntity Athor { get; set; } = null!;
}
