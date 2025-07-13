import { 
  TwitterIcon, 
  GithubIcon, 
  LinkedinIcon, 
  GlobeIcon, 
  LinkIcon as DefaultLinkIcon 
} from "@/components/ui/icons"

interface LinkIconProps {
  url: string
  size?: number
}

export function LinkIcon({ url, size = 16 }: LinkIconProps) {
  const domain = url
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .split("/")[0]

  if (domain.includes("twitter.com") || domain.includes("x.com")) {
    return <TwitterIcon size={size} />
  } else if (domain.includes("github.com")) {
    return <GithubIcon size={size} />
  } else if (domain.includes("linkedin.com")) {
    return <LinkedinIcon size={size} />
  } else if (domain.includes("blog") || domain.includes("portfolio")) {
    return <GlobeIcon size={size} />
  } else {
    return <DefaultLinkIcon size={size} />
  }
}
