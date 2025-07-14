export interface Profile {
  name: string
  bio: string
  avatarUrl: string
  verified: boolean
}

export interface Link {
  id: string
  title: string
  url: string
  description: string 
}

export interface Theme {
  colorTheme: string
  pattern: string
  font: string
}

export interface ProfileData {
  profile: Profile
  links: readonly Link[]
  theme?: Theme
}
