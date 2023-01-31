import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index.vue'),
    redirect: { name: 'discover' },
    children: [
      {
        path: 'discover',
        name: 'discover',
        component: () => import('@/views/discover/Index.vue'),
        meta: {
          menu: 'discover',
          keepAlive: true
        }
      },
      {
        path: 'music',
        name: 'music',
        component: () => import('@/views/music/Index.vue'),
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
        component: () => import('@/views/video/Index.vue'),
        redirect: { name: 'videoList' },
        meta: {
          menu: 'video',
          title: '视频',
          keepAlive: true
        },
        children: [
          {
            path: 'list',
            name: 'videoList',
            component: () => import('@/views/video/videoList/Index.vue'),
            meta: {
              menu: 'video',
              title: '视频',
              keepAlive: true
            }
          },
          {
            path: 'mv',
            name: 'mvList',
            component: () => import('@/views/mv/mvList/Index.vue'),
            meta: {
              menu: 'video',
              title: 'mv',
              keepAlive: true
            }
          }
        ]
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
        component: () => import('@/views/playlist/Index.vue')
      },
      {
        path: 'artistDetail',
        name: 'artistDetail',
        component: () => import('@/views/artist/ArtistDetail.vue')
      },
      {
        path: 'album',
        name: 'album',
        component: () => import('@/views/album/Index.vue')
      },
      {
        path: 'mvDetail/:id?',
        name: 'mvDetail',
        component: () => import('@/views/mv/MvDetail/index.vue')
      },
      {
        path: 'videoDetail/:id?',
        name: 'videoDetail',
        component: () => import('@/views/video/videoDetail/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
