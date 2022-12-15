import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Root.vue'),
    redirect: { name: 'discover' },
    children: [
      {
        path: 'discover',
        name: 'discover',
        component: () => import('@/views/discover/Discover.vue'),
        meta: {
          menu: 'discover',
          keepAlive: true
        }
      },
      {
        path: 'music',
        name: 'music',
        component: () => import('@/views/music/Music.vue'),
        redirect: { name: 'picked' },
        meta: {
          menu: 'music'
        },
        children: [
          {
            path: 'picked',
            name: 'picked',
            component: () => import('@/views/music/picked/Picked.vue'),
            meta: {
              menu: 'music',
              title: '精选',
              keepAlive: true
            }
          },
          {
            path: 'toplist',
            name: 'toplist',
            component: () => import('@/views/music/topList/TopList.vue'),
            meta: {
              menu: 'music',
              title: '排行榜',
              keepAlive: true
            }
          },
          {
            path: 'artist',
            name: 'artist',
            component: () => import('@/views/music/artist/Artist.vue'),
            meta: {
              menu: 'music',
              title: '歌手',
              keepAlive: true
            }
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/music/category/Category.vue'),
            meta: {
              menu: 'music',
              title: '歌单',
              keepAlive: true
            }
          },
          {
            path: 'topsong',
            name: 'topsong',
            component: () => import('@/views/music/topSong/TopSong.vue'),
            meta: {
              menu: 'music',
              title: '新歌速递',
              keepAlive: true
            }
          }
        ]
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video/Video.vue'),
        meta: {
          menu: 'video',
          title: '视频',
          keepAlive: true
        }
      },
      {
        path: 'dj',
        name: 'dj',
        component: () => import('@/views/dj/DJ.vue'),
        meta: {
          menu: 'dj',
          title: '电台',
          keepAlive: true
        }
      },
      {
        path: 'playlist',
        name: 'playlist',
        component: () => import('@/views/playlist/PlayList.vue')
      }
      // {
      //   path: 'artistDetail',
      //   name: 'artistDetail',
      //   component: () => import('@/views/artist/ArtistDetail.vue')
      // },
      // {
      //   path: 'album',
      //   name: 'album',
      //   component: () => import('@/views/album/Album.vue')
      // },

      // {
      //   path: 'mvDetail',
      //   name: 'mvDetail',
      //   component: () => import('@/views/mv/mvDetail.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
