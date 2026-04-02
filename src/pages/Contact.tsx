import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, Github, Linkedin, Twitter } from "lucide-react";
import { useSubmitContact } from "@/hooks/use-contact";

export default function Contact() {
  const { mutate, isPending } = useSubmitContact();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => setFormData({ name: "", email: "", message: "" })
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "soniya@example.com",
      link: "mailto:soniya@example.com",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Social",
      value: "@soniya_dev",
      link: "#",
      color: "text-green-600 bg-green-100"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Soniya-Pangatte/", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-display font-bold mb-6"
                >
                  Let's work <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    together.
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-slate-400 text-lg"
                >
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${info.color} dark:bg-opacity-20`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{info.title}</p>
                      <p className="font-medium text-white group-hover:text-blue-400 transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-700/50"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2 relative"
                    >
                      <label htmlFor="name" className="text-sm font-medium text-white pl-1">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-2 relative"
                    >
                      <label htmlFor="email" className="text-sm font-medium text-white pl-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-sm font-medium text-white pl-1">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Hi Soniya, I'd like to talk about..."
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg"
                  >
                    {isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}