<template>
  <v-container fluid grid-list-md>
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
		
		<v-layout wrap row>
		
		<v-flex>
		  <v-card light color="white" width="350px">
		  <v-card-text><h2>favorite</h2></v-card-text>
		  <v-layout wrap column><!-- xs12/6--> 
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
			  <v-card light color="white" width="350px">
			  <v-card-text><h2>bookmark</h2></v-card-text>
			  <v-layout wrap column><!-- xs12/6--> 
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
				  <v-card light color="white" width="300px">
				  <v-card-text><h2>discussion</h2></v-card-text>
				    <v-list three-line>
				      <template v-for="(item, index) in items">
				  <v-subheader
				          v-if="item.header"
				          :key="item.header"
				        >
				          {{ item.header }}
				        </v-subheader>
				        <v-divider
				          v-else-if="item.divider"
				          :key="index"
				          :inset="item.inset"
				        ></v-divider>
				  
				        <v-list-tile
				          v-else
				          :key="item.title"
				          avatar
				          @click=""
				        >
				          <v-list-tile-avatar>
				            <img :src="item.avatar">
				          </v-list-tile-avatar>
				  
				          <v-list-tile-content>
				            <v-list-tile-title v-html="item.title"></v-list-tile-title>
				            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
				          </v-list-tile-content>
				        </v-list-tile>
				      </template>
				    </v-list>
				  </v-card>
				  </v-flex>
				
				</v-layout>
      
    
  </v-container>
</template>

<script>
		export default {
    data: () => ({
    dialog: false,
        items: [
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
    	src:'../static/images/600918.jpg'
          },
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
    	src:'../static/images/acs.jpg'
          },
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
    	src:'../static/images/life2.jpg'
          },
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    	src:'../static/images/ori_backup.jpg'
          }
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
		gameinfos:[
			'Developer:FromSoftware',
			'Publisher:fromsoftware,BANDAI NAMCO Entertainment',
			'发行日期:2016年4月12日',
			'分类：ARPG',
			'语言：英语 简体中文 繁体中文 等',
			'分级 ：PEGI 16 	Violence, Online Gameplay',
			'Platform:PC & XBOX & PS4'	
		],
		items: [
		      { header: 'Today' },
		      {
		        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
		        title: 'Brunch this weekend?',
		        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
		      },
		      { divider: true, inset: true },
		      {
		        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
		        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
		        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
		      },
		      { divider: true, inset: true },
		      {
		        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
		        title: 'Oui oui',
		        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
		      },
		      { divider: true, inset: true },
		      {
		        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
		        title: 'Birthday gift',
		        subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
		      },
		      { divider: true, inset: true },
		      {
		        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
		        title: 'Recipe to try',
		        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
		      }
		    ]
    })
  }
</script>