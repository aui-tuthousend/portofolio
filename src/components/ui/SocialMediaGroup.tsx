import type React from "react"
import { SiGithub, SiGitlab, SiInstagram, SiLinkedin } from 'react-icons/si';
import { cn } from "@/lib/utils"

interface SocialLink {
  name: string
  url: string
  icon: React.ElementType
  color: string
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/raspberyamphetamines",
    icon: SiInstagram,
    color: "bg-pink-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-hafidz-raihan-3778311ba",
    icon: SiLinkedin,
    color: "bg-blue-700",
  },
  {
    name: "GitHub",
    url: "https://github.com/aui-tuthousend",
    icon: SiGithub,
    color: "bg-gray-900",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/aui-tuthousend",
    icon: SiGitlab,
    color: "bg-yellow-600",
  },
]

export function SocialMediaGroup() {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Container dengan negative space untuk efek overlap */}
      <div className="flex -space-x-4 hover:space-x-1 transition-all duration-300">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-background text-white shadow-sm transition-all duration-300 ease-out",
              social.color,
              // Efek hover: naik ke atas (translate-y), scale up, dan z-index naik agar di paling depan
              "hover:z-10 hover:-translate-y-2 hover:scale-110 hover:shadow-lg",
            )}
            aria-label={social.name}
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  )
}
