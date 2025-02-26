namespace LeiaJa.Domain.Entities;
public sealed class BookListReading: IAgregateRoot
{
    public int ReadingListId { get; set; }
    public int BookId { get; set; }
}
