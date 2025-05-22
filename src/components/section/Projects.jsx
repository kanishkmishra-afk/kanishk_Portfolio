import { RevealOnScroll } from "../RevealOnScroll"

export const Projects=()=>{
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Blog-Space – A Full-Stack Blogging Platform</h3>
                        <p className="text-gray-400 mb-4"> 
                        "Designed and developed a full-stack blogging platform
enabling user authentication, post creation, editing, image
uploads, and secure private access to user content. Utilized
React for the frontend, Appwrite for backend services and
storage, and Redux Toolkit for efficient state management."

                        </p>
                        <div>
                            {["React.js","Redux Toolkit","Appwrite(BaaS)","RESTful API integration","File Upload & Image Handling"].map((tech,key)=>(
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex justify-between items-center gap-6">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://blog-space-bice.vercel.app/">View Project  </a>
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/kanishkmishra-afk/BlogSpace.git"> GitHub Repo</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[200px] lg:w-[220px]" src="projectss1.jpeg" alt="" />
                            <br />
                            <img className="w-[200px] lg:w-[220px]" src="projectss2.jpeg" alt="" />
                            </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Zentry-Zone Gaming Website</h3>
                        <p className="text-gray-400 mb-4"> 
                        A visually immersive and interactive web experience inspired by Zentry, designed to showcase luxury and modern aesthetics. This project features scroll-triggered animations, geometric clip-path transitions, 3D hover effects, and seamless video storytelling — all crafted for an engaging, responsive, and intuitive user journey. Built with a focus on clean architecture and code reusability, it delivers a refined blend of performance and design excellence.
                        </p>
                        <div>
                            {["Responsive Web Design","GSAP Animation","Advanced CSS Techniques","React Development","UI/UX Design"].map((tech,key)=>(
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex justify-between items-center gap-6">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="zentry-zone.vercel.app">View Project  </a>
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/kanishkmishra-afk/Zentry-Zone"> GitHub Repo</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[200px] lg:w-[220px]" src="project2ss1.png" alt="" />
                            <br />
                            <img className="w-[200px] lg:w-[220px]" src="project2ss2.png" alt="" />
                            </div>
                    </div>
                </div>
                
            </div>
            </RevealOnScroll>
        </section>
    )
}
