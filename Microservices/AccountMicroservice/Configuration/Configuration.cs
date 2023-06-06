using System;
using System.Threading.Tasks;
using Azure;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

namespace AccountMicroservice.Configuration {
    public class Configuration : IConfiguration {

        private string DBConnString;

        public Configuration() {
            LoadDBConnectionString().Wait();
        }

        private async Task LoadDBConnectionString() {
            const string secretName = "DBConnectionString";
            var keyVaultName = "MinecraftSaaS";
            var kvUri = $"https://{keyVaultName}.vault.azure.net";
            
            var client = new SecretClient(new Uri(kvUri), new DefaultAzureCredential());

            var secret = await client.GetSecretAsync(secretName);
            DBConnString = secret.Value.Value;
        }
        
        public string GetDBConnectionString() {
            return DBConnString;
        }
    }
}

