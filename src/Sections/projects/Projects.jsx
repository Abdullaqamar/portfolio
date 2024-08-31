import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import computerVision from '../../assets/computer vision1.png';
import arduinoLCD from '../../assets/Arduino+LCD.jpeg';
import pythonGame from '../../assets/ezgif-3-5f84d827be.mp4';
import solidworksAnimation from '../../assets/0001-0171.mp4'; // New video import
import aimForge from '../../assets/AimForge.mp4'; // New video import
import robotTrolley from '../../assets/RobotTrolley.jpeg'; // New image import
import roboticArm from '../../assets/Robotarm.png'; // New image import
import ProjectCard from '../../common/ProjectCard';
import Thermalvideo from '../../assets/Thermalvideo.mp4'; // New video import

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
        <ProjectCard
          src={Thermalvideo}
          h3="Thermal Simulation using Abaqus FEA"
          p="• Conducted simulations using Abaqus to evaluate changes in thermal resistance during large plastic deformations at each deformation step."
          onButtonClick={() => handleOpenModal({ src: Thermalvideo, h3: "Thermal Resistance Simulation", p: "• Conducted simulations using Abaqus to evaluate changes in thermal resistance during large plastic deformations at each deformation stage." })}
          isVideo={true}
        />


        <ProjectCard
          src={computerVision}
          h3="OpenMV Cam computer vision"
          p="• Developed a computer vision algorithm for the OpenMV camera with Edge Impulse to track and identify kinds of plastics on the RVM conveyor."
          onButtonClick={() => handleOpenModal({ src: computerVision, h3: "OpenMV Cam computer vision", p: "Developed a computer vision algorithm for the OpenMV camera with Edge Impulse to track and identify kinds of plastics on the RVM conveyor." })}
        />
        <ProjectCard
          src={arduinoLCD}
          h3="Arduino+LCD 1.28″"
          p="• Developed and implemented software for an Arduino and Raspberry Pi Zero to process sensor data and display plastic type information on a 2.8-inch LCD, integrated into a handheld sensor gun."
          onButtonClick={() => handleOpenModal({ src: arduinoLCD, h3: "Arduino+LCD 1.28″", p: "• Developed and implemented software for an Arduino and Raspberry Pi Zero to process sensor data and display plastic type information on a 2.8-inch LCD, integrated into a handheld sensor gun." })}
        />
        <ProjectCard
          src={robotTrolley}
          h3="Mobile trolley"
          p="• Built a remotely controlled mobile platform with a team capable of carrying payloads of up to 50 kg."
          onButtonClick={() => handleOpenModal({ src: robotTrolley, h3: "Mobile trolley", p: "Built a remotely controlled mobile platform with a team capable of carrying payloads of up to 50 kg." })}
        />
        <ProjectCard
          src={solidworksAnimation}
          h3="3D Animation using SolidWorks"
          p="• Created a 3D animation in SolidWorks demonstrating plastic classification as promotional material for funding purposes."
          onButtonClick={() => handleOpenModal({ src: solidworksAnimation, h3: "3D Animation using SolidWorks", p: "• Created a 3D animation in SolidWorks demonstrating plastic classification as promotional material for funding purposes." })}
          isVideo={true}
        />
        <ProjectCard
          src={aimForge}
          h3="AimForge (3D FPS)"
          p="• Developed 'Aimforge,' a skill-enhancing game in Unity3D, designed to improve players Hand-Eye Coordinationa and Cognitive Skills., within a 3-day timeframe."
          onButtonClick={() => handleOpenModal({ src: aimForge, h3: "AimForge (3D FPS)", p: "• Developed 'Aimforge,' a skill-enhancing game in Unity3D, designed to improve players Hand-Eye Coordinationa and Cognitive Skills., within a 3-day timeframe." })}
          isVideo={true}
        />


        <ProjectCard
          src={pythonGame}
          h3="2D Python game"
          p="• Developed 'Box Bash,' a 2D game using the Pygame library, where players control a character to avoid colliding."
          onButtonClick={() => handleOpenModal({ src: pythonGame, h3: "2D Python game", p: "• Developed 'Box Bash,' a 2D game using the Pygame library, where players control a character to avoid colliding." })}
          isVideo={true}
        />
        <ProjectCard
          src={roboticArm}
          h3="Robotic Arm modelling"
          p="• Developed a six degrees of Freedom Robot Arm using SOLIDWORKS."
          onButtonClick={() => handleOpenModal({ src: roboticArm, h3: "Robotic Arm modelling", p: "Developed a six degrees of Freedom Robot Arm using SOLIDWORKS." })}
        />
      </div>
      {isModalOpen && (
        <>
          <div className={styles.overlay} onClick={handleCloseModal}></div>
          <div className={styles.modal}>
            {modalContent.src.endsWith('.mp4') ? (
              <video controls width="100%">
                <source src={modalContent.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={modalContent.src} alt={`${modalContent.h3} logo`} />
            )}
            <h3>{modalContent.h3}</h3>
            <p>{modalContent.p}</p>
            <button className={styles.closeButton} onClick={handleCloseModal}>X</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;
