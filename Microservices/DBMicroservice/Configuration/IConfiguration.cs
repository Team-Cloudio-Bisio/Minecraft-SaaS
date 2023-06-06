
using System.Threading.Tasks;

namespace DBMicroservice.Configuration {
    public interface IConfiguration {
        string GetDBConnectionString();
    }
}

