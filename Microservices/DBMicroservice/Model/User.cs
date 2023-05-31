using System;

namespace DBMicroservice.Model {
    public class User {
        public string username { get; set; }
        
        public string userPassword { get; set; }

        public string ToString() {
            return username + "     " + userPassword;
        }

        public bool Equals(User u) {
            return this.username.Equals(u.username) && this.userPassword.Equals(u.userPassword);
        }
        
    }
}