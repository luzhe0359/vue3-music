export interface MvUrl {
  id: number
  url: string
  r: number
  size: number
  md5: string
  code: number
  expi: number
  fee: number
  mvFee: number
  st: number
  promotionVo?: any
  msg: string
}

export interface MvDetail {
  id: number
  name: string
  artistId: number
  artistName: string
  briefDesc: string
  desc: string
  cover: string
  coverId_str: string
  coverId: number
  playCount: number
  subCount: number
  shareCount: number
  commentCount: number
  duration: number
  nType: number
  publishTime: string
  price: null
  brs: any[]
  artists: MvDetailArtists[]
  alias: any[]
  commentThreadId: string
  videoGroup: any[]
}

export interface MvDetailArtists {
  id: number
  name: string
  followed: boolean
  img1v1Url: string
}

export interface Mv {
  id: number
  cover: string
  name: string
  playCount: number
  briefDesc?: any
  desc?: any
  artistName: string
  artistId: number
  duration: number
  mark: number
  subed: boolean
  artists: MvArtists[]
}

export interface MvArtists {
  id: number
  name: string
  alias?: []
  transNames?: null
}

export interface SimiMv {
  id: number
  cover: string
  name: string
  playCount: number
  briefDesc: string
  desc: null
  artistName: string
  artistId: number
  duration: number
  mark: number
  artists: MvArtists[]
  alg: string
}
