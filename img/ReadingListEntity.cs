namespace LeiaJa.Domain.Entities;
public sealed class ReadingListEntity : EntityBase, IAgregateRoot
{
    public int UserId { get; set; }
    public ENameList NameList { get; set; }
}
