import DecryptedText from "./ui/DecryptedText";
import FlowingMenu from "./ui/FlowingMenu";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRust, 
  SiGo, 
  SiDocker, 
  SiPortainer,
  SiFedora,
  SiDotnet,
  SiNuxtdotjs,
  SiVuedotjs,
  SiPostgresql,
  SiBun,
  SiRedis,
  SiCplusplus,
  SiSupabase
} from 'react-icons/si';
import LogoLoop from "./ui/LogoLoop";

export default function SectionFour() {

  const demoItems = [
    { link: 'https://github.com/aui-tuthousend/axum-boilerplate', text: 'AXUM', image: 'https://balticanebula.com/content/images/2023/06/rust_banner.png' },
    { link: 'https://github.com/aui-tuthousend/actix-boilerplate', text: 'ACTIX WEB', image: 'https://balticanebula.com/content/images/2023/06/rust_banner.png' },
    { link: 'https://github.com/aui-tuthousend/rust-may-minihttp', text: 'MAY MINI HTTP', image: 'https://balticanebula.com/content/images/2023/06/rust_banner.png' },
    { link: 'https://github.com/aui-tuthousend/tanstack-starter', text: 'REACT TANSTACK START', image: 'https://tanstack-doc-cn.vercel.app/build/_assets/og-FA4FELIQ.png' },
    { link: 'https://github.com/aui-tuthousend/go-fiber-wire', text: 'FIBER + WIRE', image: 'https://repository-images.githubusercontent.com/234231371/00fd8700-5430-11ea-820b-15fd85b2472c' },
    { link: 'https://github.com/aui-tuthousend?tab=repositories', text: 'EXPLORE MORE', image: 'https://miro.medium.com/1*dDNpLKu_oTLzStsDTnkJ-g.png' }
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
    { node: <SiNuxtdotjs />, title: "Nuxt.js", href: "https://nuxtjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiRust />, title: "Rust", href: "https://rust-lang.org" },
    { node: <SiGo />, title: "Go", href: "https://golang.org" },
    { node: <SiCplusplus />, title: "C++", href: "https://cplusplus.com" },
    { node: <SiBun />, title: "Bun", href: "https://bun.sh" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiRedis />, title: "Redis", href: "https://redis.io" },    
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiPortainer />, title: "Portainer", href: "https://www.portainer.io" },
    { node: <SiFedora />, title: "Fedora", href: "https://fedoraproject.org" },
    { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com" },
  ];

  return (
    <div className="w-full bg-black text-white px-[60px] py-10 flex flex-col h-[120vh]">
      <p className="font-semibold text-[20px]">Tech stack I used</p>
      <div className="h-[200px] relative overflow-hidden pt-[30px]">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>

      <DecryptedText
        text="Framework boilerplate"       
      />
      <p>for your new project kickstart </p>
      <div className="h-[600px] relative mt-[3%]" >
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  )
}