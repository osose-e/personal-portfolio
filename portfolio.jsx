import { useState, useEffect, useRef } from "react";

const C = {
  base: "#FAFAF8", surface: "#F4F2EE", navy: "#1B2A4A", navyLight: "#2C3F6A",
  pink: "#D4859A", pinkLight: "#EAB8C6", pinkPale: "#FBF0F3",
  brown: "#8B6E5A", brownLight: "#C4A899", text: "#2A2420",
  muted: "#7A7068", border: "rgba(27,42,74,0.1)",
};

const PROJECTS = [
  { id:1, title:"Bloom", subtitle:"Wellness & Habit Tracking App", year:"2024", tags:["Product Design","React Native","Figma"], color:"#FBF0F3", accent:"#D4859A", summary:"A habit-tracking wellness app for busy people who want calm, not guilt.", overview:"Bloom started from personal frustration: every wellness app felt like a productivity tool in disguise. I set out to design something genuinely restorative — conducting 12 user interviews, 3 rounds of prototype testing, and shipping to 2,400 beta users.", role:"Lead Designer & Engineer", impact:["38% higher daily retention","4.8 stars App Store rating","2,400 beta users at launch"], process:["Discovery & user research (12 interviews)","Competitive audit of 8 existing apps","Lo-fi wireframes to Figma prototype","3 rounds of usability testing","React Native build + App Store submission"], live:"#", github:"#" },
  { id:2, title:"Forma", subtitle:"Design System & Component Library", year:"2024", tags:["Design Systems","Storybook","TypeScript"], color:"#F0EEF8", accent:"#2C3F6A", summary:"A token-based design system unifying three product surfaces into one visual language.", overview:"Forma was born out of a painful reality: three products, zero consistency. I architected and built a token-based component library with 60+ components, full accessibility audit, and a living documentation site.", role:"Design Systems Engineer", impact:["60% less developer handoff time","60+ components shipped","Full WCAG 2.1 AA compliance"], process:["Audit of existing components across 3 products","Token architecture design","Storybook setup with TypeScript","Component-by-component build with a11y testing","Documentation site with usage guidelines"], live:"#", github:"#" },
  { id:3, title:"Venue", subtitle:"Event Discovery & Ticketing Platform", year:"2023", tags:["Full Stack","Next.js","Supabase"], color:"#F5F0EB", accent:"#8B6E5A", summary:"An end-to-end ticketing platform with real-time seat selection and smart discovery.", overview:"Venue was a full-stack project from research to deployment. I led UX research, designed the information architecture, and built the frontend including a real-time seat map with optimistic locking.", role:"Designer & Full Stack Engineer", impact:["3,200 tickets sold at launch","Under 0.1% booking error rate","Featured in 2 local publications"], process:["User research: 8 interviews with event-goers","Information architecture & user flows","High-fidelity Figma designs","Next.js frontend + Supabase backend","Real-time seat locking system"], live:"#", github:"#" },
  { id:4, title:"Cartography", subtitle:"Urban Mobility Data Visualisation", year:"2023", tags:["D3.js","Data Viz","Research"], color:"#EEF2F5", accent:"#1B2A4A", summary:"Interactive maps exploring urban mobility patterns for city planning consultancies.", overview:"Built for a city planning consultancy, Cartography lets analysts explore mobility data through layered interactive maps. I designed the visual language, built the D3 rendering engine, and worked with urban planners to ensure insights were legible.", role:"Data Viz Designer & Engineer", impact:["Used in 4 city council presentations","3 hours less analysis time per week","200+ custom reports exported"], process:["Stakeholder interviews with 6 urban planners","Data schema design with analytics team","Visual design of map layers & legend system","D3.js rendering engine","Export-to-PDF pipeline"], live:"#", github:"#" },
];

const SKILLS = [
  { category:"Design", items:[{name:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},{name:"Illustrator",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"},{name:"Photoshop",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"},{name:"Framer",icon:"https://cdn.worldvectorlogo.com/logos/framer-motion.svg"}]},
  { category:"Frontend", items:[{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Next.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"Tailwind",icon:"https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"}]},
  { category:"Backend", items:[{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{name:"Supabase",icon:"https://cdn.worldvectorlogo.com/logos/supabase-1.svg"},{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"}]},
  { category:"Tools", items:[{name:"Git",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"Storybook",icon:"https://cdn.worldvectorlogo.com/logos/storybook-1.svg"},{name:"VS Code",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:"Notion",icon:"https://cdn.worldvectorlogo.com/logos/notion-2.svg"}]},
];

function useInView(threshold=0.12){
  const ref=useRef(null);const[inView,setInView]=useState(false);
  useEffect(()=>{const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setInView(true);},{threshold});if(ref.current)obs.observe(ref.current);return()=>obs.disconnect();},[]);
  return[ref,inView];
}

function Cursor(){
  const glowRef=useRef(null),dotRef=useRef(null),mouse=useRef({x:-300,y:-300}),smooth=useRef({x:-300,y:-300});
  useEffect(()=>{
    const onMove=(e)=>{mouse.current={x:e.clientX,y:e.clientY};};
    window.addEventListener("mousemove",onMove);
    let raf;
    const tick=()=>{
      smooth.current.x+=(mouse.current.x-smooth.current.x)*0.08;
      smooth.current.y+=(mouse.current.y-smooth.current.y)*0.08;
      if(glowRef.current){glowRef.current.style.left=mouse.current.x+"px";glowRef.current.style.top=mouse.current.y+"px";}
      if(dotRef.current){dotRef.current.style.left=smooth.current.x+"px";dotRef.current.style.top=smooth.current.y+"px";}
      raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return()=>{window.removeEventListener("mousemove",onMove);cancelAnimationFrame(raf);};
  },[]);
  return(<>
    <div ref={glowRef} style={{position:"fixed",pointerEvents:"none",zIndex:9999,width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,133,154,0.18) 0%, rgba(212,133,154,0.06) 40%, transparent 70%)",transform:"translate(-50%,-50%)"}}/>
    <div ref={dotRef} style={{position:"fixed",pointerEvents:"none",zIndex:10000,width:8,height:8,borderRadius:"50%",background:"#D4859A",transform:"translate(-50%,-50%)",boxShadow:"0 0 12px #EAB8C6"}}/>
  </>);
}

function Reveal({children,delay=0,style={}}){
  const[ref,inView]=useInView();
  return(<div ref={ref} style={{opacity:inView?1:0,transform:inView?"translateY(0)":"translateY(28px)",transition:`opacity 0.9s ${delay}s cubic-bezier(0.22,1,0.36,1),transform 0.9s ${delay}s cubic-bezier(0.22,1,0.36,1)`,...style}}>{children}</div>);
}

function Nav({active}){
  const[scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>60);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  const links=["Work","About","Resume","Contact"];
  return(
    <nav style={{position:"fixed",top:20,left:"50%",transform:"translateX(-50%)",zIndex:200,background:scrolled?"rgba(250,250,248,0.92)":"rgba(250,250,248,0.65)",backdropFilter:"blur(16px)",border:"1px solid rgba(27,42,74,0.1)",borderRadius:100,padding:"12px 32px",display:"flex",alignItems:"center",gap:36,boxShadow:scrolled?"0 8px 32px rgba(27,42,74,0.1)":"0 2px 12px rgba(27,42,74,0.05)",transition:"all 0.5s cubic-bezier(0.22,1,0.36,1)",whiteSpace:"nowrap"}}>
      <a href="#hero" style={{fontFamily:"'Playfair Display',serif",fontSize:"0.95rem",color:"#1B2A4A",textDecoration:"none",fontWeight:700}}>YN</a>
      <div style={{width:1,height:16,background:"rgba(27,42,74,0.1)"}}/>
      {links.map(l=>{const isActive=active===l.toLowerCase();return(
        <a key={l} href={`#${l.toLowerCase()}`} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",textDecoration:"none",color:isActive?"#1B2A4A":"#7A7068",fontWeight:isActive?500:400,position:"relative",transition:"color 0.2s",paddingBottom:2}}>
          {l}{isActive&&<span style={{position:"absolute",bottom:-4,left:0,right:0,height:1.5,background:"#D4859A",borderRadius:1}}/>}
        </a>
      );})}
    </nav>
  );
}

function Hero(){
  const[mounted,setMounted]=useState(false);
  const[greeting,setGreeting]=useState("");
  const[done,setDone]=useState(false);
  const[sy,setSy]=useState(0);
  const full="Hello, I'm";
  useEffect(()=>{
    setTimeout(()=>setMounted(true),80);
    let i=0;const iv=setInterval(()=>{setGreeting(full.slice(0,i+1));i++;if(i>=full.length){clearInterval(iv);setDone(true);}},65);
    return()=>clearInterval(iv);
  },[]);
  useEffect(()=>{const fn=()=>setSy(window.scrollY);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
  const fade=(d)=>({opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(24px)",transition:`opacity 1s ${d}s cubic-bezier(0.22,1,0.36,1),transform 1s ${d}s cubic-bezier(0.22,1,0.36,1)`});
  const N="#1B2A4A",P="#D4859A",B="#8B6E5A",M="#7A7068",BR="rgba(27,42,74,0.1)";
  return(
    <section id="hero" style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"100px 64px 80px",position:"relative",overflow:"hidden",background:"#FAFAF8"}}>
      <div style={{position:"absolute",inset:0,zIndex:0,backgroundImage:"radial-gradient(circle, rgba(27,42,74,0.11) 1px, transparent 1px)",backgroundSize:"32px 32px",transform:`translateY(${sy*0.25}px)`,maskImage:"radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%)"}}/>
      <div style={{position:"absolute",right:"4%",top:"12%",width:"45vw",height:"55vh",background:"radial-gradient(ellipse, rgba(212,133,154,0.11) 0%, transparent 70%)",transform:`translateY(${sy*0.12}px)`,pointerEvents:"none",zIndex:0}}/>
      <div style={{maxWidth:1100,margin:"0 auto",width:"100%",display:"grid",gridTemplateColumns:"1fr 360px",gap:80,alignItems:"center",position:"relative",zIndex:2}}>
        <div>
          <div style={{...fade(0.1),fontFamily:"'DM Sans',sans-serif",fontSize:"1rem",color:P,marginBottom:16,minHeight:"1.5em"}}>{greeting}<span style={{opacity:done?0:1,transition:"opacity 0.3s"}}>|</span></div>
          <h1 style={{...fade(0.3),fontFamily:"'Playfair Display',serif",fontSize:"clamp(3.5rem,7vw,6.5rem)",lineHeight:1,letterSpacing:"-0.03em",color:N,marginBottom:20}}>Your<br/><span style={{color:P}}>Full</span><br/>Name</h1>
          <p style={{...fade(0.48),fontFamily:"'DM Sans',sans-serif",fontSize:"1.05rem",color:B,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:500,marginBottom:24}}>Software Engineer & Product Designer</p>
          <p style={{...fade(0.62),fontFamily:"'DM Sans',sans-serif",fontSize:"0.98rem",color:M,lineHeight:1.85,maxWidth:480,fontWeight:300,marginBottom:44}}>I design and build digital products that are thoughtful, accessible, and genuinely delightful to use. Currently looking for my next role.</p>
          <div style={{...fade(0.76),display:"flex",gap:14}}>
            <a href="#work" style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.85rem",fontWeight:500,padding:"13px 30px",background:N,color:"#fff",textDecoration:"none",borderRadius:8,boxShadow:"0 4px 20px rgba(27,42,74,0.2)",transition:"all 0.3s cubic-bezier(0.22,1,0.36,1)"}} onMouseEnter={e=>{e.currentTarget.style.background="#2C3F6A";e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.background=N;e.currentTarget.style.transform="translateY(0)";}}>View Work</a>
            <a href="#contact" style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.85rem",fontWeight:500,padding:"13px 30px",border:`1.5px solid ${BR}`,color:N,textDecoration:"none",borderRadius:8,background:"transparent",transition:"all 0.3s cubic-bezier(0.22,1,0.36,1)"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=P;e.currentTarget.style.color=P;e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.borderColor=BR;e.currentTarget.style.color=N;e.currentTarget.style.transform="translateY(0)";}}>Say Hello</a>
          </div>
        </div>
        <div style={{...fade(0.38),display:"flex",justifyContent:"center"}}>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",inset:-16,borderRadius:"50%",border:"1.5px solid rgba(212,133,154,0.22)"}}/>
            <div style={{position:"absolute",inset:-32,borderRadius:"50%",border:"1px solid rgba(27,42,74,0.07)"}}/>
            <div style={{width:300,height:300,borderRadius:"50%",background:"linear-gradient(135deg,#FBF0F3 0%,#E8E4F0 50%,#E4EEF5 100%)",border:"3px solid rgba(212,133,154,0.28)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8,position:"relative",zIndex:1,boxShadow:"0 20px 60px rgba(212,133,154,0.2),0 4px 20px rgba(27,42,74,0.07)",overflow:"hidden"}}>
              <div style={{fontSize:"4rem"}}>👤</div>
              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",color:"#C4A899",letterSpacing:"0.08em",textTransform:"uppercase"}}>Your Photo Here</span>
            </div>
            <div style={{position:"absolute",bottom:16,right:-28,background:"#fff",border:"1px solid rgba(27,42,74,0.1)",borderRadius:12,padding:"10px 16px",boxShadow:"0 8px 24px rgba(27,42,74,0.1)",fontFamily:"'DM Sans',sans-serif",fontSize:"0.78rem",color:N,fontWeight:500,display:"flex",alignItems:"center",gap:8,zIndex:2,whiteSpace:"nowrap"}}>
              <span style={{width:8,height:8,borderRadius:"50%",background:"#4CAF8A",display:"inline-block",boxShadow:"0 0 0 3px rgba(76,175,138,0.18)"}}/>Open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({project,onClose}){
  const[visible,setVisible]=useState(false);
  useEffect(()=>{setTimeout(()=>setVisible(true),10);},[]);
  useEffect(()=>{const fn=(e)=>{if(e.key==="Escape"){setVisible(false);setTimeout(onClose,420);}};window.addEventListener("keydown",fn);return()=>window.removeEventListener("keydown",fn);},[]);
  const close=()=>{setVisible(false);setTimeout(onClose,420);};
  const N="#1B2A4A",M="#7A7068",S="#F4F2EE",BR="rgba(27,42,74,0.1)";
  return(
    <div style={{position:"fixed",inset:0,zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
      <div onClick={close} style={{position:"absolute",inset:0,background:"rgba(27,42,74,0.42)",backdropFilter:"blur(8px)",opacity:visible?1:0,transition:"opacity 0.4s ease"}}/>
      <div style={{position:"relative",zIndex:1,background:"#fff",borderRadius:20,width:"100%",maxWidth:700,maxHeight:"88vh",overflowY:"auto",opacity:visible?1:0,transform:visible?"scale(1) translateY(0)":"scale(0.93) translateY(28px)",transition:"all 0.5s cubic-bezier(0.22,1,0.36,1)",boxShadow:"0 40px 100px rgba(27,42,74,0.22)"}}>
        <div style={{background:project.color,padding:"40px 44px 32px",borderRadius:"20px 20px 0 0",borderBottom:`1px solid ${project.accent}22`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",color:project.accent,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:10}}>{project.year} · {project.role}</p>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2.1rem",color:N,marginBottom:6,letterSpacing:"-0.02em"}}>{project.title}</h2>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.9rem",color:"#8B6E5A"}}>{project.subtitle}</p>
            </div>
            <button onClick={close} style={{width:34,height:34,borderRadius:"50%",border:`1px solid ${BR}`,background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",color:M,transition:"all 0.2s",flexShrink:0}} onMouseEnter={e=>{e.currentTarget.style.background=N;e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color=M;}}>x</button>
          </div>
          <div style={{display:"flex",gap:8,marginTop:20,flexWrap:"wrap"}}>
            {project.tags.map(t=><span key={t} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.7rem",padding:"4px 14px",background:"#fff",border:`1px solid ${project.accent}28`,borderRadius:100,color:project.accent,fontWeight:500}}>{t}</span>)}
          </div>
        </div>
        <div style={{padding:"36px 44px"}}>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.93rem",color:M,lineHeight:1.85,fontWeight:300,marginBottom:32}}>{project.overview}</p>
          <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.1rem",color:N,marginBottom:14}}>Impact</h4>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:32}}>
            {project.impact.map((item,i)=><div key={i} style={{background:S,borderRadius:10,padding:"14px 16px",border:`1px solid ${BR}`}}><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:N,fontWeight:500,lineHeight:1.5}}>{item}</p></div>)}
          </div>
          <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.1rem",color:N,marginBottom:14}}>Process</h4>
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:32}}>
            {project.process.map((step,i)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:14}}>
                <span style={{width:22,height:22,borderRadius:"50%",background:project.color,border:`1px solid ${project.accent}28`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',sans-serif",fontSize:"0.65rem",color:project.accent,fontWeight:600,flexShrink:0,marginTop:1}}>{i+1}</span>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.87rem",color:M,lineHeight:1.65,fontWeight:300}}>{step}</p>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:12,paddingTop:24,borderTop:`1px solid ${BR}`}}>
            <a href={project.live} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.82rem",fontWeight:500,padding:"11px 24px",background:N,color:"#fff",textDecoration:"none",borderRadius:8,transition:"all 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.background="#2C3F6A";}} onMouseLeave={e=>{e.currentTarget.style.background=N;}}>Live Project</a>
            <a href={project.github} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.82rem",fontWeight:500,padding:"11px 24px",border:`1.5px solid ${BR}`,color:N,textDecoration:"none",borderRadius:8,background:"transparent",transition:"all 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=N;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=BR;}}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({project,index,onOpen}){
  const[ref,inView]=useInView();const[hovered,setHovered]=useState(false);
  const N="#1B2A4A",M="#7A7068",BR="rgba(27,42,74,0.1)";
  return(
    <div ref={ref} style={{opacity:inView?1:0,transform:inView?"translateY(0)":"translateY(36px)",transition:`opacity 0.8s ${index*0.1}s cubic-bezier(0.22,1,0.36,1),transform 0.8s ${index*0.1}s cubic-bezier(0.22,1,0.36,1)`}}>
      <div onClick={()=>onOpen(project)} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} style={{background:hovered?project.color:"#fff",border:`1px solid ${hovered?project.accent+"30":BR}`,borderRadius:16,padding:36,cursor:"pointer",transition:"all 0.5s cubic-bezier(0.22,1,0.36,1)",transform:hovered?"scale(1.024) translateY(-4px)":"scale(1) translateY(0)",boxShadow:hovered?"0 20px 48px rgba(27,42,74,0.11)":"0 2px 12px rgba(27,42,74,0.04)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28}}>
          <div style={{width:44,height:44,borderRadius:12,background:project.accent+"16",border:`1px solid ${project.accent}28`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:"1rem",color:project.accent,fontWeight:700}}>{String(project.id).padStart(2,"0")}</div>
          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",color:M}}>{project.year}</span>
        </div>
        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",color:N,marginBottom:6,letterSpacing:"-0.01em"}}>{project.title}</h3>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.78rem",color:project.accent,fontWeight:500,marginBottom:14}}>{project.subtitle}</p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.87rem",color:M,lineHeight:1.75,fontWeight:300,marginBottom:22}}>{project.summary}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:22}}>
          {project.tags.map(t=><span key={t} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.68rem",padding:"4px 12px",background:project.accent+"10",border:`1px solid ${project.accent}22`,borderRadius:100,color:project.accent,fontWeight:500}}>{t}</span>)}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6,color:project.accent,fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",fontWeight:500}}>
          <span>View case study</span>
          <span style={{transition:"transform 0.3s",transform:hovered?"translateX(5px)":"translateX(0)"}}>&#8594;</span>
        </div>
      </div>
    </div>
  );
}

function Work(){
  const[active,setActive]=useState(null);
  const N="#1B2A4A",P="#D4859A",M="#7A7068";
  return(
    <section id="work" style={{padding:"100px 64px",background:"#F4F2EE"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Reveal>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",letterSpacing:"0.2em",textTransform:"uppercase",color:P,marginBottom:10}}>Selected Work</p>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",color:N,marginBottom:8,letterSpacing:"-0.02em"}}>Things I've built</h2>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.93rem",color:M,fontWeight:300,marginBottom:52,maxWidth:420}}>A selection of recent projects — click any card to see the full story.</p>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20}}>
          {PROJECTS.map((p,i)=><ProjectCard key={p.id} project={p} index={i} onOpen={setActive}/>)}
        </div>
      </div>
      {active&&<ProjectModal project={active} onClose={()=>setActive(null)}/>}
    </section>
  );
}

function About(){
  const N="#1B2A4A",P="#D4859A",M="#7A7068",B="#8B6E5A",S="#F4F2EE",BR="rgba(27,42,74,0.1)";
  return(
    <section id="about" style={{padding:"100px 64px",background:"#FAFAF8"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Reveal>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",letterSpacing:"0.2em",textTransform:"uppercase",color:P,marginBottom:10}}>About</p>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",color:N,marginBottom:48,letterSpacing:"-0.02em"}}>A little about me</h2>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,marginBottom:72}}>
          <Reveal delay={0.1}>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.97rem",color:M,lineHeight:1.9,fontWeight:300,marginBottom:16}}>I'm a designer and engineer who believes the best digital products are ones you barely notice — they just work, beautifully. I work across the full stack: from research and wireframes all the way to production code.</p>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.97rem",color:M,lineHeight:1.9,fontWeight:300}}>I'm passionate about design systems, accessible interfaces, and the tiny details that make an experience feel considered. When I'm not designing or coding, you'll find me [hobby] or [fun fact].</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{background:S,borderRadius:16,padding:"28px 30px",border:`1px solid ${BR}`}}>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.68rem",letterSpacing:"0.16em",textTransform:"uppercase",color:B,marginBottom:16,fontWeight:500}}>Quick facts</p>
              {[["📍","Based in","Your City, Country"],["🎓","Education","Your Degree, University"],["💼","Experience","X years in design & eng"],["🌐","Languages","English, [Other]"]].map(([icon,label,val])=>(
                <div key={label} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 0",borderBottom:`1px solid ${BR}`}}>
                  <span>{icon}</span>
                  <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:M,fontWeight:300,flex:1}}>{label}</span>
                  <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:N,fontWeight:500}}>{val}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.68rem",letterSpacing:"0.2em",textTransform:"uppercase",color:P,marginBottom:24,fontWeight:500}}>Skills and Tools</p></Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {SKILLS.map((group,gi)=>(
            <Reveal key={group.category} delay={gi*0.07}>
              <div style={{background:S,borderRadius:14,padding:22,border:`1px solid ${BR}`}}>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.66rem",letterSpacing:"0.15em",textTransform:"uppercase",color:B,marginBottom:18,fontWeight:500}}>{group.category}</p>
                <div style={{display:"flex",flexDirection:"column",gap:13}}>
                  {group.items.map(skill=>(
                    <div key={skill.name} style={{display:"flex",alignItems:"center",gap:10}}>
                      <img src={skill.icon} alt={skill.name} width={18} height={18} style={{objectFit:"contain",flexShrink:0}} onError={e=>{e.target.style.display="none";}}/>
                      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.83rem",color:"#2A2420"}}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume(){
  const N="#1B2A4A",P="#D4859A",M="#7A7068",B="#8B6E5A",S="#F4F2EE",BR="rgba(27,42,74,0.1)",PP="#FBF0F3";
  const experiences=[
    {role:"Product Designer & Engineer",company:"Company Name",period:"2023 - Present",desc:"Led design and frontend development for [product]. Shipped [X] major features, grew user base by [Y]%."},
    {role:"UX Designer",company:"Previous Company",period:"2022 - 2023",desc:"Redesigned core user flows, conducted user research, and built a component library from scratch."},
    {role:"Frontend Developer",company:"Agency Name",period:"2021 - 2022",desc:"Built responsive web experiences for clients across e-commerce, media, and fintech."},
  ];
  return(
    <section id="resume" style={{padding:"100px 64px",background:S}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Reveal>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:52}}>
            <div>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",letterSpacing:"0.2em",textTransform:"uppercase",color:P,marginBottom:10}}>Resume</p>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",color:N,letterSpacing:"-0.02em"}}>Experience</h2>
            </div>
            <a href="#" style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.82rem",fontWeight:500,padding:"11px 24px",background:N,color:"#fff",textDecoration:"none",borderRadius:8,transition:"all 0.2s",display:"flex",alignItems:"center",gap:8}} onMouseEnter={e=>{e.currentTarget.style.background="#2C3F6A";e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.background=N;e.currentTarget.style.transform="translateY(0)";}}>Download PDF</a>
          </div>
        </Reveal>
        <div style={{position:"relative"}}>
          <div style={{position:"absolute",left:20,top:0,bottom:0,width:1,background:`linear-gradient(to bottom, ${P}, rgba(212,133,154,0.1))`}}/>
          {experiences.map((exp,i)=>(
            <Reveal key={i} delay={i*0.1}>
              <div style={{display:"flex",gap:36,paddingBottom:28,position:"relative"}}>
                <div style={{width:40,height:40,borderRadius:"50%",background:"#fff",border:`1.5px solid ${P}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:1,boxShadow:`0 0 0 5px ${PP}`}}>
                  <div style={{width:8,height:8,borderRadius:"50%",background:P}}/>
                </div>
                <div style={{background:"#fff",borderRadius:14,padding:"26px 30px",border:`1px solid ${BR}`,flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,flexWrap:"wrap",gap:8}}>
                    <div>
                      <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.15rem",color:N,marginBottom:4}}>{exp.role}</h3>
                      <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.83rem",color:B,fontWeight:500}}>{exp.company}</p>
                    </div>
                    <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",color:M,background:S,padding:"4px 12px",borderRadius:100,border:`1px solid ${BR}`}}>{exp.period}</span>
                  </div>
                  <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.87rem",color:M,lineHeight:1.75,fontWeight:300}}>{exp.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(){
  const[form,setForm]=useState({name:"",email:"",message:""});
  const[sent,setSent]=useState(false);
  const P="#D4859A",PL="#EAB8C6",N="#1B2A4A";
  const iStyle={width:"100%",fontFamily:"'DM Sans',sans-serif",fontSize:"0.9rem",padding:"13px 15px",border:"1.5px solid rgba(255,255,255,0.15)",borderRadius:8,background:"rgba(255,255,255,0.07)",color:"#fff",outline:"none",transition:"border-color 0.2s"};
  return(
    <section id="contact" style={{padding:"100px 64px",background:N,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",backgroundSize:"32px 32px",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"-20%",right:"-10%",width:"50vw",height:"60vh",background:"radial-gradient(ellipse, rgba(212,133,154,0.11) 0%, transparent 65%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1100,margin:"0 auto",position:"relative",zIndex:2}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}}>
          <Reveal>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",letterSpacing:"0.2em",textTransform:"uppercase",color:P,marginBottom:16}}>Contact</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.2rem,4vw,3.5rem)",color:"#fff",lineHeight:1.1,letterSpacing:"-0.02em",marginBottom:22}}>{"Let's build"}<br/><em style={{fontStyle:"italic",color:PL}}>something great.</em></h2>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.93rem",color:"rgba(255,255,255,0.48)",lineHeight:1.85,fontWeight:300,marginBottom:40}}>Open to full-time roles in product design and software engineering. I respond to every message.</p>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {[["✉","hello@yourname.com","mailto:hello@yourname.com"],["💼","linkedin.com/in/yourname","#"],["🐙","github.com/yourname","#"]].map(([icon,label,href])=>(
                <a key={label} href={href} style={{display:"flex",alignItems:"center",gap:12,fontFamily:"'DM Sans',sans-serif",fontSize:"0.87rem",color:"rgba(255,255,255,0.55)",textDecoration:"none",transition:"color 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.color="rgba(255,255,255,0.55)";}}>
                  <span>{icon}</span>{label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            {sent?(
              <div style={{background:"rgba(255,255,255,0.05)",borderRadius:16,padding:48,textAlign:"center",border:"1px solid rgba(255,255,255,0.1)"}}>
                <div style={{fontSize:"2.5rem",marginBottom:16}}>🌸</div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",color:"#fff",marginBottom:10}}>Message sent!</h3>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.45)",fontWeight:300}}>{"I'll be in touch soon."}</p>
              </div>
            ):(
              <div style={{background:"rgba(255,255,255,0.04)",borderRadius:16,padding:32,border:"1px solid rgba(255,255,255,0.08)"}}>
                <div style={{display:"flex",flexDirection:"column",gap:14}}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                    <input placeholder="Your name" value={form.name} onChange={e=>setForm(s=>({...s,name:e.target.value}))} style={iStyle} onFocus={e=>{e.target.style.borderColor=P;}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.15)";}}/>
                    <input placeholder="Email" value={form.email} onChange={e=>setForm(s=>({...s,email:e.target.value}))} style={iStyle} onFocus={e=>{e.target.style.borderColor=P;}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.15)";}}/>
                  </div>
                  <textarea placeholder="Tell me about your project or role..." rows={5} value={form.message} onChange={e=>setForm(s=>({...s,message:e.target.value}))} style={{...iStyle,resize:"vertical",lineHeight:1.65}} onFocus={e=>{e.target.style.borderColor=P;}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.15)";}}/>
                  <button onClick={()=>setSent(true)} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.88rem",fontWeight:500,padding:14,background:P,color:"#fff",border:"none",borderRadius:8,cursor:"pointer",transition:"all 0.3s cubic-bezier(0.22,1,0.36,1)",boxShadow:"0 4px 20px rgba(212,133,154,0.38)"}} onMouseEnter={e=>{e.currentTarget.style.background=PL;e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.background=P;e.currentTarget.style.transform="translateY(0)";}}>Send Message</button>
                </div>
              </div>
            )}
          </Reveal>
        </div>
        <div style={{marginTop:80,paddingTop:28,borderTop:"1px solid rgba(255,255,255,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontFamily:"'Playfair Display',serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.28)",fontStyle:"italic"}}>Your Name</span>
          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.7rem",color:"rgba(255,255,255,0.18)",letterSpacing:"0.08em"}}>2025 · Designed and built by me</span>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio(){
  const[active,setActive]=useState("hero");
  useEffect(()=>{
    const ids=["hero","work","about","resume","contact"];
    const obs=ids.map(id=>{
      const el=document.getElementById(id);if(!el)return null;
      const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setActive(id);},{threshold:0.35});
      o.observe(el);return o;
    });
    return()=>obs.forEach(o=>o?.disconnect());
  },[]);
  return(
    <div style={{background:"#FAFAF8",cursor:"none"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body,a,button{cursor:none!important;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#FAFAF8;}
        ::-webkit-scrollbar-thumb{background:rgba(212,133,154,0.32);border-radius:2px;}
        textarea,input{font-family:'DM Sans',sans-serif;}
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.3);}
      `}</style>
      <Cursor/>
      <Nav active={active}/>
      <Hero/>
      <Work/>
      <About/>
      <Resume/>
      <Contact/>
    </div>
  );
}
