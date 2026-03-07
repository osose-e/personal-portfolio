import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { FaHammer } from "react-icons/fa6";

const C = {
  base: "#FAFAF8", surface: "#F4F2EE", navy: "#1B2A4A", navyLight: "#2C3F6A",
  pink: "#A85A6D", pinkLight: "#B86B7D", pinkPale: "#FBF0F3",
  brown: "#8B6E5A", brownLight: "#C4A899", text: "#2A2420",
  muted: "#7A7068", border: "rgba(27,42,74,0.1)",
};
const BASE = import.meta.env.BASE_URL;

const PROJECTS = [
  { id:1, title:"Stanford eReceipts Redesign", subtitle:"Service redesign — needfinding, user research, & prototyping", year:"2025", tags:["UX Research","Figma","Needfinding","RITE Testing","Service Design"], color:"#FBF0F3", accent:"#A85A6D", summary:"A 10-week UX design study for clients Stanford Financial Management (FMS) to increase eReceipts application adoption among students and faculty. Needfinding and RITE Testing revealed that users need contextual policy guidance and adaptive flow; we completely redesigned the eReceipts platform and satisifed our client's core needs.", overview:"Stanford’s reimbursement process was decentralized, opaque, and emotionally taxing; eReceipts has seen low adoption since launch. Our 10-week UX study combined needfinding interviews across faculty, student Finacial Officers, lab managers, and affiliates with Rapid Iterative Testing and Evaluation (RITE) on digital prototypes. Grounded theory synthesis yielded two core insights: (1) eReceipts is perceived as redundant with existing systems (email, Google Sheets, GrantEd), and (2) users are frustrated by opaque policy communication and repetitive, overwhelming submission flows. We recommended a redesigned app with a more intuitive flow along with a Helpbot integrated into eReceipts: a RAG-based system with contextual tagging (role, grant, department) for granular, trustworthy policy answers; an adaptive UI with “expert mode” search for experienced staff and card-based flows for novices; and human-agent escalation embedded in the chat. Deliverables included actor maps, interview synthesis, journey maps, service blueprints, HMWs, grounded theory, rapid experimentation, interim and final client presentations, and paper-through–high-fidelity prototypes validated via RITE. Full details are in the linked document below.", role:"UX Designer & Researcher", impact:["Evidence-based Application and Service design recommendations to Stanford FMS","RITE-validated adaptive flow (expert vs novice) and trust (source links, human escalation)","Grounded theory and journey maps (Undergrad FO, Grad lab, Traveling affiliate) informed solution"], process:["Phase 1: Needfinding — actor map, recruiting plan, interviews, FigJam synthesis, grounded theory, journey maps, service blueprints, HMWs, rapid experimentation, interim presentation","Phase 2: Ideation — molecule, comparator, concept sketches, PRD, paper prototype","Phase 2: Digital prototypes and RITE testing with immediate design iteration","Phase 2: Mood boards, style tiles, Figma prototype; final presentation and summary document for client"], slug:"ereceipts", fullDetailsUrl:"https://docs.google.com/document/d/161FIhmjpd2_Giw3x3LgN6yMEPcJR7S2GwGWx8KNv5rc/edit?tab=t.0", figmaUrl:"https://www.figma.com/design/FeTLCS3bs8qkFZipaqtd0m/CS-247S--eReceipt-Design--Osose-?node-id=0-1&p=f&t=vZzz1VQZbzHHtd8f-0", medFiUrl:"https://www.figma.com/proto/FeTLCS3bs8qkFZipaqtd0m/CS-247S--eReceipt-Design--Osose-?node-id=0-1&t=oMwWlgPdVqPkFoIV-1", highFiUrl:"https://most-pepper-03391438.figma.site/", demoUrl:"https://drive.google.com/file/d/14ESdr1nUNGMS488SnI2HcXYqjwlIGPwO/view", live:"#", images:[`${BASE}images/ereceipt_screens.png`] },
  { id:2, title:"Wing", subtitle:"SWE & Design — mobile app", slug:"wing", year:"2025", tags:["React Native","TypeScript","Supabase","Product Design","Mobile"], color:"#FBF0F3", accent:"#A85A6D", summary:"Where your friends become your Wing. A dating app that lets you delegate trusted friends to recommend matches for you—more accountability, less ghosting, and a warmer, more human experience.", overview:"Wing reimagines dating as a team effort. Instead of swiping alone, users delegate friends as wingmen or wingwomen to browse profiles and send recommendations with a single tap; those recommendations appear in a Matches feed where you see who suggested them, view full profiles, and message or pass. You can also matchmake for friends. The app combines social trust with simple, intuitive design. I contributed as both software engineer and designer: I worked on the Supabase backend and data layer (recommendations, matchmaker permissions, friends, messages, profiles, real-time subscriptions), built features and UI with React Native and TypeScript, and on the design side identified the color palette, designed the logo, and selected the typefaces. Full project details are in the linked document below.", role:"Software Engineer & Designer", impact:["Matchmaking flow with swipe gestures and Supabase-backed recommendations","Real-time delegate matchmakers, friend management, and matches view","Designed visual identity: color palette, logo, and typography"], process:["Product concept: dating as shared experience with friend-delegated matchmaking","Supabase schema and real-time subscriptions (recommendations, permissions, friends, messages)","React Native implementation: swipe (Animated API), profiles, chat, filtering","Design: color palette, logo, typography"], fullDetailsUrl:"https://docs.google.com/document/d/1SQnbnqX1SWN5wZaEiLtasH40obpXRgfeaQHZRROmykE/edit?tab=t.0", demoUrl:"https://youtu.be/lMPnq9K3Dmc", github:"https://github.com/osose-e/wing", live:"#", images:[`${BASE}images/wing-screens.png`], githubLabel:"Github*", disclaimer:"*This is a private repository. To be invited to the repository, please email osose@stanford.edu with your github username/email." },
  { id:3, title:"Lines and Letters", subtitle:"Software Engineering & Design — multiplayer word game", year:"2024", tags:["React","Flask","Firebase","Full Stack","Figma"], color:"#FBF0F3", accent:"#A85A6D", summary:"A live, online multiplayer word game combining Dots and Boxes with Anagrams: capture letters on the grid, then build words for points. Built with React, Flask, and Firebase.", overview:"Lines and Letters is a multiplayer word game that merges two classics: a modified Dots and Boxes phase where players capture letters (each with a point value), then an Anagrams phase where they use those letters to form words for scoring. The site runs on Firebase Hosting with Google Cloud Functions; the backend is Flask/Python and the frontend is React. We iterated over about seven weeks on gameplay, grid generation, scoring, and accessibility—including nine reflexive color palettes to support users with colorblindness. The result is an end-to-end flow for single player (against multiple CPU difficulty levels) and multiplayer lobbies supporting hundreds of simultaneous games, plus user profiles and an in-game tutorial. Full project details are in the linked document below.", role:"Software Engineer & Designer", impact:["Shipped full game flow: single player and multiplayer (up to 4 players)","Accessible UI with 9 color palettes for colorblindness support","Scalable hosting for hundreds of simultaneous games"], process:["Ideation and design honing over several weeks","Flask/Python backend and React frontend implementation","Firebase Hosting and Google Cloud Functions deployment","User feedback and iteration on fairness and intuitiveness","Figma screens, prototype, PRD, and rapid prototyping deliverables"], fullDetailsUrl:"https://docs.google.com/document/d/1IOTIIxCwdrXd488n9EmI7jgB0gSCVvlOYzUHwGCqO6g/edit?tab=t.0#heading=h.4esxzzpublfu", figmaUrl:"https://www.figma.com/design/sRTv1cNrzf2rSyFHdi3h7T/Lines---Letters-Design?node-id=0-1&t=07nlAkCQ3OuvjaM1-1", slug:"lines-and-letters", live:"https://lines-and-letters-game.web.app/", liveLabel:"Live Site", github:"https://github.com/osose-e/lines-and-letters/tree/main", images:[`${BASE}images/lines-and-letters-screens.png`] },
  { id:4, title:"COOL Compiler", subtitle:"Software Engineering & System Design — compiler", slug:"cool-compiler", year:"2023", tags:["FLEX","Bison","C","MIPS","Compilers"], color:"#FBF0F3", accent:"#A85A6D", summary:"Designed and built a full compiler for the object-oriented language COOL: lexical analyzer, parser, semantic analyzer with type checking, and MIPS code generator. FLEX, Bison, C.", overview:"COOL is a small object-oriented language similar to C/C++, making a full compiler feasible in a course setting. I did software engineering and system design for a four-part compiler. Part 1: lexical analyzer using FLEX. Part 2: LALR parser using Bison that builds an abstract syntax tree (AST) for each program. Part 3: semantic analyzer and type checker that reports semantic errors and annotates the AST with type information. Part 4: stack-machine code generator for 32-bit MIPS. I also developed an extremely robust test suite for each of the four parts to validate correctness and edge cases.", role:"Software Engineer & System Designer", impact:["Full compiler pipeline: lexer → parser → semantic analysis → MIPS codegen","LALR parser with AST; semantic analyzer with type checking and error reporting","Comprehensive test suite for each compiler phase"], process:["Part 1: Lexical analysis with FLEX","Part 2: LALR parser (Bison) and AST construction","Part 3: Semantic analysis and type checking; AST annotation","Part 4: Code generation for 32-bit MIPS stack machine","Test suite design and implementation for all four parts"], github:"#", githubLabel:"Github*", disclaimer:"*This is a private repository. To be invited to the repository, please email osose@stanford.edu with your github username/email." },
];

const SKILLS = [
  { category:"Design", items:[{name:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},{name:"Illustrator",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"},{name:"Canva",icon:"https://cdn.simpleicons.org/canva/00C4CC"},{name:"Framer",icon:"https://cdn.worldvectorlogo.com/logos/framer-motion.svg"}]},
  { category:"Frontend", items:[{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Next.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"Tailwind",icon:"https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"}]},
  { category:"Backend", items:[{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Flask",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},{name:"Supabase",icon:"https://cdn.worldvectorlogo.com/logos/supabase-1.svg"},{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"}]},
  { category:"Programming Languages", items:[{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"C++",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},{name:"Ruby",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"},{name:"Objective C",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"},{name:"HTML/CSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"React.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Firebase",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},{name:"MATLAB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"},{name:"Flex",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},{name:"Bison",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},{name:"SPIM",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"}]},
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Cursor() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: -300, y: -300 });
  const smooth = useRef({ x: -300, y: -300 });
  useEffect(() => {
    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);
    let raf;
    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.08;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.08;
      if (glowRef.current) { glowRef.current.style.left = mouse.current.x + "px"; glowRef.current.style.top = mouse.current.y + "px"; }
      if (dotRef.current) { dotRef.current.style.left = smooth.current.x + "px"; dotRef.current.style.top = smooth.current.y + "px"; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={glowRef} style={{ position: "fixed", pointerEvents: "none", zIndex: 9999, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,90,109,0.18) 0%, rgba(168,90,109,0.06) 40%, transparent 70%)", transform: "translate(-50%,-50%)" }} />
      <div ref={dotRef} style={{ position: "fixed", pointerEvents: "none", zIndex: 10000, width: 8, height: 8, borderRadius: "50%", background: "#A85A6D", transform: "translate(-50%,-50%)", boxShadow: "0 0 12px #B86B7D" }} />
    </>
  );
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.9s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.9s ${delay}s cubic-bezier(0.22,1,0.36,1)`, ...style }}>
      {children}
    </div>
  );
}

function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Projects", "About", "Resume", "Contact"];
  return (
    <nav style={{ position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 200, background: scrolled ? "rgba(250,250,248,0.92)" : "rgba(250,250,248,0.65)", backdropFilter: "blur(16px)", border: "1px solid rgba(27,42,74,0.1)", borderRadius: 100, padding: "12px 32px", display: "flex", alignItems: "center", gap: 36, boxShadow: scrolled ? "0 8px 32px rgba(27,42,74,0.1)" : "0 2px 12px rgba(27,42,74,0.05)", transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)", whiteSpace: "nowrap", fontFamily: "'Playfair Display', serif" }}>
      <a href="#oe" style={{ display: "flex", alignItems: "center", textDecoration: "none", position: "relative", transition: "color 0.2s", paddingBottom: 2 }}>{active === "oe" && <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 1.5, background: "#A85A6D", borderRadius: 1 }} />}<img src={`${BASE}images/logo.png`} alt="Osose Ewaleifoh" style={{ height: 28, width: "auto", display: "block", opacity: active === "oe" ? 1 : 0.5, transition: "opacity 0.2s" }} /></a>
      <div style={{ width: 1, height: 16, background: "rgba(27,42,74,0.1)" }} />
      {links.map((l) => {
        const isActive = active === l.toLowerCase();
        return (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: "inherit", fontSize: "0.8rem", textDecoration: "none", color: isActive ? "#1B2A4A" : "#7A7068", fontWeight: isActive ? 700 : 400, position: "relative", transition: "color 0.2s", paddingBottom: 2 }}>
            {l}{isActive && <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 1.5, background: "#A85A6D", borderRadius: 1 }} />}
          </a>
        );
      })}
    </nav>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [done, setDone] = useState(false);
  const [sy, setSy] = useState(0);
  const [sayHiActive, setSayHiActive] = useState(false);
  const [scrollHintVisible, setScrollHintVisible] = useState(false);
  const [scrollHintHidden, setScrollHintHidden] = useState(false);
  const full = "Hello, I'm . . .";
  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
    let i = 0;
    const iv = setInterval(() => { setGreeting(full.slice(0, i + 1)); i++; if (i >= full.length) { clearInterval(iv); setDone(true); } }, 65);
    return () => clearInterval(iv);
  }, []);
  useEffect(() => {
    const t = setTimeout(() => setScrollHintVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const fn = () => setSy(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (sy > 40) setScrollHintHidden(true);
  }, [sy]);
  const fade = (d) => ({ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)", transition: `opacity 1s ${d}s cubic-bezier(0.22,1,0.36,1), transform 1s ${d}s cubic-bezier(0.22,1,0.36,1)` });
  const N = "#1B2A4A", P = "#A85A6D", B = "#8B6E5A", M = "#7A7068", BR = "rgba(27,42,74,0.1)";
  const showScrollHint = scrollHintVisible && !scrollHintHidden;
  return (
    <section id="oe" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 64px 80px", position: "relative", overflow: "hidden", background: "#FAFAF8" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "radial-gradient(circle, rgba(27,42,74,0.11) 1px, transparent 1px)", backgroundSize: "32px 32px", transform: `translateY(${sy * 0.25}px)`, maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%)" }} />
      <div style={{ position: "absolute", right: "4%", top: "12%", width: "45vw", height: "55vh", background: "radial-gradient(ellipse, rgba(168,90,109,0.11) 0%, transparent 70%)", transform: `translateY(${sy * 0.12}px)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 360px", gap: 80, alignItems: "center", position: "relative", zIndex: 2 }}>
        <div>
          <div style={{ ...fade(0.1), fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: M, marginBottom: 16, minHeight: "1.5em" }}>{greeting}<span style={{ opacity: done ? 0 : 1, transition: "opacity 0.3s" }}>|</span></div>
          <h1 style={{ ...fade(0.3), fontFamily: "'Playfair Display',serif", fontSize: "clamp(3.5rem,7vw,6.5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: P, marginBottom: 20 }}>Osose<br /><span style={{ color: P }}>Ewaleifoh</span><br /></h1>
          <p style={{ ...fade(0.48), fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "rgba(168,90,109,0.7)", letterSpacing: "0.06em", fontWeight: 500, marginBottom: 24 }}>Software Engineering and Design</p>
          <p style={{ ...fade(0.62), fontFamily: "'DM Sans',sans-serif", fontSize: "0.98rem", color: M, lineHeight: 1.85, maxWidth: 480, fontWeight: 300, marginBottom: 44 }}>Formally trained in both software/systems engineering and UX research and design, I receive a BS/MS from Stanford University in June 2026. I am passionate about design justice, universal design, and creating meaningful products.</p>
          <div style={{ ...fade(0.76), display: "flex", gap: 14 }}>
            <a href="#projects" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", fontWeight: 500, padding: "13px 30px", background: N, color: "#fff", textDecoration: "none", borderRadius: 8, boxShadow: "0 4px 20px rgba(27,42,74,0.2)", transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#2C3F6A"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = N; e.currentTarget.style.transform = "translateY(0)"; }}>View Projects</a>
            <a href="#contact" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", fontWeight: 500, padding: "13px 30px", border: `1.5px solid ${BR}`, color: N, textDecoration: "none", borderRadius: 8, background: "transparent", transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)", display: "inline-flex", alignItems: "center", gap: 8 }} onMouseEnter={(e) => { setSayHiActive(true); e.currentTarget.style.borderColor = P; e.currentTarget.style.color = P; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { setSayHiActive(false); e.currentTarget.style.borderColor = BR; e.currentTarget.style.color = N; e.currentTarget.style.transform = "translateY(0)"; }} onFocus={() => setSayHiActive(true)} onBlur={() => setSayHiActive(false)}>Say Hi!<img src={sayHiActive ? `${BASE}images/wave-active.png` : `${BASE}images/wave-inactive.png`} alt="" style={{ width: 20, height: 20, objectFit: "contain" }} /></a>
          </div>
        </div>
        <div style={{ ...fade(0.38), display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -16, borderRadius: "50%", border: "1.5px solid rgba(168,90,109,0.22)" }} />
            <div style={{ position: "absolute", inset: -32, borderRadius: "50%", border: "1px solid rgba(27,42,74,0.07)" }} />
            <div style={{ width: 300, height: 300, borderRadius: "50%", background: "linear-gradient(135deg,#FBF0F3 0%,#E8E4F0 50%,#E4EEF5 100%)", border: "3px solid rgba(168,90,109,0.28)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, position: "relative", zIndex: 1, boxShadow: "0 20px 60px rgba(168,90,109,0.2),0 4px 20px rgba(27,42,74,0.07)", overflow: "hidden" }}>
              <img src={`${BASE}images/osose.png`} alt="Professional portrait of Osose Ewaleifoh wearing a black graduation gown" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
            </div>
            <div style={{ position: "absolute", bottom: 16, right: -28, background: "#fff", border: "1px solid rgba(27,42,74,0.1)", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 24px rgba(27,42,74,0.1)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: N, fontWeight: 500, display: "flex", alignItems: "center", gap: 8, zIndex: 2, whiteSpace: "nowrap" }}>
              <img src={`${BASE}images/pin.png`} alt="" style={{ width: 14, height: 14, objectFit: "contain", flexShrink: 0 }} />Bay Area, CA
            </div>
          </div>
        </div>
      </div>
      {/* Scroll hint: appears 2s after load, hides on scroll */}
      {showScrollHint && (
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", opacity: scrollHintHidden ? 0 : 1, transition: "opacity 0.5s ease", pointerEvents: "none" }}>
          <div className="scroll-hint-visible" style={{ position: "relative", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: -12, borderRadius: "50%", border: "1.5px solid rgba(168,90,109,0.22)" }} />
            <div style={{ position: "absolute", inset: -24, borderRadius: "50%", border: "1px solid rgba(27,42,74,0.07)" }} />
            <img src={`${BASE}images/arrow.svg`} alt="" style={{ width: 28, height: 28, objectFit: "contain", filter: "brightness(0.9) saturate(1.1) hue-rotate(-5deg)" }} />
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 10); }, []);
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") { setVisible(false); setTimeout(onClose, 420); } };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);
  const close = () => { setVisible(false); setTimeout(onClose, 420); };
  const N = "#1B2A4A", M = "#7A7068", S = "#F4F2EE", BR = "rgba(27,42,74,0.1)";
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div onClick={close} style={{ position: "absolute", inset: 0, background: "rgba(27,42,74,0.42)", backdropFilter: "blur(8px)", opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 700, maxHeight: "88vh", borderRadius: 20, overflow: "hidden", opacity: visible ? 1 : 0, transform: visible ? "scale(1) translateY(0)" : "scale(0.93) translateY(28px)", transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)", boxShadow: "0 40px 100px rgba(27,42,74,0.22)", background: "#fff" }}>
        <div className="project-modal-content" style={{ maxHeight: "88vh", overflowY: "auto" }}>
        <div style={{ background: project.color, padding: "40px 44px 32px", borderRadius: "20px 20px 0 0", borderBottom: `1px solid ${project.accent}22` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", color: project.accent, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>{project.year} · {project.role}</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.1rem", color: N, marginBottom: 6, letterSpacing: "-0.02em" }}>{project.title}</h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "#8B6E5A" }}>{project.subtitle}</p>
            </div>
            <button onClick={close} style={{ width: 34, height: 34, borderRadius: "50%", border: `1px solid ${BR}`, background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", color: M, transition: "all 0.2s", flexShrink: 0 }} onMouseEnter={(e) => { e.currentTarget.style.background = N; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = M; }}>×</button>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
            {project.tags.map((t) => <span key={t} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", padding: "4px 14px", background: "#fff", border: `1px solid ${project.accent}28`, borderRadius: 100, color: project.accent, fontWeight: 500 }}>{t}</span>)}
          </div>
          {project.images && project.images.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 24 }}>
              {project.images.map((img, i) => (
                <img key={i} src={typeof img === "string" ? img : img.src} alt={typeof img === "string" ? `Project screenshot ${i + 1}` : (img.alt || `Project screenshot ${i + 1}`)} style={{ maxWidth: "100%", width: "auto", maxHeight: 380, objectFit: "contain" }} />
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: "36px 44px" }}>
          <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: N, marginBottom: 14 }}>Overview</h4>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.93rem", color: M, lineHeight: 1.85, fontWeight: 300, marginBottom: 32 }}>{project.overview}</p>
          <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: N, marginBottom: 14 }}>Impact</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 32 }}>
            {project.impact.map((item, i) => <div key={i} style={{ background: S, borderRadius: 10, padding: "14px 16px", border: `1px solid ${BR}` }}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: N, fontWeight: 500, lineHeight: 1.5 }}>{item}</p></div>)}
          </div>
          <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: N, marginBottom: 14 }}>Process</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {project.process.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: project.color, border: `1px solid ${project.accent}28`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", color: project.accent, fontWeight: 600, flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.87rem", color: M, lineHeight: 1.65, fontWeight: 300 }}>{step}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 24, borderTop: `1px solid ${BR}` }}>
            {[
              project.fullDetailsUrl && { href: project.fullDetailsUrl, label: "Full Project Details" },
              project.figmaUrl && { href: project.figmaUrl, label: "Figma" },
              project.medFiUrl && { href: project.medFiUrl, label: "Med-Fi Prototype" },
              project.highFiUrl && { href: project.highFiUrl, label: "High-Fi Prototype" },
              project.demoUrl && { href: project.demoUrl, label: "Demo" },
              project.live && project.live !== "#" && { href: project.live, label: project.liveLabel || "Live Project" },
              project.github && { href: project.github, label: project.githubLabel || "GitHub" },
            ].filter(Boolean).map((btn, i) => {
              const isPrimary = i % 2 === 0;
              const P = project.accent || "#A85A6D";
              return (
                <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", fontWeight: 500, padding: "11px 24px", textDecoration: "none", borderRadius: 8, transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)", ...(isPrimary ? { background: N, color: "#fff" } : { border: `1.5px solid ${BR}`, color: N, background: "transparent" }) }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; if (isPrimary) { e.currentTarget.style.background = "#2C3F6A"; } else { e.currentTarget.style.borderColor = P; e.currentTarget.style.color = P; } }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; if (isPrimary) { e.currentTarget.style.background = N; } else { e.currentTarget.style.borderColor = BR; e.currentTarget.style.color = N; } }}>{btn.label}</a>
              );
            })}
          </div>
          {project.disclaimer && (
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: M, lineHeight: 1.5, marginTop: 16, fontStyle: "italic" }}>
              {project.disclaimer}
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const N = "#1B2A4A", M = "#7A7068", BR = "rgba(27,42,74,0.1)";
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(36px)", transition: `opacity 0.8s ${index * 0.1}s cubic-bezier(0.22,1,0.36,1), transform 0.8s ${index * 0.1}s cubic-bezier(0.22,1,0.36,1)`, height: "100%", minHeight: 0 }}>
      <div onClick={() => onOpen(project)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? project.color : "#fff", border: `1px solid ${hovered ? project.accent + "30" : BR}`, borderRadius: 16, padding: 36, cursor: "pointer", transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)", transform: hovered ? "scale(1.024) translateY(-4px)" : "scale(1) translateY(0)", boxShadow: hovered ? "0 20px 48px rgba(27,42,74,0.11)" : "0 2px 12px rgba(27,42,74,0.04)", height: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: project.accent + "16", border: `1px solid ${project.accent}28`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: project.accent, fontWeight: 700 }}>{String(project.id).padStart(2, "0")}</div>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", color: M }}>{project.year}</span>
        </div>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: N, marginBottom: 6, letterSpacing: "-0.01em" }}>{project.title}</h3>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: project.accent, fontWeight: 500, marginBottom: 14 }}>{project.subtitle}</p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.87rem", color: M, lineHeight: 1.75, fontWeight: 300, marginBottom: 22, flex: "1 1 auto", minHeight: 0 }}>{project.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
          {project.tags.map((t) => <span key={t} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", padding: "4px 12px", background: project.accent + "10", border: `1px solid ${project.accent}22`, borderRadius: 100, color: project.accent, fontWeight: 500 }}>{t}</span>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: project.accent, fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", fontWeight: 500, marginTop: "auto" }}>
          <span>See details</span>
          <span style={{ transition: "transform 0.3s", transform: hovered ? "translateX(5px)" : "translateX(0)" }}>→</span>
        </div>
      </div>
    </div>
  );
}

function projectsHashToSlug() {
  const hash = window.location.hash.slice(1); // e.g. "projects/wing"
  const prefix = "projects/";
  if (hash.startsWith(prefix)) return hash.slice(prefix.length) || null;
  return null;
}

function Projects() {
  const [active, setActive] = useState(() => {
    const slug = projectsHashToSlug();
    return slug ? (PROJECTS.find((p) => p.slug === slug) ?? null) : null;
  });

  useEffect(() => {
    const syncFromHash = () => {
      const slug = projectsHashToSlug();
      setActive(slug ? (PROJECTS.find((p) => p.slug === slug) ?? null) : null);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const openProject = (project) => {
    setActive(project);
    window.location.hash = `projects/${project.slug}`;
  };

  const closeModal = () => {
    setActive(null);
    window.location.hash = "projects";
  };

  return (
    <section id="projects" style={{ minHeight: "100vh", padding: "100px 64px", background: "#F4F2EE" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A85A6D", marginBottom: 10 }}>Selected Projects</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#1B2A4A", marginBottom: 8, letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 12 }}>Tinkerings <FaHammer style={{ fontSize: "0.85em", color: "inherit" }} /></h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.93rem", color: "#7A7068", fontWeight: 300, marginBottom: 52, maxWidth: 420 }}>A selection of some of my favorite projects; click on any card for details!</p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridAutoRows: "1fr", gap: 20, alignItems: "stretch" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={openProject} />)}
        </div>
      </div>
      {active && <ProjectModal project={active} onClose={closeModal} />}
    </section>
  );
}

function About() {
  const N = "#1B2A4A", P = "#A85A6D", M = "#7A7068", B = "#8B6E5A", S = "#F4F2EE", BR = "rgba(27,42,74,0.1)";
  return (
    <section id="about" style={{ minHeight: "100vh", padding: "100px 64px", background: "#FAFAF8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: P, marginBottom: 10 }}>About</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: N, marginBottom: 48, letterSpacing: "-0.02em" }}>A little about me</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, marginBottom: 72 }}>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.97rem", color: M, lineHeight: 1.9, fontWeight: 300, marginBottom: 16 }}>I love systems thinking: breaking down complex problems, seeing how the pieces fit, and watching everything come together. That combination of engineering rigor and thoughtful design is what drives me, whether I'm building from the ground up or refining how something feels and works.</p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.97rem", color: M, lineHeight: 1.9, fontWeight: 300 }}>I believe the best products are ones you barely notice because they just work, beautifully. I'm passionate about design systems, accessible interfaces, and the details that make an experience feel considered.</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ background: S, borderRadius: 16, padding: "28px 30px", border: `1px solid ${BR}` }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: B, marginBottom: 16, fontWeight: 500 }}>Quick facts</p>
              {[["📍", "Based in", "Bay Area, CA"], ["🎓", "Education", "BS/MS in Computer Science"], ["🏫", "University", "Stanford University"], ["🌐", "Languages", "English, French"]].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: `1px solid ${BR}` }}>
                  <span>{icon}</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: M, fontWeight: 300, flex: 1 }}>{label}</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: N, fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: P, marginBottom: 24, fontWeight: 500 }}>Skills and Tools</p></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 2fr", gap: 16, alignItems: "stretch" }}>
          {SKILLS.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.07} style={{ height: "100%" }}>
              <div style={{ background: S, borderRadius: 14, padding: 22, border: `1px solid ${BR}`, height: "100%", minHeight: 0, display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.66rem", letterSpacing: "0.15em", textTransform: "uppercase", color: B, marginBottom: 18, fontWeight: 500, flexShrink: 0 }}>{group.category}</p>
                <div style={{ display: group.category === "Programming Languages" ? "grid" : "flex", flexDirection: group.category === "Programming Languages" ? undefined : "column", gridTemplateColumns: group.category === "Programming Languages" ? "1fr 1fr 1fr" : undefined, gap: 13, flex: 1, minHeight: 0 }}>
                  {group.items.map((skill) => (
                    <div key={skill.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img src={skill.icon} alt={skill.name} width={18} height={18} style={{ objectFit: "contain", flexShrink: 0 }} onError={(e) => { e.target.style.display = "none"; }} />
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.83rem", color: "#2A2420" }}>{skill.name}</span>
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

function Resume() {
  const N = "#1B2A4A", P = "#A85A6D", M = "#7A7068", B = "#8B6E5A", S = "#F4F2EE", BR = "rgba(27,42,74,0.1)", PP = "#FBF0F3";
  const experiences = [
    { role: "CS 106 Section Leader (Teaching Assistant)", company: "Stanford University", period: "2021 - Present", desc: <>Prepare and teach weekly sections for <strong>CS 106A (Python)</strong> and <strong>CS 106B (C++)</strong>. <strong>Grade</strong> problem sets, run <strong>office hours</strong>, score <strong>exams</strong>, and hold weekly <strong>1:1s</strong> to support students in the 106 course series.</> },
    { role: "Software Engineer (Intern)", company: "Apple, Inc.", period: "Summer 2024", desc: <>Worked on the <strong>WebKit Media</strong> team. Shipped feature work and support for <strong>automated captioning</strong> for video playback in WebKit on <strong>macOS</strong>, including a self-contained <strong>proof-of-concept</strong> app. Developed <strong>cross-process</strong> solutions for auto-captioning (<strong>GPU process</strong> audio capture, <strong>ML speech recognition</strong>, low-latency display in web content). Collaborated with <strong>senior engineers</strong> across Internet and User Privacy.</> },
    { role: "Software Engineer (Intern)", company: "Apple, Inc.", period: "Summer 2023", desc: <>Worked on the <strong>Safari Extensions</strong> team. Delivered feature work and support for Extensions infrastructure on <strong>macOS and iOS</strong>. Collaborated with <strong>Apple Privacy and Human Interactions</strong> on privacy and <strong>UX</strong>. Fixed pre-existing <strong>bugs</strong> and improved UX in Safari; built <strong>cross-process</strong> solutions in <strong>Objective C</strong> and <strong>JavaScript</strong> (learned on the job).</> },
    { role: "Software Engineer (Intern)", company: "Microsoft", period: "Summer 2022", desc: <>Worked on open-source <strong>Microsoft Kiota</strong> to deliver a lightweight, developer-customizable <strong>Ruby SDK</strong> for <strong>REST APIs</strong>. Designed and implemented a Ruby library for <strong>MS Graph authentication</strong> (no prior Ruby MSAL library). Fixed <strong>serialization</strong>, <strong>abstraction</strong>, and <strong>HTTP</strong> issues across the codebase and wrote <strong>documentation</strong> for the Ruby SDK. Worked in <strong>Ruby</strong>, <strong>C#</strong>, and <strong>.NET</strong> (learned on the job).</> },
  ];
  return (
    <section id="resume" style={{ minHeight: "100vh", padding: "100px 64px", background: S }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: P, marginBottom: 10 }}>Resume</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: N, letterSpacing: "-0.02em" }}>Experience</h2>
            </div>
            <a href="/resume.pdf" download="Ewaleifoh-Resume-Fall-2025.pdf" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", fontWeight: 500, padding: "11px 24px", background: N, color: "#fff", textDecoration: "none", borderRadius: 8, transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8 }} onMouseEnter={(e) => { e.currentTarget.style.background = "#2C3F6A"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = N; e.currentTarget.style.transform = "translateY(0)"; }}>Download PDF</a>
          </div>
        </Reveal>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, ${P}, rgba(168,90,109,0.1))` }} />
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ display: "flex", gap: 36, paddingBottom: 28, position: "relative" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff", border: `1.5px solid ${P}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, boxShadow: `0 0 0 5px ${PP}` }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: P }} />
                </div>
                <div style={{ background: "#fff", borderRadius: 14, padding: "26px 30px", border: `1px solid ${BR}`, flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.15rem", color: N, marginBottom: 4 }}>{exp.role}</h3>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.83rem", color: B, fontWeight: 500 }}>{exp.company}</p>
                    </div>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", color: M, background: S, padding: "4px 12px", borderRadius: 100, border: `1px solid ${BR}` }}>{exp.period}</span>
                  </div>
                  <p className="resume-desc" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.87rem", color: M, lineHeight: 1.75, fontWeight: 300 }}>{exp.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const N = "#1B2A4A", M = "#7A7068", B = "#8B6E5A";
  const [lottieData, setLottieData] = useState(null);
  useEffect(() => {
    fetch(`${BASE}images/message-sent.json`)
      .then((r) => r.json())
      .then(setLottieData)
      .catch(() => {});
  }, []);
  const contactLinks = [
    ["📧", "osose@stanford.edu", "mailto:osose@stanford.edu"],
    ["💼", "linkedin.com/in/osose", "https://www.linkedin.com/in/osose/"],
    ["🐙", "github.com/osose-e", "https://github.com/osose-e"],
  ];
  return (
    <section id="contact" style={{ padding: "80px 64px 100px", background: "#FAFAF8", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(27,42,74,0.11) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50vw", height: "60vh", background: "radial-gradient(ellipse, rgba(168,90,109,0.11) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A85A6D", marginBottom: 12 }}>Contact</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.4rem,5vw,3.6rem)", color: N, letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.15 }}>Reach out!</h2>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 90, flexWrap: "nowrap" }}>
              {lottieData && (
                <div style={{ width: "clamp(280px, 40vw, 380px)", flex: "0 0 auto" }}>
                  <Lottie animationData={lottieData} loop style={{ width: "100%", height: "auto" }} />
                </div>
              )}
              <div style={{ background: N, borderRadius: 16, padding: "32px 40px", border: "1px solid rgba(255,255,255,0.12)", display: "flex", flexDirection: "column", gap: 18, flex: "0 0 auto", width: 300, boxShadow: "0 4px 20px rgba(27,42,74,0.2)" }}>
              {contactLinks.map(([icon, label, href]) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem", color: "#fff", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.color = "#A85A6D"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; }}>
                  <span>{icon}</span>{label}
                </a>
              ))}
            </div>
            </div>
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.93rem", color: B, lineHeight: 1.85, fontWeight: 400, marginTop: 28, textAlign: "left" }}>I am currently on the lookout for full-time, entry-level opportunities in <strong style={{ color: "rgba(168,90,109,0.7)", fontWeight: 600 }}>software engineering</strong> and/or <strong style={{ color: "rgba(168,90,109,0.7)", fontWeight: 600 }}>product design</strong>. Reach out and say hi!</p>
        </Reveal>
        <div style={{ marginTop: 80, paddingTop: 28, borderTop: "1px solid rgba(27,42,74,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.92rem", color: M, fontStyle: "italic" }}>Osose Ewaleifoh</span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: M, letterSpacing: "0.08em" }}>2025 · OE</span> 
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("oe");
  useEffect(() => {
    const ids = ["oe", "projects", "about", "resume", "contact"];
    const obs = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(id); }, { threshold: 0.35 });
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, []);
  return (
    <div style={{ background: "#FAFAF8", cursor: "none" }}>
      <Cursor />
      <Nav active={active} />
      <Hero />
      <Projects />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}
