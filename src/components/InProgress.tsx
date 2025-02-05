import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function InProgress() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const projectNames: { [key: string]: string } = {
    'vna-dashboard': 'VNA Analysis Dashboard',
    'lenscribe': 'Lenscribe',
    'gameboy-emulator': 'GameBoy DMG Hardware Emulator',
    'quadruped-robot': 'Walking Quadruped Robot',
    'superscalar-processor': 'Superscalar Out-of-Order Processor',
    'turntable': 'Automated Vinyl Record Player',
    'cell-classifier': 'Fluorescent Cell Classifier',
    'bisc-relay': 'BISC Relay Station Protocol',
    'http-server': 'HTTP Web Server',
    'oscilloscope-amplifier': 'Oscilloscope Driver Amplifier',
    'antialiasing-filter': 'Programmable AntiAliasing Filter'
  };

  const projectName = projectId ? projectNames[projectId] : 'Project';

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{projectName}</h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <p className="text-blue-800 text-lg">
            This project page is currently under construction. Check back soon for detailed information about {projectName}.
          </p>
        </div>
        <p className="text-gray-600">
          For more information about this project or to discuss collaboration opportunities, please feel free to contact me through any of the channels listed on my portfolio.
        </p>
      </div>
    </div>
  );
}