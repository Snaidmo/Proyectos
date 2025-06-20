export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills_container">
        <h2 className="skills_title">Skills</h2>
        <p className="skills-description">
          <div className="skills-list">
            <div className="title">Frameworks</div>
            <div className="list">
              <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            </div>
            
          </div>
          <div className="skills-list">
            <div className="title">Lenguajes</div>
           <div className="list">
             <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
            <li>Java</li>
           </div>
          </div>
          <div className="skills-list">
            <div className="title">Herramientas</div>
           <div className="list">
             <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>Notion</li>
           </div>
          </div>
        </p>
      </div>
    </section>
  );
};
