<template>
  <v-container fluid>
    <v-layout row>
      <v-flex shrink pa-1>
        <v-card light color="white">
			
		<v-toolbar>
		<v-toolbar-title>Dark Souls III</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn icon>
        <v-icon>favorite</v-icon>
        </v-btn>
		<v-btn icon>
        <v-icon>bookmark</v-icon>
        </v-btn>
		</v-toolbar>
		<video src="../assets/movie480.webm" controls="controls" width="500px"></video>
        </v-card>
      </v-flex>
	  
      <v-flex grow pa-1>
        <v-card light color="white">	
		<div class="hide-overflow" style="position: relative;">
		<v-toolbar absolute dark scroll-off-screen scroll-target="#scrolling-techniques">
			<v-toolbar-title>gameInfo</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>
		<div id="scrolling-techniques" class="scroll-y" style="max-height: 350px;">
        <v-container style="height: 400px;">
		<v-card-text class="font-weight-medium" v-for="gameinfo in gameinfos" :key="gameinfo" width="500px">
   		    <label>{{gameinfo}}</label>
        </v-card-text>
	    </v-container>
		</div>
		</div>	
		</v-card>
      </v-flex>
	</v-layout>
	
	<div>
    <v-expansion-panel expand dark>
      <v-expansion-panel-content class="deep-purple darken-2">
        <template v-slot:header>
          <div>Game's News</div>
        </template>
        <v-card light>
          <v-card-text class="white" v-for="New in News" :key="New">
			{{New}}
		  </v-card-text>
        </v-card>
      </v-expansion-panel-content>
	  
	  <v-expansion-panel-content class="indigo darken-2">
	    <template v-slot:header>
	      <div>Game's Guide</div>
	    </template>
	    <v-card>
	      <v-card-text class="white">
			<a href="https://darksouls.fandom.com/wiki/Dark_Souls_III">fandom_darksouls3</a><br />
			<a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki">fextralife_darksouls3</a><br />
			<a href="https://www.gamersky.com/z/darksouls3/">youmin_darksouls3</a>
		  </v-card-text>
	    </v-card>
	  </v-expansion-panel-content>
	  
	  <v-expansion-panel-content class="blue darken-3">
	    <template v-slot:header>
	      <div >Game's Picture</div>
	    </template>
	    <v-card>
		<v-carousel hide-delimiters>
		<v-carousel-item
		v-for="(pic,i) in pics"
		:key="i"
		:src="pic.src"
		></v-carousel-item>
		</v-carousel>
	    </v-card>
	  </v-expansion-panel-content>
	  
	  <v-expansion-panel-content class="light-blue darken-2">
	    <template v-slot:header>
	      <div>Game's Discussion</div>
	    </template>
		
	    <v-card light>
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
	    </v-card>
	  </v-expansion-panel-content>
	  
	  <v-expansion-panel-content class="cyan darken-2">
	    <template v-slot:header>
	      <div>Game's Mod</div>
	    </template>
	    <v-card>
	      <v-card-text class="grey lighten-3">
			<a>Mod Download1</a><br />
			<a>Mod Download2</a><br />
			<a>Mod Download3</a>
		  </v-card-text>
	    </v-card>
	  </v-expansion-panel-content>
	  
	  <v-expansion-panel-content class="teal darken-2">
	    <template v-slot:header>
	      <div>System Requirements</div>
	    </template>
	    <v-card light>
	      <v-card-text class="white" v-for="Requirement in Requirements" :key="Requirement">
			{{Requirement}}
		  </v-card-text>
	    </v-card>
	  </v-expansion-panel-content>
	  
	  
    </v-expansion-panel>
  </div>
	
  </v-container>
</template>

<script>
export default{
	data:()=>({
		gameinfos:[
		'Developer:FromSoftware',
		'Publisher:fromsoftware,BANDAI NAMCO Entertainment',
		'发行日期:2016年4月12日',
		'分类：ARPG',
		'语言：英语 简体中文 繁体中文 等',
		'分级 ：PEGI 16 	Violence, Online Gameplay',
		'Platform:PC & XBOX & PS4'	
		],
		Requirements:[
		'Minimum:',
		'Windows',
		'OS: Windows 7 SP1 64bit, Windows 8.1 64bit Windows 10 64bit',
		'Processor: Intel Core i3-2100 3.1 GHz / AMD® FX-6300 3.6 Ghz',
		'Memory: 4 GB RAM',
		'Graphics: NVIDIA® GeForce GTX 750 Ti / ATI Radeon HD 7950',
		'DirectX: Version 11',
		'Network: Broadband Internet connection',
		'Storage: 50 GB available space',
		'Sound Card: DirectX 11 sound device',
		'Supported Languages: English, French, Italian, German, Spanish, Polish, Russian, Portuguese-Brazil, Simplified Chinese, Traditional Chinese, Japanese, Korean'
		],
		News:[
		'Winner of gamescom award 2015 "Best RPG" and over 35 E3 2015 Awards and Nominations',
		'DARK SOULS™ III continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series.',
		'As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics.',
		'Now only embers remain… Prepare yourself once more and Embrace The Darkness!'
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
        ],
		pics:[
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
		]
	})
}
	
</script>

<style>
</style>
