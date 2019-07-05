<template>
  <v-app>
			
		<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
						<router-link :to="{ path: '/login' }">
						<v-icon x-large>mdi-account-circle</v-icon>
						</router-link>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Lynx Hawk</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense light>
        <v-divider></v-divider>
			<router-link :to="{ path: '/myspace' }">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
				
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="black--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
					
        </v-list-tile>
				</router-link>
      </v-list>
    </v-navigation-drawer>
		
    <v-toolbar app>
			
			<v-toolbar-title class="headline text-uppercase">
        <span>GAMES</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
			
				
			<v-toolbar-items class="hidden-sm-and-down">
				<!--<v-icon large>home</v-icon>-->
				<v-btn flat color="blue"><router-link :to="{ path: '/' }">INDEX</router-link></v-btn>
				<v-btn flat color="cyan"><router-link :to="{ path: '/gamelist' }">ACTION</router-link></v-btn>
				<v-btn flat color="green">ROLE-PLAYING</v-btn>
				<v-btn flat color="red">Strategy</v-btn>
				<v-btn flat color="yellow">Simulation</v-btn>
				<v-btn flat color="orange">Sports</v-btn>
				<v-btn flat color="purple">INDIE</v-btn>
				<v-btn flat color="dark">OTHER</v-btn>
				<v-text-field hide-details prepend-icon="search" single-line>
				</v-text-field>
				
				<v-btn icon large @click.stop="drawer = !drawer">
				<v-icon large>mdi-account-circle</v-icon>
				</v-btn>
					
			</v-toolbar-items>
			
			<v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
					<v-list-tile>
						<v-btn large icon @click.stop="drawer = !drawer">
						<v-icon large>mdi-account-circle</v-icon>
						</v-btn>
					</v-list-tile>
					
          <v-list-tile>
						<v-btn flat color="blue"><router-link :to="{ path: '/' }">INDEX</router-link></v-btn>
          </v-list-tile>
					
					<v-list-tile>
					  <v-btn flat color="cyan"><router-link :to="{ path: '/gamelist' }">ACTION</router-link></v-btn>
					</v-list-tile>
					
					<v-list-tile>
					  <v-btn flat color="green">ROLE-PLAYING</v-btn>
					</v-list-tile>
					
					<v-list-tile>
					  <v-btn flat color="red">Strategy</v-btn>
					</v-list-tile>
					
					<v-list-tile>
					 <v-btn flat color="yellow">Simulation</v-btn>
					</v-list-tile>
					
					<v-list-tile>
					 <v-btn flat color="orange">Sports</v-btn>
					</v-list-tile>
					
					<v-list-tile>
					 <v-btn flat color="purple">INDIE</v-btn>
					</v-list-tile>
					
					<v-list-tile>
					 <v-btn flat color="dark">OTHER</v-btn>
					</v-list-tile>
					
					
        </v-list>
      </v-menu>
			
    </v-toolbar>
      <v-btn blue fab fixed bottom right @click="backTop">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
			
    <v-content>
			<router-view></router-view>
      <!--<Index/>-->
    </v-content>
		
		<v-footer light height="auto">
    <v-card class="flex"><!--flattile-->
      <v-card-title class="blue-grey darken-1 teal">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="blue-grey darken-2 justify-center">
        &copy;2019 — <strong>LynxHawk</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
//import Index from './components/Index'

export default {
  name: 'App',
  //components: {
  //  Index
  //},
	data: () => ({
			drawer:null,
			items: [
          { icon: 'dashboard', title: 'Home'},
          { icon: 'question_answer',title: 'About'},
					{ icon: 'mdi-heart', title: 'Favorite games' },
					{ icon: 'mdi-bookmark-multiple', title: 'Bookmark games' },
					{ icon: 'mdi-forum', title: 'My discussion' },
					{ icon: 'mdi-bell', title: 'Notification' },
					{ icon: 'chat_bubble', title: 'Send feedback' },
					{ icon: 'help', title: 'Help' },
					{ icon: 'phonelink', title: 'App downloads' },
					{ icon: 'settings', title: 'Settings' }
        ],
      icons: [
        'mdi-qqchat',
        'mdi-twitter',
        'mdi-github-circle',
        'mdi-steam',
        'mdi-email'
      ]
    }),
	mounted () {
		window.addEventListener('scroll', this.scrollToTop)
	},
	destroyed () {
		window.removeEventListener('scroll', this.scrollToTop)
	},
	methods: {
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
		backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		scrollToTop () {
			let that = this
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			that.scrollTop = scrollTop
			if (that.scrollTop > 60) {
				that.btnFlag = true
			} else {
				that.btnFlag = false
			}
		}
	}
}
</script>

<style>
a{
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
	color: #000000;
}
</style>
