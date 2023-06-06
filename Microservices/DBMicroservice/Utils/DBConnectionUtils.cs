
using System.Data.SqlClient;

namespace DBMicroservice.Data {
    
    public class DBConnectionUtils {

        private SqlConnection connection;

        public DBConnectionUtils(string connectionString) {
            connection = new SqlConnection(connectionString);
        }

        public SqlConnection GetConnection() {
            connection.Open();
            return connection;
        }

        public void CloseConnection() {
            connection.Close();
        }
    
    }
}
