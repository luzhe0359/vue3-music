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
}
