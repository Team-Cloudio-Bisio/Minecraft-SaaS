using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using DBMicroservice.Model;

namespace DBMicroservice.Data {
        
    public class DBUserContext {

        private DBConnectionUtils _connection;

        public DBUserContext(string connectionString) {
            _connection = new DBConnectionUtils(connectionString);
        }

        public async Task<List<User>> GetUsers() {
            List<User> users = new List<User>();
            
            string query = "SELECT * FROM myUser";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        users.Add(new User {username = reader.GetString(0), userPassword = reader.GetString(1)});
                    }
                }
            }
            
            _connection.CloseConnection();

            return users;
        }

        public async Task<int> InsertUser(User user) {
            int rowsAffected = - 1;
            
            string query = "INSERT INTO myUser (username, userPassword) VALUES (@Value1, @Value2)";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value1", user.username);
                command.Parameters.AddWithValue("@Value2", user.userPassword);
            
                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }
        
        public async Task<int> DeleteUser(string username) {
            int rowsAffected = - 1;
            
            string query = "DELETE FROM myUser WHERE username=@Value1";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value1", username);
            
                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }
        
        public async Task<int> PatchUser(User user) {
            int rowsAffected = - 1;
            
            string query = "UPDATE myUser SET userPassword = @NewValue1 WHERE username = @UserId";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@NewValue1", user.userPassword);
                command.Parameters.AddWithValue("@UserId", user.username);
                
                rowsAffected = command.ExecuteNonQuery();
            }

            _connection.CloseConnection();
            return rowsAffected;
        }

        public async Task<bool> LoginUser(User user) {
            List<User> users = await GetUsers();
            
            foreach (User u in users) {
                if (u.Equals(user))
                    return true;
            }

            return false;
        }
    }
}
