using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TempApplication;

namespace TempApplication.Controllers { }

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase {

    private readonly string connectionString = "connString";


    [HttpGet(Name = "GetUsers")]
    public async Task<IEnumerable<User>> Get() {
        List<User> res = new List<User>();
        
        using (SqlConnection connection = new SqlConnection(connectionString)) {
            await connection.OpenAsync();

            string query = "SELECT * FROM myUser";
            using (SqlCommand command = new SqlCommand(query, connection)) {
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        // Process each row of the result set
                        User temp = new User {username = reader.GetString(0), userPassword = reader.GetString(1)};
                        res.Add(temp);
                        //Console.WriteLine(temp.ToString());
                    }
                }
            }
        }

        return Enumerable.Range(0, res.Count).Select(i => res[i]);
    }

}