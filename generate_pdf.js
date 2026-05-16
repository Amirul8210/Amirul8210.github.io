const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/resume.pdf'));

// Add content
doc.fontSize(24).text('Khandaker Amirul Islam', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#666666').text('Backend Developer | DevOps Enthusiast | AI Researcher', { align: 'center' });
doc.moveDown(1);
doc.fillColor('black');

doc.fontSize(10).text('Email: amirul.islam@example.com | LinkedIn: linkedin.com/in/khandaker-amirul-islam-092aa9344 | GitHub: github.com/Amirul8210', { align: 'center' });
doc.moveDown(2);

doc.fontSize(16).text('Education', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('B.Sc. in Computer Science and Engineering');
doc.fontSize(10).fillColor('#444444').text('United International University');
doc.text('CGPA: 3.78');
doc.text('Focus: Backend Systems, Artificial Intelligence, Network Security');
doc.fillColor('black').moveDown(1);

doc.fontSize(16).text('Technical Skills', { underline: true });
doc.moveDown(0.5);
doc.fontSize(11).text('Languages: Python, Go, JavaScript/TypeScript, SQL');
doc.text('Backend Frameworks: Flask, FastAPI, Node.js, Next.js');
doc.text('DevOps & Cloud: Docker, Git, CI/CD, Linux, Basic Cloud Infrastructure');
doc.text('Tools: Terminal, REST APIs, Database Management (PostgreSQL, MongoDB)');
doc.moveDown(1);

doc.fontSize(16).text('Profile', { underline: true });
doc.moveDown(0.5);
doc.fontSize(11).text('Dedicated Computer Science and Engineering student with a strong problem-solving mindset. Specialized in the Python ecosystem, crafting robust APIs and scalable backend architectures. Deeply interested in the operational side of software—specifically DevOps, cloud automation, and infrastructure engineering. Actively participates in research-oriented software projects and competitive project showcases.', { align: 'justify' });
doc.moveDown(1);

doc.fontSize(16).text('Projects', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('Backend API Systems');
doc.fontSize(11).text('- Developed RESTful APIs using FastAPI and Flask.');
doc.text('- Implemented robust authentication and database schemas.');
doc.moveDown(0.5);
doc.fontSize(12).text('AI & Machine Learning Research');
doc.fontSize(11).text('- Participated in AI research and built machine learning models.');
doc.text('- Integrated AI models into backend services for real-time predictions.');
doc.moveDown(1);

doc.fontSize(16).text('Interests', { underline: true });
doc.moveDown(0.5);
doc.fontSize(11).text('- Backend System Architecture');
doc.text('- DevOps Automation');
doc.text('- Artificial Intelligence');
doc.text('- System and Network Security');

doc.end();

console.log('PDF generated successfully!');
