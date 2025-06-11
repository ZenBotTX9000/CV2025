'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  Download,
  MessageCircle,
  Sun,
  Moon,
  Globe,
  Heart,
  Star,
  BookOpen,
  Code,
  Camera,
  Plane,
  Languages,
  Gamepad2,
  Dumbbell,
  Home,
  DollarSign
} from 'lucide-react';
import Chatbot from '@/components/Chatbot';

// Theme context
const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDark, toggleTheme };
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Header Component
const Header = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => (
  <motion.header
    className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-opacity-20 ${
      isDark ? 'bg-dark-gradient border-beige-gradient' : 'bg-light-gradient border-dark-gradient'
    }`}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
  >
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <motion.h1
        className="text-2xl font-bold bg-beige-gradient bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ryan St Dare
      </motion.h1>
      <motion.button
        onClick={toggleTheme}
        className={`p-2 rounded-full ${
          isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
        } text-white hover:scale-110 active:scale-95`}
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  </motion.header>
);

// Hero Section
const HeroSection = ({ isDark }: { isDark: boolean }) => (
  <motion.section
    className={`min-h-screen flex items-center justify-center ${
      isDark ? 'bg-dark-gradient' : 'bg-light-gradient'
    } pt-20`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="container mx-auto px-4 text-center">
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="mb-8"
      >
        <div className={`w-32 h-32 mx-auto rounded-full bg-beige-gradient flex items-center justify-center mb-6 shadow-2xl`}>
          <User size={64} className="text-gray-700" />
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 bg-beige-gradient bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Ryan St Dare
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-8 opacity-90"
        variants={itemVariants}
      >
        TEFL+TESOL Master | English Educator | Web Developer
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2 bg-beige-gradient px-4 py-2 rounded-full text-gray-700">
          <Calendar size={16} />
          <span>Age 36</span>
        </div>
        <div className="flex items-center gap-2 bg-beige-gradient px-4 py-2 rounded-full text-gray-700">
          <MapPin size={16} />
          <span>South Africa</span>
        </div>
        <div className="flex items-center gap-2 bg-beige-gradient px-4 py-2 rounded-full text-gray-700">
          <Mail size={16} />
          <span>rstdare@gmail.com</span>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={itemVariants}
      >
        <motion.button
          className={`px-6 py-3 rounded-full font-semibold ${
            isDark ? 'bg-light-gradient text-gray-700' : 'bg-dark-gradient text-white'
          } hover:scale-105 active:scale-95 shadow-lg`}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/documents/RSDCertification.pdf';
            link.download = 'Ryan_St_Dare_CV.pdf';
            link.click();
          }}
        >
          <Download size={16} className="inline mr-2" />
          Download CV
        </motion.button>
        <motion.button
          className="px-6 py-3 rounded-full font-semibold bg-beige-gradient text-gray-700 hover:scale-105 active:scale-95 shadow-lg"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => {
            const chatButton = document.querySelector('button[class*="bottom-6"]') as HTMLButtonElement;
            if (chatButton) chatButton.click();
          }}
        >
          <MessageCircle size={16} className="inline mr-2" />
          Chat with AI
        </motion.button>
      </motion.div>
    </div>
  </motion.section>
);

// Personal Info Section
const PersonalInfoSection = ({ isDark }: { isDark: boolean }) => (
  <motion.section
    className={`py-20 ${isDark ? 'bg-light-gradient' : 'bg-dark-gradient'}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 bg-beige-gradient bg-clip-text text-transparent"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Personal Information
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: User, label: "Full Name", value: "Ryan St Dare" },
          { icon: Calendar, label: "Date of Birth", value: "March 29, 1989" },
          { icon: MapPin, label: "Nationality", value: "South African" },
          { icon: Heart, label: "Marital Status", value: "Bachelor" },
          { icon: Award, label: "Certification", value: "TEFL+TESOL Master" },
          { icon: Globe, label: "Languages", value: "English (Native), Afrikaans" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl ${
              isDark ? 'bg-dark-gradient' : 'bg-light-gradient'
            } shadow-xl hover:shadow-2xl`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-beige-gradient mr-4">
                <item.icon size={24} className="text-gray-700" />
              </div>
              <h3 className="font-semibold text-lg">{item.label}</h3>
            </div>
            <p className="opacity-90">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={`mt-12 p-8 rounded-2xl ${
          isDark ? 'bg-dark-gradient' : 'bg-light-gradient'
        } shadow-xl`}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-6 bg-beige-gradient bg-clip-text text-transparent">
          Professional Description
        </h3>
        <p className="text-lg leading-relaxed opacity-90">
          A diligent employee with a confident demeanor, conducts himself with professionalism,
          contributing to positive and ethical work environments. A fast learner, well-versed in
          modern trends and technologies, computer literate, capable of completing tasks independently
          and collaboratively. Lightly freckled, auburn hair (short-styled), grey and yellow eyes
          (sometimes appearing green or blue), average height, maintains a healthy, exercised physique.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

// Education Section
const EducationSection = ({ isDark }: { isDark: boolean }) => (
  <motion.section
    className={`py-20 ${isDark ? 'bg-dark-gradient' : 'bg-light-gradient'}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 bg-beige-gradient bg-clip-text text-transparent"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education & Qualifications
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className={`p-8 rounded-2xl ${
            isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
          } shadow-xl mb-8`}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-beige-gradient mr-4">
              <GraduationCap size={32} className="text-gray-700" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">High School Education</h3>
              <p className="opacity-75">Abbotts College (Cambridge Syllabus)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Academic Subjects</h4>
              <div className="space-y-2">
                {[
                  { subject: "English: First Language", grade: "HG", percentage: "70%-79%" },
                  { subject: "Afrikaans: Second Language", grade: "HG", percentage: "50%-59%" },
                  { subject: "Physiology", grade: "HG", percentage: "40%-49%" },
                  { subject: "History", grade: "HG", percentage: "60%-69%" },
                  { subject: "Speech and Drama", grade: "HG", percentage: "50%-59%" },
                  { subject: "Computer Studies", grade: "SG", percentage: "80%-100%" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-beige-gradient text-gray-700"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="font-medium">{item.subject}</span>
                    <div className="text-right">
                      <div className="font-bold">{item.grade}</div>
                      <div className="text-sm">{item.percentage}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Additional Information</h4>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-beige-gradient text-gray-700">
                  <div className="font-bold text-lg">Aggregate: PASSED WITH MERIT</div>
                  <div>Score: 1260-1439</div>
                </div>
                <div className="p-4 rounded-lg bg-beige-gradient text-gray-700">
                  <div className="font-bold">IQ Score</div>
                  <div>138 (recorded at age 14)</div>
                </div>
                <div className="p-4 rounded-lg bg-beige-gradient text-gray-700">
                  <div className="font-bold">Educational Path</div>
                  <div>Kenridge Primary → Stellenberg High → Abbotts College</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`p-8 rounded-2xl ${
            isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
          } shadow-xl`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-beige-gradient mr-4">
              <Award size={32} className="text-gray-700" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Higher Education & Certifications</h3>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-beige-gradient text-gray-700">
              <h4 className="font-bold text-lg mb-2">AFDA - BA in Motion Picture Medium</h4>
              <p className="mb-2">Majoring in Cinematography, Directing, Editing, and Script Writing</p>
              <p className="text-sm opacity-75">2008-2009 | Studies not concluded due to economic constraints from the 2008 financial recession</p>
              <p className="text-sm mt-2 font-medium">Noted as an excellent contributor on set</p>
            </div>

            <div className="p-6 rounded-lg bg-beige-gradient text-gray-700">
              <h4 className="font-bold text-lg mb-2">TEFL+TESOL Master Certification</h4>
              <p>Teaching English as a Foreign Language + Teaching English to Speakers of Other Languages</p>
              <p className="text-sm mt-2 font-medium">Master Level Certification</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Work Experience Section
const WorkExperienceSection = ({ isDark }: { isDark: boolean }) => (
  <motion.section
    className={`py-20 ${isDark ? 'bg-dark-gradient' : 'bg-light-gradient'}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 bg-beige-gradient bg-clip-text text-transparent"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-beige-gradient rounded-full hidden md:block"></div>

          {[
            {
              year: "2025",
              title: "High School English Educator",
              company: "Benchamaratrungsarit 2 High School",
              location: "Chachoengsao, Thailand",
              description: "Conducted Core English, Public Speaking, English for Careers, and Independent Studies for first-year, 5th-year, and graduation-year learners.",
              icon: BookOpen
            },
            {
              year: "2024",
              title: "Part-Time Adult English Educator",
              company: "ISE Adult Centers",
              location: "Ho Chi Minh, Vietnam",
              description: "Instructed adults in Pronunciation, Phonetics, Communication, Social Dialogue, Public Speaking, and Reading across Elementary, Intermediate, and Upper levels.",
              icon: Languages
            },
            {
              year: "2024",
              title: "Full-Time English Educator",
              company: "Sovannapumi",
              location: "Phnom Penh, Cambodia",
              description: "Taught primary and secondary English classes using the MacMillan syllabus.",
              icon: GraduationCap
            },
            {
              year: "2024",
              title: "Supplementary Homeroom Teacher",
              company: "Anuban MaeSai",
              location: "MaeSai, Thailand",
              description: "Taught lower-level classes in English, Science, Biology, Mathematics, Occupation, and Health & Well-Being (contracted by The Learning Center).",
              icon: BookOpen
            },
            {
              year: "2024",
              title: "Supplementary English Teacher",
              company: "CVK School & Chiang Rai Municipality 7",
              location: "Chiang Rai, Thailand",
              description: "Instructed lower-level students on Vocabulary, Sentence Construction, and Grammar (contracted by The Learning Center).",
              icon: Languages
            },
            {
              year: "2023-2024",
              title: "English Homeroom Teacher",
              company: "CR PAO",
              location: "Chiang Rai, Thailand",
              description: "Paired with a Thai teacher, taught Integrated Studies (English, Mathematics, History, Geography, Science, etc.) to lower levels.",
              icon: GraduationCap
            },
            {
              year: "2023",
              title: "English Educator",
              company: "Super Youth, CAE, Outeref",
              location: "Ho Chi Minh, Vietnam",
              description: "Taught Starters, Movers, Flyers, IELTS to primary and secondary levels. American-based communication-centric instruction with improvisation skills. Conducted introductory tests and ambassadored at branch openings.",
              icon: Languages
            },
            {
              year: "2022",
              title: "Full-Time English Educator",
              company: "VMG",
              location: "Bien Hoa, Vietnam",
              description: "Constructed own lessons, taught lower levels in large and small classes at centers and public schools.",
              icon: BookOpen
            },
            {
              year: "2021",
              title: "Game Artist",
              company: "Tiny Forge Studios",
              location: "Remote",
              description: "Worked on 3D modeling and texturing for the game Tiny Tactics on Steam.",
              icon: Gamepad2
            },
            {
              year: "2020",
              title: "Freelance Graphic Designer",
              company: "Self-Employed",
              location: "Remote",
              description: "Created 2D and 3D logos and typefaces for startups using Affinity Designer and Blender.",
              icon: Code
            },
            {
              year: "2018-2019",
              title: "Full-Time English Teacher",
              company: "Guang Zhao School",
              location: "Phnom Penh, Cambodia",
              description: "Taught Levels 1, 2, 3, focusing on Vocabulary, Phonetics, Sentence Construction, Grammar, and Reading.",
              icon: GraduationCap
            },
            {
              year: "2016-2017",
              title: "Freelance Web Developer",
              company: "Arietis Online",
              location: "South Africa",
              description: "Created websites including ArietisOnline.co.za and SimplyRedTea.com.",
              icon: Code
            },
            {
              year: "2015-2016",
              title: "Web Developer & Designer Intern",
              company: "Optic Blaze",
              location: "South Africa",
              description: "Learned HTML, CSS, JS, jQuery, PHP, SQL, SEO, and content management systems like Silverstripe and WordPress.",
              icon: Code
            },
            {
              year: "2013-2014",
              title: "Apprentice",
              company: "Missing Piece Films",
              location: "South Africa",
              description: "Assisted an expert wedding film cinematographer in producing quality films.",
              icon: Camera
            },
            {
              year: "2011-2012",
              title: "Samsung Brand Ambassador",
              company: "Samsung",
              location: "South Africa",
              description: "Stationed in upmarket stores like Dion Wired, promoted, marketed, and sold premium Samsung products, managed stock, tallied sales, and assisted at promotions and exhibitions.",
              icon: Star
            },
            {
              year: "2010",
              title: "Audio and Visual Specialist",
              company: "Hi-Fi Corporation",
              location: "South Africa",
              description: "Provided expert service and advice on Television, Home Theatre, computers, appliances, cameras, and cellphones, working on-site, off-site, and via telecommunications.",
              icon: Star
            },
            {
              year: "2009",
              title: "Camera Operator",
              company: "Rat Race Media",
              location: "South Africa",
              description: "Downhill Car Racing, Camera Operator.",
              icon: Camera
            }
          ].map((job, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-6 h-6 bg-beige-gradient rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  className={`p-6 rounded-2xl ${
                    isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
                  } shadow-xl hover:shadow-2xl`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-beige-gradient mr-4">
                      <job.icon size={24} className="text-gray-700" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold bg-beige-gradient bg-clip-text text-transparent">
                        {job.year}
                      </div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-lg font-semibold opacity-90">{job.company}</p>
                      <p className="text-sm opacity-75 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <p className="opacity-90 leading-relaxed">{job.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

// Skills & Interests Section
const SkillsSection = ({ isDark }: { isDark: boolean }) => (
  <motion.section
    className={`py-20 ${isDark ? 'bg-light-gradient' : 'bg-dark-gradient'}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 bg-beige-gradient bg-clip-text text-transparent"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Interests
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            category: "Teaching Skills",
            icon: BookOpen,
            skills: ["Vocabulary", "Pronunciation", "Presentation", "Engagement", "Planning", "Management", "TEFL+TESOL", "IELTS", "Cambridge Syllabus"]
          },
          {
            category: "Technology",
            icon: Code,
            skills: ["HTML/CSS/JavaScript", "Next.js", "React", "PHP", "SQL", "WordPress", "Silverstripe", "Linux", "Windows", "Custom ROMs", "AI Tools"]
          },
          {
            category: "Creative Skills",
            icon: Camera,
            skills: ["Cinematography", "Directing", "Editing", "Script Writing", "3D Modeling", "Graphic Design", "Affinity Designer", "Blender"]
          },
          {
            category: "Languages",
            icon: Languages,
            skills: ["English (Native)", "Afrikaans", "Khmer (Basic)", "Thai (Basic)", "Korean (Exposure)", "Japanese (Exposure)", "Chinese (Exposure)"]
          },
          {
            category: "Travel & Culture",
            icon: Plane,
            skills: ["South Africa", "Namibia", "Ethiopia", "USA", "Dubai", "Cambodia", "Vietnam", "Thailand", "Myanmar Border", "Cultural Adaptation"]
          },
          {
            category: "Sports & Fitness",
            icon: Dumbbell,
            skills: ["Hockey (Provincial Level)", "Cricket", "Skateboarding", "BMX", "Snowboarding", "Fitness Training", "Healthy Lifestyle"]
          },
          {
            category: "Cryptocurrency",
            icon: DollarSign,
            skills: ["Blockchain Technology", "20+ Networks", "dApps", "Smart Contracts", "Solidity", "Go Programming", "Trading Platforms", "USDC Payments"]
          },
          {
            category: "Interests",
            icon: Heart,
            skills: ["Modern Design", "UI/UX", "Industrial Design", "Architecture", "Fantasy Literature", "Gaming (RPG, MOBA)", "Environmental Consciousness", "Animal Welfare"]
          },
          {
            category: "Life Experience",
            icon: Home,
            skills: ["Minimalist Lifestyle", "Independent Living", "Farm Work", "Wine & Olive Production", "Financial Resilience", "Adaptability", "Problem Solving"]
          }
        ].map((skillGroup, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl ${
              isDark ? 'bg-dark-gradient' : 'bg-light-gradient'
            } shadow-xl hover:shadow-2xl`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-beige-gradient mr-4">
                <skillGroup.icon size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-bold">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-3 py-1 bg-beige-gradient text-gray-700 rounded-full text-sm font-medium"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Documents Section
const DocumentsSection = ({ isDark }: { isDark: boolean }) => (
  <motion.section
    className={`py-20 ${isDark ? 'bg-dark-gradient' : 'bg-light-gradient'}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 bg-beige-gradient bg-clip-text text-transparent"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Documents & Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "TEFL+TESOL Certification",
            description: "Master Level Teaching Certification",
            filename: "RSDCertification.pdf",
            icon: Award,
            type: "PDF"
          },
          {
            title: "Criminal Clearance Certificate",
            description: "South African Police Clearance",
            filename: "RSDCriminalClearance.jpg",
            icon: Award,
            type: "Image"
          },
          {
            title: "Complete CV",
            description: "Comprehensive Curriculum Vitae",
            filename: "ryan-st-dare-cv.pdf",
            icon: User,
            type: "PDF"
          }
        ].map((doc, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl ${
              isDark ? 'bg-light-gradient' : 'bg-dark-gradient'
            } shadow-xl hover:shadow-2xl text-center`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-beige-gradient">
                <doc.icon size={32} className="text-gray-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
            <p className="opacity-75 mb-6">{doc.description}</p>
            <motion.a
              href={`/documents/${doc.filename}`}
              download
              className="inline-flex items-center px-6 py-3 bg-beige-gradient text-gray-700 rounded-full font-semibold hover:scale-105 active:scale-95 shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Download size={16} className="mr-2" />
              Download {doc.type}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);


export default function CVPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />
      <PersonalInfoSection isDark={isDark} />
      <EducationSection isDark={isDark} />
      <WorkExperienceSection isDark={isDark} />
      <SkillsSection isDark={isDark} />
      <DocumentsSection isDark={isDark} />
      <Chatbot isDark={isDark} />
    </main>
  );
}
