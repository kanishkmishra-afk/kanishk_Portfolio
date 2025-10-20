import { RevealOnScroll } from "../RevealOnScroll"

export const About=()=>{
    const frontendSkills=[
        "React.js (Hooks, routing)"," State Management(Redux Toolkit, Context API) ","TailwindCSS"
    ]
    const backendSkills=[
        "Node.js","Express.js","Flask","REST APIs","JWT Authentication","Cloudinary","Multer"
    ]
    const langauges=[
        "JavaScript","Java","C","Python","HTML5, CSS3 "
    ]
    const testing=[
        "Unit testing", "Static code analysis "
    ]
    const tools=[
        "Git", "GitHub", "Postman", "OpenSearch", "Vercel", "VS Code", "IntelliJ IDEA"
    ]
    const practices=[
        "JWT Authentication", "File upload", "Microservices", "Debugging", "Agile/Scrum", "CI/CD", "MVC Architecture"
    ]
    const realtime=[
        "Socket.io", "Cursor.ai", "Github Copilot", "Gen AI"
    ]
    const database=[
        "MongoDB", "Mongoose", "Appwrite Database/Storage"
    ]


    return(
        <section id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                     Full‑stack MERN developer who enjoys turning ideas into simple, fast web apps. On the front I build clean React interfaces; on the back I ship Node/Express APIs with MongoDB/Mongoose. Auth, uploads, and real‑time features are part of my toolkit. I deploy with CI/CD and learn by shipping small.
                </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Testing/CI</h3>
                            <div className="flex flex-wrap gap-2">
                                {testing.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Langauge</h3>
                            <div className="flex flex-wrap gap-2">
                                {langauges.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Databases</h3>
                            <div className="flex flex-wrap gap-2">
                                {database.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Realtime/AI Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {realtime.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Practices</h3>
                            <div className="flex flex-wrap gap-2">
                                {practices.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Master of Science in Computer Science</strong><br/>
                                Thakur Ranmat Singh College, Rewa (MP)<br/>
                                <span className="text-blue-400">Aug 2023 - Jul 2025</span>
                            </li>
                            <li>
                                <strong>Bachelor of Science (Hons) in Computer Science</strong><br/>
                                Awadhesh Pratap Singh University, Rewa (MP)<br/>
                                <span className="text-blue-400">Aug 2020 - Jul 2023</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Software Engineering Intern | CODERTECH | Jan 2025 – Jun 2025
                                </h4>
                                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                    <li>Built responsive UI components with React and Tailwind for product browsing, cart, and checkout</li>
                                    <li>Contributed to digital clinic management features</li>
                                    <li>Developed REST APIs in Node.js and MongoDB</li>
                                    <li>Collaborated through GitHub PRs and Agile sprints</li>
                                    <li>Improved code quality via unit tests and static analysis</li>
                                    <li>Supported CI workflows and code reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Certifications</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Software Development Internship Certificate
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Contributed to real-world development tasks, building front-end components, integrating backend services, and collaborating on live projects. Gained hands-on experience and recognition for reliability, teamwork, and technical skills.
                                </p>
                                <span className="text-blue-400 text-sm">Jun 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}