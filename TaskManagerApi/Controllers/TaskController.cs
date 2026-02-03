using TaskManagerApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TaskManagerApi.Data;
using System.Runtime.CompilerServices;

namespace TaskManagerApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController:ControllerBase
{
    private readonly AppDbContext _context;
    public TasksController(AppDbContext context)=> _context=context;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TaskItem>>> GetAllTasks()
    {

        // var testList= new List<TaskItem>
        // {
        //     new TaskItem{Id=99,Title="Hello", Description="Hello World checking"}
        // };
         var watch=Stopwatch.StartNew();
         var tasks= await _context.Tasks.ToListAsync();
         watch.Stop();

         return Ok(tasks);        
    }
    
}
