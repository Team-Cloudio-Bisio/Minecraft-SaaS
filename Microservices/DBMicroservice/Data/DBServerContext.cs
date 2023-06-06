using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using DBMicroservice.Model;

namespace DBMicroservice.Data {
    
    public class DBServerContext {

        private DBConnectionUtils _connection;

        public DBServerContext(string connectionString) {
            _connection = new DBConnectionUtils(connectionString);
        }

        public async Task<List<Server>> GetServers() {
            List<Server> servers = new List<Server>();
            
            string query = "SELECT * FROM myServer";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        servers.Add(new Server {
                            serverName = reader.GetString(0), ip = reader.GetString(1),
                            containerID = reader.GetString(2),
                            settingsID = reader.IsDBNull(3) ? null : reader.GetGuid(3)
                        });
                    }
                }
            }
            
            _connection.CloseConnection();

            return servers;
        }
        
        public async Task<int> InsertServer(Server server) {
            int rowsAffected = - 1;
            
            string query = "INSERT INTO myServer (serverName, ip, containerID) VALUES (@Value1, @Value2, @Value3)";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value1", server.serverName);
                command.Parameters.AddWithValue("@Value2", server.ip);
                command.Parameters.AddWithValue("@Value3", server.containerID);
            
                rowsAffected = command.ExecuteNonQuery();
            }

            _connection.CloseConnection();

            if (rowsAffected == 1)
                InsertServerSettings(server.serverName, new ServerSettings());
            
            return rowsAffected;
        }
        
        public async Task<int> PatchServer(Server server) {
            int rowsAffected = - 1;
            
            string query = "UPDATE myServer SET ip = @NewValue1, containerID = @NewValue2, settingsId = @NewValue3 WHERE serverName = @SeverId";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@NewValue1", server.ip);
                command.Parameters.AddWithValue("@NewValue2", server.containerID);
                command.Parameters.AddWithValue("@NewValue3", server.settingsID);
                command.Parameters.AddWithValue("@SeverId", server.serverName);
                
                rowsAffected = command.ExecuteNonQuery();
            }

            _connection.CloseConnection();
            return rowsAffected;
        }
        
        public async Task<int> DeleteServer(string serverName) {
            int rowsAffected = - 1;
            SqlConnection connection = _connection.GetConnection();
            Guid? id = null;
            
            
            // due to dependencies we need to delete this lists before
            DeleteAllAdmins(serverName);
            DeleteAllWhitelist(serverName);

            // get settingsID in order to delete it after we delete the server (as we cannot do it before)
            string query1 = "SELECT settingsID FROM myServer WHERE serverName = @ServerName";
            using (SqlCommand command = new SqlCommand(query1, connection)) {
                command.Parameters.AddWithValue("@ServerName", serverName);
                
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        id = reader.IsDBNull(0) ? null : reader.GetGuid(0);
                    }
                }
            }
            
            string query2 = "DELETE FROM myServer WHERE serverName=@Value";
            using (SqlCommand command = new SqlCommand(query2, connection)) {
                command.Parameters.AddWithValue("@Value", serverName);
            
                rowsAffected = command.ExecuteNonQuery();
            }

            _connection.CloseConnection();

            if (id != null) {
                rowsAffected = await DeleteServerSettings(id);
            }

            return rowsAffected;
        }
        
        public async Task<List<User>> GetServerAdmins(string serverName) {
            List<User> admins = new List<User>();
            
            string query = "SELECT username FROM myServerAdmin WHERE serverName = @ServerName";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@ServerName", serverName);
                
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        admins.Add(new User {username = reader.GetString(0)});
                    }
                }
            }
            
            _connection.CloseConnection();

            return admins;
        }

        public async Task<int> InsertServerAdmin(string username, string serverName) {
            int rowsAffected = - 1;
            
            string query = "INSERT INTO myServerAdmin (username, serverName) VALUES (@Value1, @Value2)";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value1", username);
                command.Parameters.AddWithValue("@Value2", serverName);
            
                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }
        
        public async Task<int> DeleteServerAdmin(string serverName, string username) {
            int rowsAffected = - 1;
            
            string query = "DELETE FROM myServerAdmin WHERE (serverName=@Value1 AND username=@Value2)";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value1", serverName);
                command.Parameters.AddWithValue("@Value2", username);

                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }
        
        public async Task<List<User>> GetServerWhitelist(string serverName) {
            List<User> whitelist = new List<User>();
            
            string query = "SELECT username FROM myServerWhitelist WHERE serverName = @ServerName";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@ServerName", serverName);
                
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        whitelist.Add(new User {username = reader.GetString(0)});
                    }
                }
            }
            
            _connection.CloseConnection();

            return whitelist;
        }
        
        public async Task<int> InsertServerWhitelist(string username, string serverName) {
            int rowsAffected = - 1;
            
            string query = "INSERT INTO myServerWhitelist (username, serverName) VALUES (@Value1, @Value2)";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value1", username);
                command.Parameters.AddWithValue("@Value2", serverName);
            
                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }
        
        public async Task<int> DeleteServerWhitelist(string serverName, string username) {
            int rowsAffected = - 1;
            
            string query = "DELETE FROM myServerWhitelist WHERE (serverName=@Value1 AND username=@Value2)";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value1", serverName);
                command.Parameters.AddWithValue("@Value2", username);
                
                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }

        public async Task<ServerSettings> GetServerSettings(string serverName) {
            Guid? id = null;
            ServerSettings settings = null;
            
            SqlConnection connection = _connection.GetConnection();
            
            string query1 = "SELECT settingsID FROM myServer WHERE serverName = @ServerName";
            using (SqlCommand command = new SqlCommand(query1, connection)) {
                command.Parameters.AddWithValue("@ServerName", serverName);
                
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        id = reader.IsDBNull(0) ? null : reader.GetGuid(0);
                    }
                }
            }

            if (id != null) {
                string query2 = "SELECT * FROM myServerSettings WHERE settingsID = @SettingsID";
                using (SqlCommand command = new SqlCommand(query2, connection)) {
                    command.Parameters.AddWithValue("@SettingsID", id);
                
                    using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                        while (await reader.ReadAsync()) {
                            settings = new ServerSettings {
                                settingsID = reader.GetGuid(0),
                                seed = reader.GetInt32(1),
                                maxPlayers = reader.GetInt32(2),
                                difficulty = (Difficulty) Enum.Parse(typeof(Difficulty), reader.GetString(3), true),
                                gamemode = (Gamemode) Enum.Parse(typeof(Gamemode), reader.GetString(4), true)
                            };
                        }
                    }
                }
            }

            _connection.CloseConnection();

            return settings;
        }
        
        public async Task<int> InsertServerSettings(string serverName, ServerSettings settings) {
            int rowsAffected = - 1;
            Guid generatedID = Guid.NewGuid();

            SqlConnection connection = _connection.GetConnection();

            string query1 = "INSERT INTO myServerSettings (settingsID, seed, maxPlayers, difficulty, gamemode) " +
                            "VALUES (@SettingsID, @Seed, @MaxPlayers, @Difficulty, @Gamemode)";

            using (SqlCommand command = new SqlCommand(query1, connection)) {
                command.Parameters.AddWithValue("@SettingsID", generatedID);
                command.Parameters.AddWithValue("@Seed", settings.seed);
                command.Parameters.AddWithValue("@MaxPlayers", settings.maxPlayers);
                command.Parameters.AddWithValue("@Difficulty", settings.difficulty.ToString().ToLower());
                command.Parameters.AddWithValue("@Gamemode", settings.gamemode.ToString().ToLower());

                rowsAffected = command.ExecuteNonQuery();
            }

            if (rowsAffected == 1) {
                string query2 = "UPDATE myServer SET settingsId = @NewValue WHERE serverName = @SeverId";
                using (SqlCommand command = new SqlCommand(query2, connection)) {
                    command.Parameters.AddWithValue("@NewValue", generatedID);
                    command.Parameters.AddWithValue("@SeverId", serverName);

                    rowsAffected = command.ExecuteNonQuery();
                }
            }

            _connection.CloseConnection();

            return rowsAffected;
        }
        
        public async Task<int> PatchServerSettings(string serverName, ServerSettings settings) {
            Guid? id = null;
            int rowsAffected = -1;
            
            SqlConnection connection = _connection.GetConnection();
            
            string query1 = "SELECT settingsID FROM myServer WHERE serverName = @ServerName";
            using (SqlCommand command = new SqlCommand(query1, connection)) {
                command.Parameters.AddWithValue("@ServerName", serverName);
                
                using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    while (await reader.ReadAsync()) {
                        id = reader.IsDBNull(0) ? null : reader.GetGuid(0);
                    }
                }
            }

            if (id != null) {
                string query2 = "UPDATE myServerSettings SET seed=@Seed, maxPlayers=@MaxPlayers, " +
                                "difficulty=@Difficulty, gamemode=@Gamemode WHERE settingsID = @SettingsID";
                using (SqlCommand command = new SqlCommand(query2, connection)) {
                    command.Parameters.AddWithValue("@SettingsID", id);
                    command.Parameters.AddWithValue("@Seed", settings.seed);
                    command.Parameters.AddWithValue("@MaxPlayers", settings.maxPlayers);
                    command.Parameters.AddWithValue("@Difficulty", settings.difficulty.ToString().ToLower());
                    command.Parameters.AddWithValue("@Gamemode", settings.gamemode.ToString().ToLower());
                
                    rowsAffected = command.ExecuteNonQuery();
                }
            }

            _connection.CloseConnection();

            return rowsAffected;
        }
        
        private async Task<int> DeleteServerSettings(Guid? settingsID) {
            int rowsAffected = - 1;
            
           
            string query = "DELETE FROM myServerSettings WHERE (settingsID=@Value)";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value", settingsID);
                
                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();

            return rowsAffected;
        }
        
        private async Task<int> DeleteAllAdmins(string serverName) {
            int rowsAffected = - 1;
            
            string query = "DELETE FROM myServerAdmin WHERE serverName=@Value";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value", serverName);

                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }
        
        private async Task<int> DeleteAllWhitelist(string serverName) {
            int rowsAffected = - 1;
            
            string query = "DELETE FROM myServerWhitelist WHERE serverName=@Value";
            using (SqlCommand command = new SqlCommand(query, _connection.GetConnection())) {
                command.Parameters.AddWithValue("@Value", serverName);

                rowsAffected = command.ExecuteNonQuery();
            }
            
            _connection.CloseConnection();
            return rowsAffected;
        }

    }
}
