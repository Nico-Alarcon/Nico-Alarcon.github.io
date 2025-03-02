import React from 'react';
import ProjectPage from '../components/ProjectPage';
import gameboy from '../images/gameboyproject.png';
import systemBlockDiagram from '../images/system_block_diagram.png';
import qsysMapping from '../images/qsys_mapping.png';
import ppuBlockDiagram from '../images/ppu_block_diagram.png';
import vgaOutput from '../images/vga_output.png';
import gameBoySetup from '../images/GameBoySetup.jpg';
import gameBoySuccess from '../images/GameBoySuccess.jpg';
import githubIcon from '../images/icons8-github_blue.svg';
import proposal from '../reports/BameGoy.pdf';
import designDoc from '../reports/BameGoyDesignDoc.pdf';
import finalReport from '../reports/BameGoy-report.pdf';
import presentation from '../reports/BameGoy-presentation.pdf';
import { FileText, FileCode, Presentation } from 'lucide-react';

export default function GameBoyProject() {
  return (
    <div>
      <ProjectPage
        title="GameBoy DMG Hardware Emulator"
        description="A hardware-accurate GameBoy emulator implemented on an FPGA, developed while balancing a full-time position as a Quantum Hardware Engineering Intern at IBM. This project represents both a technical achievement in hardware design and a personal milestone in embedded systems development."
        image={gameboy}
        technologies={[
          'FPGA',
          'SystemVerilog',
          'C/C++',
          'Quartus',
          'QSys',
          'Verilator',
          'Linux',
          'USB Interface',
          'VGA Output'
        ]}
        overview="The BameGoy project is a comprehensive hardware implementation of the original GameBoy system, featuring cycle-accurate timing and authentic behavior. Built around a modified Z80 core compatible with the GameBoy instruction set, the system includes a fully-featured Pixel Processing Unit (PPU), memory management system, and VGA output capabilities. The implementation leverages QSys for system integration, demonstrating advanced hardware design principles and modern FPGA development practices."
        gallery={[
          {
            url: systemBlockDiagram,
            title: "CPU Core (Modified Z80)",
            description: "Custom CPU implementation running at 4.194304 MHz with GameBoy-specific instruction set modifications, including removed IX/IY registers and simplified flag handling"
          },
          {
            url: qsysMapping,
            title: "System Integration with QSys",
            description: "Comprehensive system integration using Intel QSys, managing interconnects between CPU, memory, and peripherals with proper clock domain crossing and bus arbitration"
          },
          {
            url: ppuBlockDiagram,
            title: "Pixel Processing Unit (PPU)",
            description: "Advanced tile-based graphics system supporting 160x144 resolution, sprite management, and background/window layers with precise scanline timing"
          },
          {
            url: vgaOutput,
            title: "VGA Output System",
            description: "Custom VGA controller scaling the 160x144 GameBoy output to 480x432 pixels, centered on a 640x480 VGA display"
          }
        ]}
        challenges={[
          "Balancing project development with full-time responsibilities at IBM's Quantum Hardware Engineering team",
          "Implementing complex system integration using QSys while maintaining cycle-accurate timing",
          "Managing multiple clock domains and ensuring proper synchronization across the system",
          "Coordinating memory access between CPU and PPU with proper timing",
          "Scaling and synchronizing the 160x144 output to VGA resolution",
          "Implementing proper interrupt handling for joypad input and PPU events"
        ]}
        solutions={[
          "Leveraged QSys for system integration, simplifying interconnect management and clock domain crossing",
          "Developed a modified Z80 core with GameBoy-specific timing and instruction set changes",
          "Created a state machine-based PPU controller handling OAM scan, pixel transfer, and blanking periods",
          "Implemented a priority-based memory access system with proper wait states",
          "Designed a custom VGA controller with framebuffer for resolution scaling",
          "Built an efficient interrupt controller handling all system events"
        ]}
        achievements={[
          'Successfully completed the project while maintaining full-time responsibilities at IBM',
          'Implemented comprehensive system integration using QSys for improved modularity',
          'Developed custom memory controller supporting ROM and RAM-based cartridges',
          'Created pixel processing unit (PPU) with accurate sprite and background rendering',
          'Integrated VGA output system with proper resolution scaling',
          'Successfully ran commercial 32kB GameBoy games with full compatibility',
          'Achieved timing accuracy within 1% of original hardware specifications'
        ]}
        conclusion="The BameGoy project represents not just a technical achievement in hardware emulation, but a personal milestone in balancing professional and academic pursuits. Developed while working full-time as a Quantum Hardware Engineering Intern at IBM, this project showcases both technical expertise in FPGA development and the ability to manage complex, long-term goals. The implementation of system integration using QSys demonstrates modern FPGA development practices, while the successful execution of the GameBoy architecture proves the feasibility of hardware-based emulation. This project, while challenging to complete alongside professional responsibilities, stands as one of my proudest achievements as an Electrical Engineer, representing the culmination of longtime personal goals and practical embedded systems expertise."
      />

      {/* Project Documentation Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Documentation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Design Documents */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Documents</h3>
                <div className="space-y-4">
                  <a 
                    href={proposal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Project Proposal</span>
                  </a>
                  <a 
                    href={designDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Design Document</span>
                  </a>
                  <a 
                    href={finalReport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Final Report</span>
                  </a>
                  <a 
                    href={presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Presentation className="w-5 h-5" />
                    <span>Final Presentation</span>
                  </a>
                </div>
              </div>

              {/* Source Files */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Source Files</h3>
                <div className="space-y-4">
                  <a 
                    href="https://github.com/Nico-Alarcon/GameBoy-Hardware-Emulator-DEI-Soc" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Photos Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project in Action</h2>
            <p className="text-lg text-gray-700 mb-10">
              The following photos showcase the final implementation of the GameBoy hardware emulator running on an FPGA development board with VGA output.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={gameBoySetup}
                  alt="GameBoy Emulator Setup"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hardware Setup</h3>
                  <p className="text-gray-700">
                    The complete hardware setup showing the FPGA development board connected to a VGA monitor, running a commercial GameBoy game with full compatibility.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={gameBoySuccess}
                  alt="Successful Implementation"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Successful Implementation</h3>
                  <p className="text-gray-700">
                    A proud moment showcasing the successful implementation of the GameBoy hardware emulator, demonstrating the project's functionality and achievement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}