import { RevealOnScroll } from "../RevealOnScroll"
import  emailjs  from "emailjs-com"
import { useState } from "react"

export const Contact=()=>{
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    })
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((result)=>{
            alert("message sent!")
            setFormData({name:"",email:"",message:""})
        }).catch(()=> alert("oops! something went wrong please try again"))
    }
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-blue-500">📧</span>
                                        <a href="mailto:kanishkm794@gmail.com" className="hover:text-blue-400 transition-colors">
                                            kanishkm794@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-blue-500">📱</span>
                                        <a href="tel:+917880035492" className="hover:text-blue-400 transition-colors">
                                            +91 7880035492
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-blue-500">📍</span>
                                        <span>Noida, Uttar Pradesh, India</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-blue-500">💼</span>
                                        <a href="https://linkedin.com/in/kanishk-mishra2001" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-blue-500">💻</span>
                                        <a href="https://github.com/kanishkmishra-afk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                            GitHub Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Resume Download */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Download Resume</h3>
                                <p className="text-gray-400 mb-4">
                                    Get a copy of my detailed resume with all my experience, projects, and skills.
                                </p>
                                <button 
                                    onClick={() => {
                                        // You'll need to add your resume PDF to the public folder
                                        const link = document.createElement('a');
                                        link.href = '/resume.pdf'; // Add your resume PDF to public folder
                                        link.download = 'Kanishk_Mishra_Resume.pdf';
                                        link.click();
                                    }}
                                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                >
                                    📄 Download Resume
                                </button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Send Message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="relative">
                                    <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Your Name..."
                                    onChange={(e)=> setFormData({...formData,name: e.target.value})}
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="your.email@example.com"
                                    onChange={(e)=> setFormData({...formData,email: e.target.value})}
                                    />
                                </div>
                                <div className="relative">
                                    <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Your message..."
                                    onChange={(e)=> setFormData({...formData,message: e.target.value})}
                                    />
                                </div>
                                <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}