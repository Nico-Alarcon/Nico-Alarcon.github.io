import React from 'react';
import { FileText } from 'lucide-react';
import ProjectPage from '../components/ProjectPage';
import quadruped from '../images/quadruped.png';
import roareeRendering from '../images/roaree_rendering.jpg';
import wiring from'../images/wiring.png';
import explodedLeg from '../images/exploded_leg.png';
import stabilityPose from '../images/stability_pose.jpg';
import servoAnglesPlot from '../images/servo_angles_plot.png';
import roareePhoto from '../images/roaree.png';
import RoboticsStudio from '../reports/RoboticsStudio.pdf';

export default function QuadrupedRobot() {
  React.useEffect(() => {
    document.title = "Walking Quadruped Robot - Nicolas Alarcon";
    return () => {
      document.title = "Nicolas Alarcon's Portfolio";
    };
  }, []);

  return (
    <div>
      <ProjectPage
        title="Walking Quadruped Robot"
        description="Design, fabrication, and testing of a Raspberry Pi-controlled walking quadruped robot with fully articulated limbs, developed as part of the Columbia Robotics Studio course."
        image={quadruped}
        technologies={[
          'Solidworks',
          'Raspberry Pi',
          'Python',
          'Servo Control',
          '3D Printing',
          'Mechanical Design',
          'Gait Analysis',
          'CAD Rendering'
        ]}
        overview="This project involved the end-to-end development of a quadrupedal walking robot named Roaree’s Moving Shack. From AI-generated design inspiration to physical implementation, the process covered mechanical CAD modeling, stability and gait analysis, leg actuation, servo integration, power analysis, and real-world walking tests. The robot is modular, Raspberry Pi-controlled, and uses eight LX-16A metal servos."
        gallery={[
          {
            url: roareePhoto,
            title: "Final Robot Build",
            description: "Photo of Roaree's Moving Shack fully assembled with castle housing and articulated legs."
          },
          {
            url: servoAnglesPlot,
            title: "Servo Angles Over Time",
            description: "Graph tracking the angles of each servo during walking motion."
          },
          {
            url: stabilityPose,
            title: "Stability in Configurations",
            description: "Photos of the robot maintaining balance while sitting, standing, and on one leg."
          },
          {
            url: wiring,
            title: "Wiring and Internal Electronics",
            description: "Raspberry Pi, 5V Regulator, Battery, Servo Controller, and Wiring."
          },
          {
            url: roareeRendering,
            title: "3D Rendering",
            description: "CAD rendering of Roaree’s Moving Shack showing articulated limbs and detailed mechanical structure."
          },
          {
            url: explodedLeg,
            title: "Exploded View - Leg",
            description: "Component breakdown of a single robot leg, including servo motors, brackets, and joints."
          }
          
        ]}
        challenges={[
          "Balancing leg stability while maintaining range of motion",
          "Achieving consistent and predictable gait patterns",
          "Adapting mechanical design to print constraints and servo torque limits",
          "Ensuring precise servo control and synchronization",
          "Managing heat and power distribution within a compact chassis"
        ]}
        solutions={[
          "Used high-torque LX-16A servos with robust mechanical brackets",
          "Tested for stable gait key frames and interpolated between them",
          "Modified designs for manufacturability with smaller bed-size printers, lasercutting, or nylon",
          "Implemented synchronized control via Raspberry Pi Python scripts",
          "Integrated ventilation and modular assembly for easy adjustments"
        ]}
        achievements={[
          "Fully functional quadruped able to walk with multiple gaits",
          "Modular, 3D-printed design with field-serviceable components",
          "Successful demonstration of servo control and walking behavior",
          "3.49 cm/sec walking speed with verified balance at all gait phases"
        ]}
        conclusion="The Walking Quadruped Robot showcases an fullstack approach to robotics, combining mechanical, electrical, and software design into a cohesive, functioning system. Built from scratch using Solidworks, Python, and hands-on fabrication, this robot illustrates my ability to execute complex robotic projects from ideation to realization."
      />

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Video</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/rfJg42uXuSE?si=E_-21VQpzZeNIZeM"
                title="Walking Quadruped Demo"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Presentation</h2>
          <a 
            href={RoboticsStudio} 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <FileText className="w-5 h-5" />
            View Presentation Slides
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}
