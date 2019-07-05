<template>
	<v-container grid-list-md text-xs-center>
			
    <v-carousel height="500">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
	
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
   
	<v-layout row wrap><!-- xs12/6--> 
      <v-flex v-for="id in ids" :key="id" xs4>
		<v-hover>
        <v-card  slot-scope="{ hover }" dark height="100">
			<v-img :src="id.src" height="100">
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
	  
	<v-flex v-for="id1 in id1s" :key="id1" xs3>
	  	<v-hover>
	    <v-card  slot-scope="{ hover }" dark height="100">
	  	<v-img :src="id1.src" height="100">
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
	 
    <v-flex v-for="id2 in id2s" :key="id2" xs2>
      	<v-hover>
        <v-card  slot-scope="{ hover }" dark height="100">
      	<v-img :src="id2.src" height="100">
      	<v-expand-transition>
          <div v-if="hover" class="d-flex" style="height: 20%;">
            <v-btn flat icon><v-icon>favorite</v-icon></v-btn>
      		<v-btn flat icon><v-icon>bookmark</v-icon></v-btn>
      		<v-btn flat icon @click="dialog=true"><v-icon>mdi-page-next-outline</v-icon></v-btn>
          </div>
        </v-expand-transition></v-img>
      	<v-card-actions>
        <v-spacer></v-spacer>
        </v-card-actions>
        </v-card>
      	</v-hover>
    </v-flex>
		
	<v-flex v-for="id2 in id2s" :key="id2" xs2>
	  	<v-hover>
	    <v-card  slot-scope="{ hover }" dark height="100">
	  	<v-img :src="id2.src" height="100">
	  	<v-expand-transition>
	      <div v-if="hover" class="d-flex" style="height: 20%;">
	        <v-btn flat icon><v-icon>favorite</v-icon></v-btn>
	  		<v-btn flat icon><v-icon>bookmark</v-icon></v-btn>
	  		<v-btn flat icon @click="dialog=true"><v-icon>mdi-page-next-outline</v-icon></v-btn>
	      </div>
	    </v-expand-transition></v-img>
	  	<v-card-actions>
	    <v-spacer></v-spacer>
	    </v-card-actions>
	    </v-card>
	  	</v-hover>
	</v-flex>
	
	<v-flex v-for="id2 in id2s" :key="id2" xs2>
	  	<v-hover>
	    <v-card  slot-scope="{ hover }" dark height="100">
	  	<v-img :src="id2.src" height="100">
	  	<v-expand-transition>
	      <div v-if="hover" class="d-flex" style="height: 20%;">
	        <v-btn flat icon><v-icon>favorite</v-icon></v-btn>
	  		<v-btn flat icon><v-icon>bookmark</v-icon></v-btn>
	  		<v-btn flat icon @click="dialog=true"><v-icon>mdi-page-next-outline</v-icon></v-btn>
	      </div>
	    </v-expand-transition></v-img>
	  	<v-card-actions>
	    <v-spacer></v-spacer>
	    </v-card-actions>
	    </v-card>
	  	</v-hover>
	  </v-flex>
	  
	  <!--<v-flex v-for="id2 in id2s" :key="id2" xs2>
	    	<v-hover>
	      <v-card  slot-scope="{ hover }" dark height="100">
	    	<v-img :src="id2.src" height="100">
	    	<v-expand-transition>
	        <div v-if="hover" class="d-flex" style="height: 20%;">
	          <v-btn flat icon><v-icon>favorite</v-icon></v-btn>
	    		<v-btn flat icon><v-icon>bookmark</v-icon></v-btn>
	    		<v-btn flat icon @click="dialog=true"><v-icon>mdi-page-next-outline</v-icon></v-btn>
	        </div>
	      </v-expand-transition></v-img>
	    	<v-card-actions>
	      <v-spacer></v-spacer>
	      </v-card-actions>
	      </v-card>
	    	</v-hover>
	    </v-flex>-->
	  
    </v-layout>
		
		<v-divider></v-divider>

		<div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="9"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
  </v-container>
  
</template>

<script>
  export default {
    data: () => ({
		//show:false,
		page:1,
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
		],
		id2s:[
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
			},
			{
				src:'../static/images/600918.jpg'
			},
			{
				src:'../static/images/acs.jpg'
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
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ]
    })
  }
</script>

<style>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
