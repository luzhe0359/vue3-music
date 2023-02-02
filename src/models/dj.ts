export interface DJBanner {
  targetId: number
  targetType: number
  pic: string
  url: string
  typeTitle: string
  exclusive: boolean
}

export interface DjPersonalize {
  id: number
  dj: DjPersonalizeDj
  name: string
  picUrl: string
  desc: string
  subCount: number
  programCount: number
  createTime: number
  categoryId: number
  category: string
  secondCategoryId: number
  secondCategory: string
  radioFeeType: number
  feeScope: number
  buyed: boolean
  videos: any
  finished: boolean
  underShelf: boolean
  purchaseCount: number
  price: number
  originalPrice: number
  discountPrice: any
  lastProgramCreateTime: number
  lastProgramName: string
  lastProgramId: number
  picId: number
  rcmdText: string
  hightQuality: boolean
  whiteList: boolean
  liveInfo: any
  playCount: number
  icon: any
  privacy: boolean
  intervenePicUrl: string
  intervenePicId: number
  dynamic: boolean
  shortName: any
  taskId: 0
  manualTagsDTO: any
  scoreInfoDTO: any
  descPicList: any
  subed: boolean
  composeVideo: boolean
  rcmdtext: string
  lastUpdateProgramName: string
  alg: string
}

export interface DjPersonalizeDj {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: any
  backgroundImgIdStr: string
  avatarImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

export interface DjTodayPerfered {
  id: number
  name: string
  rcmdText: string
  radioFeeType: number
  feeScope: number
  picUrl: string
  programCount: number
  subCount: number
  subed: boolean
  playCount: number
  alg: string
  originalPrice: any
  discountPrice: any
  lastProgramName: string
  traceId: any
  icon: any
}

export interface DjTodayPerfered {
  id: number
  name: string
  rcmdText: string
  radioFeeType: number
  feeScope: number
  picUrl: string
  programCount: number
  subCount: number
  subed: boolean
  playCount: number
  alg: string
  originalPrice: any
  discountPrice: any
  lastProgramName: string
  traceId: any
  icon: any
}

export interface DjNewcomer {
  id: number
  rank: number
  lastRank: number
  score: number
  nickName: string
  avatarUrl: string
  userType: number
  userFollowedCount: number
  mainAuthDesc: string
  liveStatus: number
  liveType: number
  liveId: number
  avatarDetail: DjNewcomerAvatarDetail
  roomNo: number
}

export interface DjNewcomerAvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

export interface DjPay {
  id: number
  rank: number
  lastRank: number
  score: number
  name: string
  picUrl: string
  creatorName: string
}
