
using System.Threading.Tasks;

namespace AccountMicroservice.Configuration {
    public interface IConfiguration {
        string GetDBConnectionString();
    }
}

