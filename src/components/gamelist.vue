<template>
  <v-container grid-list-xl>
	  
	<v-dialog v-model="dialog" width="520px">
	  <v-card>
	    <v-card-title class="headline grey lighten-2" primary-title>
	      Dark Souls III
	  <v-btn icon flat>
	  <v-icon>favorite</v-icon>
	  </v-btn>
	  <v-btn icon flat>
	  <v-icon>bookmark</v-icon>	
	  </v-btn>
	    </v-card-title>
	<video src="../assets/movie480.webm" controls="controls" width="500px"></video>
	    <v-card-text class="font-weight-medium" v-for="gameinfo in gameinfos" :key="gameinfo" width="500px">
	    		   <label>{{gameinfo}}</label>
	    </v-card-text>
	    <v-divider></v-divider>
	    <v-card-actions>
	      <v-spacer></v-spacer>
	  <v-btn color="blue darken-1" flat>
			<router-link :to="{ path: '/gameinfo' }">More</router-link>
			<!--<router-link to="/gameinfo">More</router-link>-->
			</v-btn>
	      <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
	    </v-card-actions>
	  </v-card>
	</v-dialog>  
	
    <v-layout v-bind="binding">
      <v-flex>
        <v-card light color="white">
		<v-card-text><h2>Recommand</h2></v-card-text>
		<v-layout row wrap><!-- xs12/6--> 
		    <v-flex v-for="id in ids" :key="id" xs4>
			<v-hover>
		      <v-card  slot-scope="{ hover }" dark height="200">
				<v-img :src="id.src" height="200">
				<v-expand-transition>
		        <div v-if="hover"
		          class="d-flex transition-fast-in-fast-out oacity v-card--reveal display-3 white--text"
		          style="height: 20%;">
		          <v-btn flat>
		          <v-icon>favorite</v-icon>
				</v-btn>
				<v-btn flat>
				<v-icon>bookmark</v-icon>	
				</v-btn>
				<v-btn flat @click="dialog=true">
				<v-icon>mdi-page-next-outline</v-icon>
				</v-btn>
		        </div>
		      </v-expand-transition></v-img>
				<v-card-actions>
		          <v-spacer></v-spacer>
		          </v-card-actions>
		      </v-card>
			</v-hover>
		    </v-flex>
		</v-layout>
		</v-card>
	  </v-flex>
	
      <v-flex>
        <v-card light color="white">
          <v-card-title><h2>More</h2></v-card-title>
		  <v-layout row wrap>
		  <v-flex v-for="id1 in id1s" :key="id1" xs3>
		    	<v-hover>
		      <v-card  slot-scope="{ hover }" dark height="200">
		    	<v-img :src="id1.src" height="200">
		    	<v-expand-transition>
		        <div v-if="hover"
		          class="d-flex transition-fast-in-fast-out oacity v-card--reveal display-3 white--text"
		          style="height: 20%;">
		          <v-btn flat icon>
		          <v-icon>favorite</v-icon>
		    		</v-btn>
		    		<v-btn flat icon>
		    		<v-icon>bookmark</v-icon>	
		    		</v-btn>
		    		<v-btn flat icon @click="dialog=true">
		    		<v-icon>mdi-page-next-outline</v-icon>	
		    		</v-btn>
		        </div>
		      </v-expand-transition></v-img>
		    	<v-card-actions>
		      <v-spacer></v-spacer>
		      </v-card-actions>
		      </v-card>
		    	</v-hover>
		    </v-flex>
			</v-layout>
			
			<v-layout row wrap>
			<v-flex v-for="id1 in id1s" :key="id1" xs3>
			  	<v-hover>
			    <v-card  slot-scope="{ hover }" dark height="200">
			  	<v-img :src="id1.src" height="200">
			  	<v-expand-transition>
			      <div v-if="hover"
			        class="d-flex transition-fast-in-fast-out oacity v-card--reveal display-3 white--text"
			        style="height: 20%;">
			        <v-btn flat icon>
			        <v-icon>favorite</v-icon>
			  		</v-btn>
			  		<v-btn flat icon>
			  		<v-icon>bookmark</v-icon>	
			  		</v-btn>
			  		<v-btn flat icon @click="dialog=true">
			  		<v-icon>mdi-page-next-outline</v-icon>	
			  		</v-btn>
			      </div>
			    </v-expand-transition></v-img>
			  	<v-card-actions>
			    <v-spacer></v-spacer>
			    </v-card-actions>
			    </v-card>
			  	</v-hover>
			  </v-flex>
			</v-layout>
			
			<v-layout row wrap>
			<v-flex v-for="id1 in id1s" :key="id1" xs3>
			  	<v-hover>
			    <v-card  slot-scope="{ hover }" dark height="200">
			  	<v-img :src="id1.src" height="200">
			  	<v-expand-transition>
			      <div v-if="hover"
			        class="d-flex transition-fast-in-fast-out oacity v-card--reveal display-3 white--text"
			        style="height: 20%;">
			        <v-btn flat icon>
			        <v-icon>favorite</v-icon>
			  		</v-btn>
			  		<v-btn flat icon>
			  		<v-icon>bookmark</v-icon>	
			  		</v-btn>
			  		<v-btn flat icon @click="dialog=true">
			  		<v-icon>mdi-page-next-outline</v-icon>	
			  		</v-btn>
			      </div>
			    </v-expand-transition></v-img>
			  	<v-card-actions>
			    <v-spacer></v-spacer>
			    </v-card-actions>
			    </v-card>
			  	</v-hover>
			  </v-flex>
			</v-layout>
			
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
	data:()=>({
		dialog: false,
		gameinfos:[
			'Developer:FromSoftware',
			'Publisher:fromsoftware,BANDAI NAMCO Entertainment',
			'发行日期:2016年4月12日',
			'分类：ARPG',
			'语言：英语 简体中文 繁体中文 等',
			'分级 ：PEGI 16 	Violence, Online Gameplay',
			'Platform:PC & XBOX & PS4'	
		],
		ids:[
			{
				src:'../static/images/600918.jpg'
			},
			{
				src:'../static/images/acs.jpg'
			},
			{
				src:'../static/images/life2.jpg'
			}
		],
		id1s:[
			{
				src:'../static/images/life2.jpg'
			},
			{
				src:'../static/images/life.jpg'		
			},
			{
				src:'../static/images/ori_backup.jpg'
			},
			{
				src:'../static/images/product_098_4.jpg'
			}
		]
	}),
    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    }
  }
</script>

<style>
	
</style>
