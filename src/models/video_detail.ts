export interface VideoDetail {
  vid: string
  creator: VideoDetailCreator
  coverUrl: string
  title: string
  description: string
  durationms: number
  threadId: string
  playTime: number
  praisedCount: number
  commentCount: number
  shareCount: number
  subscribeCount: number
  publishTime: number
  avatarUrl: string
  width: number
  height: number
  resolutions: VideoDetailResolutions[]
  videoGroup: VideoDetailVideoGroup[]
  hasRelatedGameAd: boolean
  advertisement: boolean
  authType: number
  markTypes: number[]
  videoUserLiveInfo: null
}

export interface VideoUrl {
  id: string
  url: string
  size: number
  validityTime: number
  needPay: boolean
  payInfo: null
  r: number
}

export interface SimiVideo {
  alg: string
  type: number
  title: string
  durationms: number
  creator: SimiVideoCreator[]
  playTime: number
  coverUrl: string
  vid: string
  aliaName: null
  transName: null
  markTypes: []
  liveRoom: null
}

export interface SimiVideoCreator {
  userId: number
  userName: string
}

export interface VideoDetailCreator {
  authStatus: number
  followed: boolean
  accountStatus: number
  userId: number
  userType: number
  nickname: string
  avatarUrl: string
  expertTags: null
  experts?: any
  avatarDetail?: any
}

export interface VideoDetailResolutions {
  size: number
  resolution: number
}

export interface VideoDetailVideoGroup {
  id: number
  name: string
  alg: null
}
