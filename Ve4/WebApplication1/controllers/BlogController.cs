using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogController : ControllerBase
{
    [HttpGet]
    public IActionResult GetPosts()
    {
        // Demo data - replace with actual database calls
        var posts = new[] {
            new { Id = 1, Title = "First Blog Post", Content = "Content here..." },
            new { Id = 2, Title = "Second Blog Post", Content = "More content..." }
        };

        return Ok(posts);
    }
}
