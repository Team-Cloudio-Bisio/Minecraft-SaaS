using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using DBMicroservice.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DBMicroservice.Controllers { }

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase {

    [HttpGet("get", Name = "GetUser")]
    public async Task<IEnumerable<User>> Get() {
        DBUserContext context = new DBUserContext();
        
        List<User> res = await context.GetUsers();

        return Enumerable.Range(0, res.Count).Select(i => res[i]);
    }
    
    [HttpPost("insert", Name = "InsertUser")]
    public async Task<IActionResult> Insert(User user) {
        DBUserContext context = new DBUserContext();
        
        int res = await context.InsertUser(user);

        if (res == 1)
            return StatusCode(200, "Insert succesful!");
        else
            return StatusCode(401, "Insert unsuccesful");
    }
    
    [HttpPost("login", Name = "LoginUser")]
    public async Task<IActionResult> Login(User user) {
        DBUserContext context = new DBUserContext();
        
        bool res = await context.LoginUser(user);

        if (res == true)
            return StatusCode(200, "Login succesful!");
        else
            return StatusCode(401, "Login unsuccesful");
    }
    
    [HttpDelete("delete", Name = "DeleteUser")]
    public async Task<IActionResult> Delete(string username) {
        DBUserContext context = new DBUserContext();
        
        int res = await context.DeleteUser(username);

        if (res == 1)
            return StatusCode(200, "Delete succesful!");
        else
            return StatusCode(401, "Delete unsuccesful");
    }
    
    [HttpPatch("patch", Name = "PatchUser")]
    public async Task<IActionResult> Patch(User user) {
        DBUserContext context = new DBUserContext();
        
        int res = await context.PatchUser(user);

        if (res == 1)
            return StatusCode(200, "Patch succesful!");
        else
            return StatusCode(401, "Patch unsuccesful");
    }

}