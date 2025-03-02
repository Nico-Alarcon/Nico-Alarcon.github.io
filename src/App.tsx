import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Linkedin, Mail, ExternalLink, Download, Cpu, Zap, Radio, Brain, FileText } from 'lucide-react';
import githubIcon from './images/icons8-github_grey.svg';
import resume from './reports/NicolasAlarconResume.pdf';
import ProgrammableAAF from './reports/ProgrammableAAF.pdf';
import OscilloscopeAmplifier from './reports/OscilloscopeAmplifier.pdf';
import Lenscribe from './images/LenscribeConceptArt.png';
import BISC from './images/BISCRelay.png';
import gameboy from './images/gameboyproject.png';
import InProgress from './components/InProgress';
import GameBoyProject from './pages/GameBoyProject';

function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="relative h-96">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative h-full container mx-auto px-6 flex flex-col">
          {/* Name - Centered */}
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-8xl font-bold text-white" style={{ animation: 'slideIn 1s ease-out' }}>
              Nicolas Alarcon
            </h1>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative py-24 bg-white">
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">About Me</h2>
            <h3 className="text-2xl text-blue-600 mb-6">Electrical Engineering Senior at Columbia University</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Specializing in embedded systems, signal processing, and mixed signal circuit design. 
              Passionate about creating innovative solutions in embedded systems and biomedical devices.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:nicolas.alarcon@columbia.edu" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>nicolas.alarcon@columbia.edu</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nicolas-alarcon-0665a6149" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Nico-Alarcon" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a 
                href={resume} 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Download className="w-6 h-6" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <Cpu className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Embedded Systems</h3>
              <p className="text-gray-600">FPGA, SystemVerilog, MCU Development, Hardware Emulation</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Circuit Design</h3>
              <p className="text-gray-600">Analog Circuits, Filter Design, PCB Design, Signal Conditioning</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <Radio className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Signal Processing</h3>
              <p className="text-gray-600">DSP, Beamforming, Filter Implementation, Real-time Processing</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software</h3>
              <p className="text-gray-600">Python, MATLAB, C/C++, Cadence, Vivado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          
          {/* Major Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Major Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* VNA Analysis Dashboard */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" 
                  alt="Quantum Computing Lab"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">VNA Analysis Dashboard</h3>
                      <p className="text-blue-600 font-semibold">Thomas J. Watson Research Lab, IBM</p>
                      <p className="text-gray-500">May 2024 - August 2024 | Yorktown Heights, NY</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Quantum Hardware Engineering Intern developing tools for system failure diagnosis and signal integrity analysis
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Designed VNA Analysis Dashboard for rapid system failure diagnosis</li>
                      <li>Implemented statistical analysis for historical data comparison</li>
                      <li>Developed secure web server for S-Parameters analysis</li>
                      <li>Created Python device drivers for VNA and ZTM Switch Matrices</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Statistical Analysis', 'Web Development', 'Device Drivers', 'VNA', 'Signal Integrity'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/vna-dashboard" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Lenscribe Project */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={Lenscribe} 
                  alt="Lenscribe Project"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Lenscribe</h3>
                      <p className="text-blue-600 font-semibold">Senior Design Project</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Communication aid projecting real-time subtitles onto smart glasses using a beamformed microphone array
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Project manager and technical lead</li>
                      <li>Digital signal processing for beamforming</li>
                      <li>Microphone array simulation</li>
                      <li>System level design</li>
                      <li>Antialiasing analog filter design</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['DSP', 'Analog Design', 'MATLAB', 'Python', 'MCU', 'Raspberry Pi'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/lenscribe" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* GameBoy DMG Project */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={gameboy}
                  alt="GameBoy Project"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">GameBoy DMG Hardware Emulator</h3>
                      <p className="text-blue-600 font-semibold">Embedded Systems Course Project</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Created a hardware emulator accurate to patented Nintendo schematics with modern technological upgrades
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Led team of three developers</li>
                      <li>Implemented design verification</li>
                      <li>Developed software-hardware interfacing</li>
                      <li>Managed system integration</li>
                      <li>Successfully ran original 32kB games</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['FPGA', 'SystemVerilog', 'C/C++', 'Quartus', 'Verilator', 'Linux'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/gameboy-emulator" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Walking Quadruped Robot */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/1599841874563-MU14PCV1KCULVUBKXGRT/howls-moving-castle-disneyscreencaps.com-4492.jpg?format=2500w" 
                  alt="Quadruped Robot"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Walking Quadruped Robot</h3>
                      <p className="text-blue-600 font-semibold">Robotics Studio Course Project (In Progress)</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Design, Simulate, and Manufacture a legged locomotion robot from start to finish, controlled with a Raspberry Pi
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Components:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Mechanical design and optimization</li>
                      <li>Dynamic simulation in PyBullet</li>
                      <li>Gait pattern generation</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['System Integration', 'Raspberry Pi', 'Solidworks', 'PyBullet Simulation', 'Python'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/quadruped-robot" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Superscalar Processor */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" 
                  alt="Processor Architecture"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Superscalar Out-of-Order Processor</h3>
                      <p className="text-blue-600 font-semibold">Computer Architectures Course Project (In Progress)</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Designing and implementing a superscalar out-of-order processor with modern architectural features
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['SystemVerilog', 'Computer Architecture', 'RTL Design', 'Verification', 'RISC-V'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/superscalar-processor" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Turntable Project */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?auto=format&fit=crop&q=80" 
                  alt="Turntable Project"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Automated Vinyl Record Player</h3>
                      <p className="text-blue-600 font-semibold">Personal Project (In Progress)</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Designed and built a fully custom automated turntable system with digital control
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>End-of-record detection</li>
                      <li>Digital speed control</li>
                      <li>Custom PCB design and fabrication</li>
                      <li>Wireless control interface</li>
                      <li>3D printed and CNC mechanical components</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['PCB Design', 'Embedded Systems', 'CAD', '3D Printing', 'Motor Control', 'Wireless'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/turntable" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bioelectronics Research */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Bioelectronics Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fluorescent Cell Classifier */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80" 
                  alt="Cell Classification System"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Fluorescent Cell Classifier</h3>
                      <p className="text-blue-600 font-semibold">Columbia Bioelectronics Systems Lab Research</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Led FPGA development for high-speed classification of fluorescent cells in directed evolution experiments
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">System Components:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>TI ADS54J66 ADC configuration and integration</li>
                      <li>JESD204B protocol implementation</li>
                      <li>Real-time signal reconstruction</li>
                      <li>Configurable voltage threshold detection</li>
                      <li>USB data transmission interface</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['FPGA', 'Verilog', 'MATLAB', 'JESD204B', 'USB Protocol', 'Vivado'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/cell-classifier" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* BISC Relay Station */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={BISC} 
                  alt="Neural Interface System"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">BISC Relay Station Protocol</h3>
                      <p className="text-blue-600 font-semibold">Kampto Neurotech/Columbia Bioelectronics Systems Lab REU</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Developed a framework for complex stimulation patterns in a neural interface system-on-chip
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Independent REU project leadership</li>
                      <li>FPGA-level protocol development</li>
                      <li>Python PYNQ interface implementation</li>
                      <li>90% latency reduction achievement</li>
                      <li>RTL development and verification</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['FPGA', 'Verilog', 'Python PYNQ', 'RTL', 'Linux', 'Vivado'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects/bisc-relay" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Course Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Web Server */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">HTTP Web Server</h3>
                      <p className="text-blue-600 font-semibold">COMS3157 Advanced Programming</p>
                      <p className="text-gray-500">May 2024 | New York, NY</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Developed a robust HTTP 1.0 web server capable of serving static and dynamic web pages. Email if interested in project, as due to Academic Integrity Policy cannot publicly display on GitHub.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['C', 'HTML', 'Sockets', 'Valgrind', 'GDB'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Oscilloscope Driver Amplifier */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Oscilloscope Driver Amplifier</h3>
                  <p className="text-blue-600 mb-4">Analog Electronic Circuits Final Project</p>
                  <p className="text-gray-600 mb-4">
                    Designed and characterized an On-Chip 2-Stage CMOS 10V/V Feedback Amplifier in Cadence
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={OscilloscopeAmplifier} className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Report
                    </a>
                  </div>
                </div>
              </div>

              {/* Programmable AAF */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Programmable AntiAliasing Filter</h3>
                  <p className="text-blue-600 mb-4">Analog Filter Synthesis Project</p>
                  <p className="text-gray-600 mb-4">
                    Developed a digitally programmable 6th-order Ackerberg-Mossberg topology filter with multiple configurations
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={ProgrammableAAF} className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Nicolas Alarcon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/gameboy-emulator" element={<GameBoyProject />} />
      <Route path="/projects/:projectId" element={<InProgress />} />
    </Routes>
  );
}

export default App;