//ID, Title, Description, Status, ResponseTimeMs

namespace TaskManagerApi.Models;


public interface TaskItem
{
    public int Id{get;set;}
    public string Title{get;set;}
    public string? Description{get;set;}
    public string Status{get;set;}
    public int ResponseTimeMs{get;set;}

}
    

