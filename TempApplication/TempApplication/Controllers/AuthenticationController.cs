using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TempApplication;


namespace TempApplication.Controllers { }

[ApiController]
[Route("[controller]")]
public class AuthenticationController : ControllerBase {

    [HttpPost(Name = "PostLogin")]
    public async Task<IActionResult> Post(User user) {
        HttpClient client = new HttpClient();
        List<User>? res;

        var response = await client.GetAsync("http://localhost:5115/User");

        if (response.IsSuccessStatusCode) {
            var content = await response.Content.ReadAsStringAsync();
            res = JsonSerializer.Deserialize<List<User>>(content);
            
            //Console.WriteLine(content.ToString());
            //Console.WriteLine(res.Count);
            foreach (User u in res) {
                if (u.Equals(user))
                    return StatusCode(200, "Login succesful!");
            }
        }
        return StatusCode(401, "Login unsuccesful");
    }

}