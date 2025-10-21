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
                    {/* VideoTube Backend - Most impressive project */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">VideoTube — Production-Ready Backend API</h3>
                        <p className="text-gray-400 mb-4"> 
                        Built a production-ready Node/Express REST API with JWT access/refresh tokens stored in secure http-only cookies. Implemented end-to-end media upload pipeline using Multer and Cloudinary for avatars, cover images, and video files. Designed modular MVC structure with separated routes, controllers, models, and middlewares for improved maintainability.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Node.js","Express.js","JWT Authentication","Cloudinary","Multer","MongoDB","MVC Architecture","REST APIs"].map((tech,key)=>(
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
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/kanishkmishra-afk/VideoTube">GitHub Repo</a>
                            </div>
                        </div>
                    </div>

                    {/* Chat-App */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Chat-App — Real-time MERN Application</h3>
                        <p className="text-gray-400 mb-4"> 
                        Built a real-time one-on-one chat application using MERN stack with Socket.io for instant messaging. Implemented secure authentication with JWT and hashed passwords, protected API routes, and developed responsive React UI for conversations with online status indicators.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["MERN Stack","Socket.io","JWT Authentication","Real-time Messaging","bcrypt","MongoDB","React.js"].map((tech,key)=>(
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
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://chat-app-1ifm.vercel.app/">Live Link</a>
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/kanishkmishra-afk/Chat-App">GitHub Repo</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog-Space */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Blog-Space — Full-Stack Blogging Platform</h3>
                        <p className="text-gray-400 mb-4"> 
                        Designed and developed a full-stack blogging platform enabling user authentication, post creation, editing, image uploads, and secure private access to user content. Utilized React for the frontend, Appwrite for backend services and storage, and Redux Toolkit for efficient state management.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
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
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://blog-space-bice.vercel.app/">View Project</a>
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/kanishkmishra-afk/BlogSpace.git">GitHub Repo</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[200px] lg:w-[220px]" src="projectss1.jpeg" alt="Blog-Space Screenshot" />
                        </div>
                    </div>

                    {/* Zentry-Zone */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Zentry-Zone Gaming Website</h3>
                        <p className="text-gray-400 mb-4"> 
                        A visually immersive and interactive web experience inspired by Zentry, designed to showcase luxury and modern aesthetics. Features scroll-triggered animations, geometric clip-path transitions, 3D hover effects, and seamless video storytelling for an engaging, responsive user journey.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
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
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://zentry-zone.vercel.app">View Project</a>
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/kanishkmishra-afk/Zentry-Zone">GitHub Repo</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[200px] lg:w-[220px]" src="project2ss1.png" alt="Zentry-Zone Screenshot" />
                        </div>
                    </div>
                </div>
                
            </div>
            </RevealOnScroll>
        </section>
    )
}
