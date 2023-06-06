using System;
using System.Threading.Tasks;
using Azure;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

namespace DBMicroservice.Configuration {
    public class Configuration : IConfiguration {

        private string DBConnString;

        public Configuration() {
            LoadDBConnectionString().Wait();
        }

        private async Task LoadDBConnectionString() {
            const string secretName = "DBConnectionString";
            var keyVaultName = "MinecraftSaaS";
            var kvUri = $"https://{keyVaultName}.vault.azure.net";
            string connectionString;

            if (IsRunningOnAzure()) {
                var client = new SecretClient(new Uri(kvUri), new DefaultAzureCredential());
                var secret = await client.GetSecretAsync(secretName);
                connectionString = secret.Value.Value;
            }
            else {
                connectionString = "connectionString";
            }

            DBConnString = connectionString;
        }
        
        private bool IsRunningOnAzure() {
            return Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT").Equals("Release");
        }
        
        public string GetDBConnectionString() {
            return DBConnString;
        }
    }
}

