using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using DBMicroservice.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DBMicroservice.Controllers { }

[ApiController]
[Route("[controller]")]
public class ServerController : ControllerBase {

    [HttpGet("getServer", Name = "GetServer")]
    public async Task<IEnumerable<Server>> GetServers() {
        DBServerContext context = new DBServerContext();
        
        List<Server> res = await context.GetServers();

        return Enumerable.Range(0, res.Count).Select(i => res[i]);
    }
    
    [HttpGet("getWhitelist", Name = "GetWhitelist")]
    public async Task<IEnumerable<User>> GetWhitelist(string serverName) {
        DBServerContext context = new DBServerContext();
        
        List<User> res = await context.GetServerWhitelist(serverName);

        return Enumerable.Range(0, res.Count).Select(i => res[i]);
    }
    
    [HttpGet("getAdmin", Name = "GetAdmin")]
    public async Task<IEnumerable<User>> GetAdmin(string serverName) {
        DBServerContext context = new DBServerContext();
        
        List<User> res = await context.GetServerAdmins(serverName);

        return Enumerable.Range(0, res.Count).Select(i => res[i]);
    }
    
    [HttpGet("getServerSettings", Name = "GetServerSettings")]
    public async Task<ServerSettings> GetServerSettings(string serverName) {
        DBServerContext context = new DBServerContext();
        
        ServerSettings res = await context.GetServerSettings(serverName);

        return res;
    }
    
    [HttpPost("insertServer", Name = "InsertServer")]
    public async Task<IActionResult> InsertServer(Server server) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.InsertServer(server);

        if (res == 1)
            return StatusCode(200, "Insert succesful!");
        else
            return StatusCode(401, "Insert unsuccesful");
    }
    
    [HttpPost("insertAdmin", Name = "InsertAdmin")]
    public async Task<IActionResult> InsertAdmin(string username, string serverName) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.InsertServerAdmin(username, serverName);

        if (res == 1)
            return StatusCode(200, "Insert succesful!");
        else
            return StatusCode(401, "Insert unsuccesful");
    }
    
    [HttpPost("insertWhitelist", Name = "InsertWhitelist")]
    public async Task<IActionResult> InsertWhitelist(string username, string serverName) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.InsertServerWhitelist(username, serverName);

        if (res == 1)
            return StatusCode(200, "Insert succesful!");
        else
            return StatusCode(401, "Insert unsuccesful");
    }
    
    [HttpPost("insertSettings", Name = "InsertSettings")]
    public async Task<IActionResult> InsertSettings(string serverName, ServerSettings settings) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.InsertServerSettings(serverName, settings);

        if (res == 1)
            return StatusCode(200, "Insert succesful!");
        else
            return StatusCode(401, "Insert unsuccesful");
    }

    [HttpDelete("deleteServer", Name = "DeleteServer")]
    public async Task<IActionResult> DeleteServer(string serverName) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.DeleteServer(serverName);

        if (res == 1)
            return StatusCode(200, "Delete succesful!");
        else
            return StatusCode(401, "Delete unsuccesful");
    }
    
    [HttpDelete("deleteAdmin", Name = "DeleteAdmin")]
    public async Task<IActionResult> DeleteAdmin(string username, string serverName) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.DeleteServerAdmin(username, serverName);

        if (res == 1)
            return StatusCode(200, "Delete succesful!");
        else
            return StatusCode(401, "Delete unsuccesful");
    }
    
    [HttpDelete("deleteWhitelist", Name = "DeleteWhitelist")]
    public async Task<IActionResult> DeleteWhitelist(string username, string serverName) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.DeleteServerWhitelist(username, serverName);

        if (res == 1)
            return StatusCode(200, "Delete succesful!");
        else
            return StatusCode(401, "Delete unsuccesful");
    }

    [HttpPatch("patchServer", Name = "PatchServer")]
    public async Task<IActionResult> PatchServer(Server server) {
        DBServerContext context = new DBServerContext();
        
        int res = await context.PatchServer(server);

        if (res == 1)
            return StatusCode(200, "Patch succesful!");
        else
            return StatusCode(401, "Patch unsuccesful");
    }
    
    [HttpPatch("patchSettings", Name = "PatchSettings")]
    public async Task<IActionResult> PatchSettings(string serverName, ServerSettings settings) {
        DBServerContext context = new DBServerContext();

        int res = await context.PatchServerSettings(serverName, settings);

        if (res == 1)
            return StatusCode(200, "Patch succesful!");
        else
            return StatusCode(401, "Patch unsuccesful");
    }

}