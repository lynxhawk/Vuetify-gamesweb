<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar light color="white">
                <v-toolbar-title>Sign in</v-toolbar-title>
                <v-spacer></v-spacer>
              
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Username" type="text"></v-text-field>
				  <v-text-field prepend-icon="email" name="email" label="Email" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
				  <v-text-field id="passwordagain" prepend-icon="lock" name="passwordagain" label="Passwordagain" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
					<v-btn color="black" flat>
					<router-link :to="{ path: '/' }">
					Sign in
					</router-link>
					</v-btn>
					
					<v-btn color="black" flat>
					<router-link :to="{ path: '/' }">
					Cancel
					</router-link>
					</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>


<style>
a{
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>