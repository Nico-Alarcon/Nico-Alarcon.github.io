// src/pages/LenScribe.tsx

/**
 * This file defines the LenScribe project page using the same narrative structure
 * as the Out‑of‑Order Processor page.  Each subsystem described in the poster
 * (microphone array, audio filtering, speech‑to‑text and AR display) is given
 * its own section with an accompanying image, caption, explanatory text and
 * concise bullet points.  At the bottom of the page there is a link to the
 * original project poster for readers who would like to dive into all of the
 * details.
 */

import React from 'react';
import ProjectPage from '../components/ProjectPage';

// Import the hero image and subsystem images.  These assets should live in
// the project's `src/images` directory.  The images used here have been
// padded with a white border so they do not get cropped when rendered on
// the web page.
import heroImage from '../images/lenscribe_3d_frame.png';
import micSectionImage from '../images/lenscribe_mic_section.png';
import filterSectionImage from '../images/lenscribe_filter_section.png';
import s2tSectionImage from '../images/lenscribe_s2t_section.png';
import arSectionImage from '../images/lenscribe_ar_section.png';
import pcbFinal from '../images/lenscribe_pcb.png';
import glassesWorn from '../images/lenscribe_glasses_worn.jpg';


// Import the project poster.  This PDF was generated from the original
// poster presentation and renamed for clarity.
import posterPDF from '../reports/LenScribePoster.pdf';

export default function LenScribe() {
  // Set the page title when the component mounts and restore the default
  // portfolio title when unmounted.
  React.useEffect(() => {
    document.title = 'LenScribe - Nicolas Alarcon';
    return () => {
      document.title = "Nicolas Alarcon's Portfolio";
    };
  }, []);

  return (
    <div>
      {/* Hero section at the top of the page */}
      <ProjectPage
        title="LenScribe: Beamforming Subtitle Glasses"
        description="A real‑time augmented reality speech display for enhanced communication."
        image={heroImage}
        technologies={[
          'Beamforming Microphone Array',
          '4th Order Bessel Audio Filter',
          'Raspberry Pi ASR',
          'AI Speech‑to‑Text',
          'Galilean AR Optics',
          'Custom Multi‑Layer PCB'
        ]}
        overview="LenScribe provides a more inclusive communication aid than traditional sound amplification. 
        It transcribes spoken words into text and displays them on the lens of Augmented Reality (AR) glasses 
        for the wearer to read. The system utilises a four‑microphone beamforming array and an AI‑integrated 
        speech‑to‑text engine to capture and process directional speech. The transcribed text is then projected 
        onto the AR display using custom optics, providing a discreet and accessible captioning solution."
      />

      {/* Detailed subsystems and documentation */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Microphone Array Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Microphone Array</h2>
              <div className="space-y-4">
                <img
                  src={micSectionImage}
                  alt="Microphone array diagram and beam pattern"
                  className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
                />
                <p className="text-sm text-center text-gray-600 mt-2">
                  Four‑microphone array with directional sensitivity and Max SNR beamforming
                </p>
                <p className="text-gray-700">
                  The microphone array filters out surrounding noise to capture speech with greater clarity and from a specific direction.  
                  By combining signals from four spatially separated microphones using a Max SNR beamforming algorithm, the array focuses 
                  on the speaker and attenuates ambient sounds, producing a narrow beam pattern that improves speech intelligibility.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Four microphones mounted on the glasses frame.</li>
                  <li>Max SNR beamforming to enhance the desired speech source.</li>
                  <li>Directional pattern reduces background noise and reverberation.</li>
                </ul>
              </div>
            </div>

            {/* Audio Filtering Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Audio Filtering</h2>
              <div className="space-y-4">
                <img
                  src={filterSectionImage}
                  alt="Audio filter circuit and frequency response"
                  className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
                />
                <p className="text-sm text-center text-gray-600 mt-2">
                  Two‑stage anti‑aliasing Bessel low‑pass filter for clean audio
                </p>
                <p className="text-gray-700">
                  After beamforming, the analog audio signal passes through a custom two‑stage, fourth‑order Bessel low‑pass filter.  Bessel filters are well suited for audio because they have a linear phase response and minimal ripple, preserving the natural quality of speech.  Our design cuts off at 8 kHz to remove high‑frequency noise before sampling.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>4th order Bessel topology implemented in two cascaded stages.</li>
                  <li>Passband frequency of 8 kHz to cover the speech band.</li>
                  <li>Linear phase response preserves intelligibility and reduces distortion.</li>
                </ul>
              </div>
            </div>

            {/* Speech‑to‑Text Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Speech‑to‑Text</h2>
              <div className="space-y-4">
                <img
                  src={s2tSectionImage}
                  alt="End-to-end Speech‑to‑Text system running on a Raspberry Pi"
                  className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
                />
                <p className="text-sm text-center text-gray-600 mt-2">
                  AI‑integrated automatic speech recognition on a Raspberry Pi
                </p>
                <p className="text-gray-700">
                  The filtered audio is digitized and processed by an automatic speech recognition (ASR) system running on a Raspberry Pi.  This AI‑based engine converts speech into text in real time, enabling the captions to keep pace with a conversation.  Optimising the system for low latency was critical to ensure the display remains synchronised with the speaker.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Raspberry Pi hosts the speech‑to‑text machine with ASR models.</li>
                  <li>80 k sample rate per second and 8 k frames per buffer.</li>
                  <li>Outputs transcribed text for immediate display on the AR lens.</li>
                </ul>
              </div>
            </div>

            {/* AR Display Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">AR Display</h2>
              <div className="space-y-4">
                <img
                  src={arSectionImage}
                  alt="AR display showing Galilean optics and prototype frame"
                  className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
                />
                <p className="text-sm text-center text-gray-600 mt-2">
                  Miniature OLED display with Galilean optics, mirror and semi‑transparent lens
                </p>
                <p className="text-gray-700">
                  The final subsystem projects the transcribed text into the user's field of view.  A 1 inch OLED screen renders the captions, which are then collimated and shrunk through a Galilean optical setup.  A small mirror reflects the image onto a piece of semi‑transparent plastic, overlaying the text on the real world without blocking the wearer’s vision.  A custom clip‑on frame and lens mount house the optics and electronics while keeping the glasses lightweight.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>1 inch OLED screen driven by an SSD1306 controller.</li>
                  <li>Galilean optical system collimates and shrinks the image.</li>
                  <li>Mirror and semi‑transparent lens project the text into the field of view.</li>
                  <li>3D‑printed clip‑on frame integrates the optics and electronics comfortably.</li>
                </ul>
              </div>
            </div>

            {/* Build Photos – place this before Recognition/Achievements */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Build Photos</h2>

              <p className="text-gray-800">
                Final hardware and a look at the assembled glasses in use.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* PCB */}
                <figure className="bg-white p-4 rounded-xl shadow-md">
                  <img
                    src={pcbFinal}
                    alt="Assembled 4-layer PCB for LenScribe"
                    className="w-full max-w-md mx-auto object-contain"
                  />
                  <figcaption className="text-sm text-center text-gray-600 mt-2">
                    Assembled 4-layer PCB with mic array, Bessel filter, ADC and power.
                  </figcaption>
                </figure>

                {/* Glasses worn */}
                <figure className="bg-white p-4 rounded-xl shadow-md">
                  <img
                    src={glassesWorn}
                    alt="LenScribe glasses being worn"
                    className="w-full max-w-md mx-auto object-contain"
                  />
                  <figcaption className="text-sm text-center text-gray-600 mt-2">
                    Working prototype: AR lens shows live captions while worn.
                  </figcaption>
                </figure>
              </div>
            </div>


            {/* Recognition Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Recognition</h2>
              <p className="text-gray-700">
                LenScribe was awarded <strong>first place</strong> in the Electrical Engineering
                Department at the Senior Design Expo.  The project demonstrated
                innovative integration of beamforming audio capture, low‑distortion
                filtering, AI speech recognition and miniature optics to build
                an inclusive assistive device.  Its success highlights the power of
                interdisciplinary engineering and user‑centred design.
              </p>
            </div>

            {/* Project Documentation / Poster Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Project Documentation</h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="space-y-4">
                  <a
                    href={posterPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span className="text-lg">Project Poster (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}