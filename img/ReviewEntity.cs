namespace LeiaJa.Domain.Entities;
public sealed class ReviewEntity : EntityBase, IAgregateRoot
{
    public int BookId { get; set; }
    public int UserId { get; set; }
    public int Avaliation { get; set; }
    public int Commit { get; set; }
    public DateTime DataCreate { get; set; }
}
