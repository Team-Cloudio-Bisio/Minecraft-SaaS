
using System.Data.SqlClient;

namespace DBMicroservice.Data { }

public class DBConnectionContext {

    private readonly string connectionString = "connString";

    private SqlConnection connection;

    public DBConnectionContext() {
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