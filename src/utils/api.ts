import http from '@/utils/http'

import type { Banner } from '@/models/banner'
import type { DjProgram, Personalized, PersonalizedMv, PersonalizedNewSong } from '@/models/personalized'
import type { PlayListDetail, PlaylistHighqualityTag } from '@/models/playlist'
import type { PlayListCat } from '@/models/playlist_cat'
import type { Song } from '@/models/song'
import type { SongUrl } from '@/models/song_url'
import type { TopListDetail } from '@/models/toplist_detail'
import type { Artist } from '@/models/artist'
import type { ArtistDesc, ArtistDetail } from '@/models/artist_detail'
import type { Album } from '@/models/album'
import type { PersonalizedPrivateContent, Video, VideoGroup } from '@/models/video'
import type { VideoDetail, VideoUrl, SimiVideo } from '@/models/video_detail'
import type { SearchHotDetail, SearchSuggest } from '@/models/search'
import type { MvUrl, Mv, MvDetail, SimiMv } from '@/models/mv'
import type { PlayListHot } from '@/models/playlist_hot'
import type { UserProfile } from '@/models/user'
import type { TopSong } from '@/models/top_song'
import type { DjPersonalize, DjTodayPerfered, DjNewcomer, DjPay } from '@/models/dj'

export async function useLogin(phone: string, password: string) {
  return await http.get<{
    code: number
    cookie: string
    token: string
  }>('login/cellphone', { phone: phone, password: password })
}

export async function useLoginStatus(cookie: string) {
  const { data } = await http.get<{
    data: {
      code: number
      profile: UserProfile
    }
  }>('login/status', { cookie })

  return data
}

export async function useSongUrl(id: number) {
  const { data } = await http.get<{ data: SongUrl[] }>('song/url', { id: id })
  return data.first()
}

export async function useDetail(id: number) {
  const { songs } = await http.get<{ songs: Song[] }>('song/detail', {
    ids: id
  })
  return songs.first()
}

export async function useBanner() {
  const { banners } = await http.get<{ banners: Banner[] }>('banner', {
    type: 0
  })
  console.log(3)
  return banners
}

export async function usePersonalized() {
  const { result } = await http.get<{ result: Personalized[] }>('personalized')
  return result
}

export async function usePersonalizedNewSong() {
  const { result } = await http.get<{ result: PersonalizedNewSong[] }>('personalized/newsong')
  return result
}

export async function usePlayListDetail(id: number, s = 8) {
  const { playlist } = await http.get<{ playlist: PlayListDetail }>('playlist/detail', { id: id, s: s })
  return playlist
}

export async function usePlayListTrackAll(id: number) {
  const { songs } = await http.get<{ songs: Song[] }>('playlist/track/all', {
    id: id
  })
  return songs
}

export async function useTopListDetail() {
  const { list } = await http.get<{ list: TopListDetail[] }>('toplist/detail')
  return list
}

export async function usePlayListCatList() {
  const { sub, categories } = await http.get<{
    sub: PlayListCat[]
    categories: string[]
  }>('playlist/catlist')

  return { sub, categories }
}

export async function userArtistList(pageData: { type: number; area: number; initial: string; page: number; limit: number }) {
  const res = await http.get<{ artists: Artist[] }>('artist/list', {
    type: pageData.type,
    area: pageData.area,
    initial: pageData.initial,
    limit: pageData.limit,
    offset: (pageData.page - 1) * pageData.limit
  })

  return res.artists
}

export async function useArtistDetail(id: number) {
  const { data } = await http.get<{ data: ArtistDetail }>('artist/detail', {
    id: id
  })
  return data
}

export async function useArtistDesc(id: number) {
  return await http.get<ArtistDesc>('artist/desc', { id: id })
}

export async function useArtistSongs(id: number, order = 'time', limit = 10, offset = 0) {
  return await http.get<{ songs: Song[]; more: boolean }>('artist/songs', {
    id: id,
    order: order,
    limit: limit,
    offset: offset
  })
}

export async function useArtistAlbum(id: number, limit = 10, offset = 0) {
  return await http.get<{ hotAlbums: Album[]; more: boolean }>('artist/album', {
    id: id,
    limit: limit,
    offset: offset
  })
}

export async function useArtistMv(id: number, limit = 10, offset = 0) {
  return await http.get<{ mvs: Mv[]; hasMore: boolean }>('artist/mv', {
    id: id,
    limit: limit,
    offset: offset
  })
}

export async function useVideoTimelineRecommend(offset = 0) {
  const { datas } = await http.get<{ datas: Video[] }>('video/timeline/recommend', { offset: offset })
  return datas
}

export async function usePersonalizedPrivateContentList(limit = 10, offset = 0) {
  const { result } = await http.get<{ result: PersonalizedPrivateContent[] }>('personalized/privatecontent/list', {
    limit: limit,
    offset: offset
  })
  return result
}

export async function usePersonalizedMv() {
  const { result } = await http.get<{ result: PersonalizedMv[] }>('personalized/mv')
  return result
}

export async function usePersonalizedDjProgram() {
  const { result } = await http.get<{ result: DjProgram[] }>('personalized/djprogram')
  return result
}

export async function useVideoGroupList() {
  const { data } = await http.get<{ data: VideoGroup[] }>('video/group/list')
  return data
}

export async function useVideoGroup(id?: number, offset?: number) {
  const { datas, hasmore } = await http.get<{ datas: Video[]; hasmore: boolean }>(id ? 'video/group' : 'video/timeline/all', {
    id: id,
    offset: offset
  })
  return { datas, hasmore }
}

export async function useAlbum(id: number) {
  const { album, songs } = await http.get<{ album: Album; songs: Song[] }>('album', { id: id })

  return { album, songs }
}

export async function useSearchHotDetail() {
  const { data } = await http.get<{ data: SearchHotDetail[] }>('search/hot/detail')
  return data
}

export async function useSearchSuggest(keywords: string) {
  const { result } = await http.get<{ result: SearchSuggest }>('search/suggest', { keywords: keywords })
  return result
}

export async function useMvUrl(id: number) {
  const { data } = await http.get<{ data: MvUrl }>('mv/url', { id: id })
  return data
}

export async function usePlaylistHighqualityTags() {
  const { tags } = await http.get<{ tags: PlaylistHighqualityTag[] }>('playlist/highquality/tags')

  return tags
}

export async function usePlaylistHot() {
  const { tags } = await http.get<{ tags: PlayListHot[] }>('playlist/hot')

  return tags
}

export async function useTopPlaylistHighquality(params?: { limit?: number; before?: number; cat: string }) {
  return await http.get<{
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  }>('top/playlist/highquality', params)
}

export async function useTopSong(type: number) {
  const { data } = await http.get<{ data: TopSong[] }>('top/song', { type })
  return data
}

// 二维码 key 生成
export async function useLoginQrKey() {
  const { data } = await http.get<{
    data: {
      code: number
      unikey: string
    }
  }>('login/qr/key')
  return data.unikey
}

// 二维码 生成
export async function useLoginQrCreate(key: string) {
  const { data } = await http.get<{
    data: {
      qrimg: string
      qrurl: string
    }
  }>('login/qr/create', { key, qrimg: true })
  return data.qrimg
}

// 二维码 检测扫码状态
export async function usecheckStatus(key: string) {
  const { code, cookie } = await http.get<{
    code: number
    cookie: string
    message: string
  }>('login/qr/check', { key })
  return { code, cookie }
}

// 全部mv
export async function useAllMv(area?: string, type?: string, order?: string, limit = 8, offset = 0) {
  return await http.get<{ data: Mv[]; hasMore: boolean }>('mv/all', {
    area,
    type,
    order,
    limit,
    offset
  })
}

// 最新mv
export async function useNewMv(area: string, limit = 10) {
  return await http.get<{ data: Mv[] }>('mv/first', {
    area,
    limit
  })
}

// 网易出品mv
export async function useExclusiveMv(limit = 10, offset = 0) {
  return await http.get<{ data: Mv[] }>('mv/exclusive/rcmd', {
    offset,
    limit
  })
}

// mv详情
export async function useMvDetail(mvid: number) {
  const { data } = await http.get<{ data: MvDetail }>('mv/detail', { mvid })
  return data
}

// 相似mv
export async function useSimiMv(mvid: number) {
  const { mvs } = await http.get<{ mvs: SimiMv[] }>('simi/mv', { mvid })
  return mvs
}

// video详情
export async function useVideoDetail(id: string) {
  const { data } = await http.get<{ data: VideoDetail }>('video/detail', { id })
  return data
}

// video播放地址
export async function useVideoUrl(id: string) {
  const { urls } = await http.get<{ urls: VideoUrl[] }>('video/url', { id })
  return urls[0]
}

// 相似video
export async function useSimiVideo(id: string) {
  const { data } = await http.get<{ data: SimiVideo[] }>('related/allvideo', { id })
  return data
}

// dj个性推荐
export async function useDjPersonalize() {
  const { data } = await http.get<{ data: DjPersonalize[] }>('dj/personalize/recommend')
  return data
}

// dj今日优选
export async function useDjTodayPerfered() {
  const { data } = await http.get<{ data: DjTodayPerfered[] }>('dj/today/perfered')
  return data
}

// dj主播新人榜
export async function useDjNewcomer() {
  const { data } = await http.get<{
    data: {
      list: DjNewcomer[]
    }
  }>('dj/toplist/newcomer?limit=10')
  return data.list
}

// dj最热主播榜
export async function useDjPopular() {
  const { data } = await http.get<{
    data: {
      list: DjNewcomer[]
    }
  }>('dj/toplist/popular?limit=10')
  return data.list
}

// dj付费精品
export async function useDjPay() {
  const { data } = await http.get<{
    data: {
      list: DjPay[]
    }
  }>('dj/toplist/pay?limit=10')
  return data.list
}
