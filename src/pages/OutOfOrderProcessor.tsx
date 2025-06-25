// src/pages/OutOfOrderProcessor.tsx

import React from 'react';
import ProjectPage from '../components/ProjectPage';
import processorPDF from '../reports/OutOfOrderProcessor.pdf';
import processorSlides from '../reports/OutOfOrderProcessor_ppt.pdf';
import pipelineDiagram from '../images/p6_pipeline.png';
import branchPredictor from '../images/branch_predictor.png';
import lsqDiagram from '../images/lsq_microarchitecture.png';
import debuggerImage from '../images/debugger_output.png';
import testOutputImage from '../images/test_script.png';

export default function OutOfOrderProcessor() {
  React.useEffect(() => {
    document.title = "Out-of-Order Processor - Nicolas Alarcon";
    return () => {
      document.title = "Nicolas Alarcon's Portfolio";
    };
  }, []);

  return (
    <div>
      <ProjectPage
        title="Out-of-Order Pentium6 Processor"
        description="RISC-V processor implementing an out-of-order, Pentium6-style pipeline with dynamic scheduling, register renaming, memory disambiguation, and speculative execution."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
        technologies={[
          'RISC-V',
          'System Verilog',
          'Assembly',
          'Verification',
          'Computer Architectures',
          'C',
          'RTL',
          'Quartus'
        ]}
        overview="This processor was designed from the ground up to execute the RV32I instruction set using a 7-stage, out-of-order pipeline inspired by the Intel Pentium 6 using Tomasulo's Algorithm. I made contributions to the design and verification of the general pipeline, Reorder Buffer (ROB), Load/Store Queue (LSQ), and Map Table. 
        The project involved integrating structures incrementally—starting with a single instruction pipeline—before splitting development across caching, LSQ, and branch prediction, which were implemented in separate branches and then merged."
      />

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Pipeline & Memory System</h2>

              <div className="space-y-4">
                <img src={pipelineDiagram} alt="Pipeline Diagram" className="rounded-xl shadow-lg w-full max-w-3xl mx-auto" />
                <p className="text-sm text-center text-gray-600 mt-2">7-stage P6-style pipeline with dynamic scheduling and register renaming</p>
                <p className="text-gray-700">
                  Our pipeline follows a seven-stage design: Fetch, Decode, Dispatch, Issue, Execute, Retire, and Complete. Instructions move through these stages with register renaming and reservation stations enabling dynamic scheduling. A centralized Reorder Buffer ensures in-order retirement and precise exception handling.
                </p>
              </div>

              <div className="space-y-4">
                <img src={lsqDiagram} alt="LSQ Microarchitecture" className="rounded-xl shadow-lg w-full max-w-3xl mx-auto" />
                <p className="text-sm text-center text-gray-600 mt-2">Split Load/Store Queue with store-to-load forwarding support</p>
                <p className="text-gray-700">
                  The Load/Store Queue consists of separate Load and Store queues to manage memory operations in order. Load-to-store forwarding is supported, reducing memory latency. Store instructions commit in program order, ensuring memory consistency.
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/2 flex flex-col items-center">
                <img
                  src={branchPredictor}
                  alt="Branch Predictor Diagram"
                  className="rounded-xl shadow-lg w-full max-w-md"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">Structure of 2-bit PC-indexed branch predictor with 256-entry history table.</p>
              </div>
              <p className="md:w-1/2 text-gray-700">
                Our branch predictor features a 256-entry Branch History Table indexed by the PC, with each entry holding a 2-bit saturating counter. The predictor determines whether to fetch the next sequential instruction or jump to a target based on historical behavior. Updates occur post-execution, where correct or incorrect predictions adjust the counters. This reduces misprediction penalties and improves instruction throughput.
              </p>
            </div>`
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Development Methodology & Debugging</h2>
              <p className="text-gray-800">
                Our approach started with building standalone components, then connecting them in a simple pipeline that could run and retire a single instruction at a time. Once this foundation was verified, memory and control flow support were added gradually. The design was split across branches to parallelize efforts in LSQ, cache, and branch prediction, then merged and refined. A visual debugger was implemented to step through each pipeline stage and inspect internal processor states.
              </p>
              <div className="flex justify-center">
                <img src={debuggerImage} alt="Visual Debugger Output" className="rounded-xl shadow-lg w-full md:w-4/5 lg:w-3/4" />
              </div>
              <p className="text-sm text-center text-gray-600 mt-2">Cycle-by-cycle visualization tool used during integration and debugging.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Testing & Results</h2>
              <p className="text-gray-800">
                Testing included matrix multiplication, Fibonacci recursion, graph algorithms, and a neural network workload. Custom SystemVerilog and C testbenches validated memory correctness and pipeline behavior. Output from these tests was compared against a known-good in-order processor.
              </p>
              <div className="flex justify-center">
                <img src={testOutputImage} alt="Test Script Output" className="rounded-xl shadow-lg w-full md:w-2/3 lg:w-1/2" />
              </div>
              <p className="text-sm text-center text-gray-600 mt-2">Comparison output used to validate functional correctness.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">CPI by Architecture Stage</h3>
                <table className="table-auto border-collapse w-full text-sm text-gray-800">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border px-4 py-2">Design Stage</th>
                      <th className="border px-4 py-2">Average CPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-4 py-2">Base Out-of-Order Processor</td><td className="border px-4 py-2">7.59</td></tr>
                    <tr><td className="border px-4 py-2">+ Caching</td><td className="border px-4 py-2">6.49</td></tr>
                    <tr><td className="border px-4 py-2">+ Caching + LSQ</td><td className="border px-4 py-2">5.54</td></tr>
                    <tr><td className="border px-4 py-2 font-semibold">+ Caching + LSQ + Prefetching</td><td className="border px-4 py-2 font-semibold">4.16</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Branch Predictor Performance</h3>
                <table className="table-auto border-collapse w-full text-sm text-gray-800">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border px-4 py-2">Predictor Type</th>
                      <th className="border px-4 py-2">Avg CPI (All)</th>
                      <th className="border px-4 py-2">Avg CPI (C Only)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-4 py-2">Always Not Taken</td><td className="border px-4 py-2">4.16</td><td className="border px-4 py-2">3.61</td></tr>
                    <tr><td className="border px-4 py-2">Always Taken</td><td className="border px-4 py-2">3.95</td><td className="border px-4 py-2">3.35</td></tr>
                    <tr><td className="border px-4 py-2 font-semibold">Branch History Table</td><td className="border px-4 py-2 font-semibold">3.99</td><td className="border px-4 py-2 font-semibold">3.31</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Project Documentation</h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="space-y-4">
                  <a href={processorPDF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors">
                    <span className="text-lg">📄 Final Report (PDF)</span>
                  </a>
                  <a href={processorSlides} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors">
                    <span className="text-lg">📽️ Final Presentation Slides (PDF)</span>
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
